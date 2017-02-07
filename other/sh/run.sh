#!/bin/bash
echo "ERR: sh scripts are deprecated. Do not use."
exit 0

# Figure out what the carrier return is.
cr=`echo $'\n.'`
cr=${cr%.}

# Start web server
cd web
python -m SimpleHTTPServer 4000 > ../logs/web.log 2>&1 & 
WEB_PID=$!

echo Web server started, pid: $WEB_PID

# Start NodeJS
cd ../bridge
#node main.js > ../logs/bridge.log 2>&1 &
node main.js > >(tee -i ../logs/bridge.log) 2>&1 &
BRIDGE_PID=$!

echo Bridge running, pid: $BRIDGE_PID

# Start spi server
cd ../sonic-pi/app/server/bin
../native/osx/ruby/bin/ruby sonic-pi-server.rb > ../../../../logs/sonicpi.log 2>&1 &
SPI_PID=$!

echo SonicPi server running, pid: $SPI_PID

open http://localhost:4000/
echo 
echo

read  -n 1 -p "Press any key to close the app $cr>>>BRIDGE LOG: $cr" useless

echo "Killing web server & bridge"
kill $WEB_PID
kill $BRIDGE_PID
kill $SPI_PID

