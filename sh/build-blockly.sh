#!/bin/bash
echo "ERR: sh scripts are deprecated. do not use"
exit 0

cd blockly
python build.py

cp blockly_compressed.js ../web/js/
cp blocks_compressed.js ../web/js/
cp sonicpi_compressed.js ../web/js/
cp -r msg ../web/js/msg
cp -r media ../web/media
