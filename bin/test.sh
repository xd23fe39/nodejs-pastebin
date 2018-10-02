#!/bin/bash

NODE_VER=$(node -v)
NPM_VER=$(npm -v)
NODEJS_VER=$(nodejs -v)

CURRENT_NODE="/opt/node/current"

export PATH="$CURRENT_NODE/bin:$PATH"

## 
# EXIT Codes
##

RETCODE_OK=0                            # OK
RETCODE_FAILURE_VERSION_CONFLICT=9      # Keine Übereinstimmung von node und nodejs

## 
# MAIN 
##

if [ "$NODE_VER" == "$NODEJS_VER" ]; then
    echo; echo "  Version: $NODE_VER ($NPM_VER)"; echo
    exit $RETCODE_OK
else
    echo; echo "  Fehler bei der Installation von node/nodejs: Umgebung prüfen!"; echo
    exit $RETCODE_FAILURE_VERSION_CONFLICT
fi
