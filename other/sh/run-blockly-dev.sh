#!/bin/bash
echo "ERR: sh scripts are deprecated. do not use.";
exit 0;

cd blockly
echo "Starting block factory on http://localhost:3000/blockfactory/"
python -m SimpleHTTPServer 3000
