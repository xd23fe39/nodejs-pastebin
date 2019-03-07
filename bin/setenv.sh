#!/bin/bash

##
# Config current node homedir
CURRENT_NODE="/opt/node/current"

##
# make it executable
export PATH="$CURRENT_NODE/bin:$PATH"

##
# Get current versions
NODE_VER=$(node -v)
NPM_VER=$(npm -v)
NODEJS_VER=$(nodejs -v)

## 
# EXIT Codes
##

RETCODE_OK=0                            # OK
RETCODE_FAILURE_VERSION_CONFLICT=9      # Keine Übereinstimmung von node und nodejs
RETCODE_FAILURE_NOT_AVAILABLE=2         # Keine Übereinstimmung von node und nodejs

## 
# MAIN 
##

if [ -d "$CURRENT_NODE" ]; then
    echo; echo "  Found: $CURRENT_NODE"
else
    echo; echo "  Node not found! Check folder: $CURRENT_NODE"; echo
    exit $RETCODE_FAILURE_NOT_AVAILABLE
fi
echo

if [ "$NODE_VER" == "$NODEJS_VER" ]; then
    echo "  Version: $NODE_VER ($NPM_VER)"; echo
else
    echo; echo "  Fehler bei der Installation von node/nodejs: Umgebung prüfen!"; echo
    exit $RETCODE_FAILURE_VERSION_CONFLICT
fi

echo; echo "  Type: . ./`basename $0` for setting up environment."; echo

return $RETCODE_OK
