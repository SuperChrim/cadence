# Hayley Yukihiro
# Lookup Table Class
# Created On: 2022-03-10 23:11:19
# Last updated by: Hayley Yukihiro, 2022-03-25-2022 12:31:00


import csv
import pandas as pd
import os
from os import listdir
from os.path import isfile, join
import re
import pandas as pd

#user = input("Hello, thank you for using the Cadence Lookup Table. Please provide your username (For reference, username would reside within this structure /Users/tsuru/OneDrive/): ")
user = 'lydia'
print("Look Up Table is Processing")

# Establishes lookup table
df = pd.read_csv('/Users/' + user + '/Liberty University/Group-Cadence Data Simulator-Document Platform - Documents/NodeID_SIM_LookUpTable.csv')
node = df['Title']
sim = df['SIM ID']
lookupNode = {}
lookupSIM = {}

updatedFile = set()

# Lookup SIMID from given NodeID
for x in range(node.size):
    lookupSIM[node[x]] = sim[x]
def findSIM(node):
    return lookupSIM[node]

# Lookup NodeID from given SIMID
for x in range(sim.size):
    lookupNode[sim[x]] = node[x]
def findNode(sim):
    return lookupNode[sim]

# Populate SIM IDs
def fillSIM(file):
    filesize = os.path.getsize(file)
    if filesize < 1000:
        return
    app = pd.read_csv(file)
    if app.shape[0] < 500:
        return
    nodeID = app['NodeID']
    simID = []
    for x in nodeID:
        simID.append(findSIM(x))
    app['SIM ID'] = simID
    app.to_csv(file, index=False)
    updatedFile.add(file)

# Populate Node IDs
def fillNode(file):
    filesize = os.path.getsize(file)
    if filesize < 1000:
        return
    net = pd.read_csv(file)
    if net.shape[0] < 1000:
        return
    simID = net['ICCID(SIM ID)']
    nodeID = []
    for x in simID:
        nodeID.append(findNode(x))
    net['NodeID'] = nodeID
    net.to_csv(file, index=False)
    updatedFile.add(file)

try:
    while True:
        onlyfiles = [f for f in listdir('/Users/' + user + '/Liberty University/Group-Cadence Data Simulator-Document Platform - Documents/Data Simulator Offload/') if isfile(join('/Users/' + user + '/Liberty University/Group-Cadence Data Simulator-Document Platform - Documents/Data Simulator Offload/', f))]
        appReports = []
        networkReports = []
        for file in onlyfiles:
            if re.match(r'^AppReport', file):
                appReports.append('/Users/' + user + '/Liberty University/Group-Cadence Data Simulator-Document Platform - Documents/Data Simulator Offload/'+file)
            
            if re.match(r'^NetworkReport', file):
                networkReports.append('/Users/' + user + '/Liberty University/Group-Cadence Data Simulator-Document Platform - Documents/Data Simulator Offload/'+file)

        for x in appReports:
            if x not in updatedFile:
                fillSIM(x)

        for x in networkReports:
            if x not in updatedFile:
                fillNode(x)

except KeyboardInterrupt:
    print("Finished Program")