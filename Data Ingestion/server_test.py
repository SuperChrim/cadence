import time
from server import *

x = server(5601)
x.start_server()
x.send_data("class test")
time.sleep(1)
x.send_data("class test 1")
time.sleep(1)
#x.send_data("Beginning of Log\n03 Feb 2022 10:43:44 PM:,Device NodeID A000001 Sending Hello World 1\n03 Feb 2022 10:43:52 PM:,Device NodeID A000001 Sending Hello World 2\n03 Feb 2022 10:44:00 PM:,Device NodeID A000001 Sending Hello World 3\n03 Feb 2022 10:44:08 PM:,Device NodeID A000001 Sending Hello World 4\n03 Feb 2022 10:44:16 PM:,Device NodeID A000001 Sending Hello World 5\n03 Feb 2022 10:44:24 PM:,Device NodeID A000001 Sending Hello World 6\n03 Feb 2022 10:44:32 PM:,Device NodeID A000001 Sending Hello World 7\n03 Feb 2022 10:44:41 PM:,Device NodeID A000001 Sending Hello World 8\n03 Feb 2022 10:44:49 PM:,Device NodeID A000001 Sending Hello World 9\n03 Feb 2022 10:44:57 PM:,Device NodeID A000001 Sending Hello World 10")
x.send_data("class test 2")
time.sleep(1)
x.send_data("class test 3")
time.sleep(1)
x.send_data("class test 4")
time.sleep(1)
x.send_data("class test 5")
time.sleep(1)
x.send_data("class test 6")
time.sleep(1)
x.send_data("class test 7")
time.sleep(1)
x.send_data("class test 8")
time.sleep(1)
x.send_data("class test 9")
time.sleep(1)
x.stop_server()