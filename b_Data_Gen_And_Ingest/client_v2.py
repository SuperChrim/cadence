# last edited by Michael Di Girolamo at 4/7/22 8:00 PM

from logging import exception
import socket
import time
from zipfile import ZipFile
from datetime import datetime
import csv
import schedule
import shutil
import os
import sys

# ------- File Paths -----------
user = 'lydia'
#user = 'baseb'
parent_path = 'C:/Users/' + user + '/Downloads/cadence_1/'
zip_path = parent_path + 'client_temp/'             # file path for the zipped log files (relative or absolute path)
arch_path = zip_path + 'archive/'                   # file path for archived original log files (relative or absolute path)
dest_path = parent_path                             # where the zips will be picked up to be emailed
hb_path = zip_path                                  # path for the heartbeat file

# ------- Heartbeat Code ------

# do once
heartbeat_time = datetime.now().strftime("%Y-%m-%d_%H%M%S")
with open(hb_path + 'ClientHEARTBEAT_' + heartbeat_time + '.csv', 'w+', newline = '') as file1:
    ClientHeartbeat = csv.writer(file1)
    ClientHeartbeat.writerow(['Time', 'Status', 'Files Processed'])
    ClientHeartbeat.writerow([datetime.now().strftime("%Y-%m-%d_%H%M%S"), "Begin Run", 0])

# Function to generate a heartbeat every 5 minutes
def heartbeat():
    with open(hb_path + '/ClientHEARTBEAT_' + heartbeat_time + '.csv', 'a', newline = '') as file1:
        ClientHeartbeat = csv.writer(file1)
        ClientHeartbeat.writerow([datetime.now().strftime("%Y-%m-%d_%H%M%S"), "Working", int(filecount)])

schedule.every(5).seconds.do(heartbeat) # shortened time for testing purposes
#schedule.every(5).minutes.do(heartbeat)
   
# ------ Receive Data Code ------

def receive_data(port, zip_path, arch_path, dest_path):
    global filecount
    filecount = 0
    device_no = port%10
    print('Device_no: ' + str(device_no))
    while True:
        start_time = time.time()
        file_seconds = 10 # write duration for one log file
        elapsed_time = 0

        timestamp = datetime.now().strftime("%Y-%m-%d_%H%M%S")
        filename = 'Device' + str(device_no) + 'Log_' + timestamp

        with open(zip_path + filename + '.log','w+') as file:
            while elapsed_time < file_seconds:
                schedule.run_pending()
                current_time = time.time()
                elapsed_time = current_time - start_time

                s = socket.socket()
                print("client socket created")
                try:
                    s.connect(('127.0.0.1', port)) # times out here if connection is not made
                    data = s.recv(1024) # throws exception here if server is closed
                    print (data.decode())
                except ConnectionResetError:
                    print("Error: Connection was likely closed by the server")
                    s.close()                 # closes socket
                    file.close()
                    delemptyfiles(zip_path)                         # Delete any empty files
                    zip_logfile(filename, zip_path)                 # Zip the file
                    move_zip(filename, zip_path, dest_path)         # Move zip file to new location (to be emailed)
                    archive_logfile(filename, zip_path, arch_path)  # Archive the log file
                    quit()
                except ConnectionRefusedError:
                    print("Error: Connection may have never been established")
                    s.close()                 # closes socket
                    file.close()
                    delemptyfiles(zip_path)                         # Delete any empty files
                    zip_logfile(filename, zip_path)                 # Zip the file - should zip an empty log?
                    move_zip(filename, zip_path, dest_path)         # Move zip file to new location (to be emailed)
                    archive_logfile(filename, zip_path, arch_path)  # Archive the log file
                    try:
                        time.sleep(5)
                    except KeyboardInterrupt:
                        print("Accepted keyboard interrupt")
                        #zip_logfile(filename)     # Zip the file
                        #archive_logfile(filename) # Archive the log file
                        quit()
                    print("Retrying...")
                    #quit()
                    continue    # will continue retrying until a connection is made
                except KeyboardInterrupt:
                    print("Keyboard Interrupt - Closing...")
                    s.close()                 # closes socket
                    file.close()
                    delemptyfiles(zip_path)                         # Delete any empty files
                    zip_logfile(filename, zip_path)                 # Zip the file
                    move_zip(filename, zip_path, dest_path)         # Move zip file to new location (to be emailed)
                    archive_logfile(filename, zip_path, arch_path)  # Archive the log file
                    quit()
                except Exception as e:
                    print("An unexpected error occured")
                    print(e)
                    delemptyfiles(zip_path)                         # Delete any empty files
                    quit()

                DeviceLog = csv.writer(file)
                #file.write(data.decode())
                #file.writelines(array) # can you dynamically add to an array? -> yes -> append
                DeviceLog.writerow([data.decode()]) # is this function causing the empty rows?

                print ("Closing socket")
                s.close()
                schedule.run_pending()
                #time.sleep(1) # for debugging purposes
        filecount = filecount + 1

        zip_logfile(filename, zip_path)                             # Zip the file
        move_zip(filename, zip_path, dest_path)                     # Move zip file to new location (to be emailed)
        archive_logfile(filename, zip_path, arch_path)              # Archive the log file

# Zip Log File Function
def zip_logfile(filename, zip_path):
    try:
        with ZipFile(zip_path + filename + '.zip', 'w') as zipObj:
            os.chdir(zip_path)   # changes directory so a 'logs' file is not included in the zip
            zipObj.write(filename + '.log')
            #os.chdir('..')      # reverts to parent directory
    except FileNotFoundError:
        print(f'(zip_logfile) File not found: {filename}.log')
        try:
            os.remove(filename + '.zip')
        except FileNotFoundError:
            print(f'(Zip file not found: {filename}.zip)')

# Archive Log File Function
def archive_logfile(filename, zip_path, arch_path):
    srcpath = zip_path + filename + '.log'
    destpath = arch_path + filename + '.log'
    try:
        shutil.move(srcpath, destpath)
    except FileNotFoundError:
        print(f'(archive_logfile) File not found: {filename}.log')

# Delete Empty Files Function
def delemptyfiles(rootdir):
    try:
        for root, dirs, files in os.walk(rootdir):
            for f in files:
                fullname = os.path.join(root, f)
                if os.path.getsize(fullname) == 0:
                    print (f'Deleted: {fullname}')
                    os.remove(fullname)
    except FileNotFoundError:
        print(f'File not found: {fullname}')
    except PermissionError:
        print(f'Access is not granted: {fullname}')
            
# Check for Specified Directory
def checkdir(directory_path):
    if os.path.isdir(directory_path) is True:
        print(f"{directory_path} already exists")
    else: 
        os.makedirs(directory_path)
        print(f"{directory_path} has been created")

def move_zip(filename, zip_path, dest_path):
    srcpath = zip_path + filename + '.zip'
    destpath = dest_path + filename + '.zip'
    try:
        shutil.move(srcpath, destpath)
    except FileNotFoundError:
        print(f'(move_zip) File not found: {filename}.zip')


# Run the program
#port = input("Please provide the port: ")
#checkdir(arch_path)
#receive_data(port)
#receive_data(5601)
