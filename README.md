# nodesjs-pastebin

#### Aktuelle Version (LTS)

NodeJS Download:
- [NodeJS Homepage](https://nodejs.org/en)
- [API Reference Guide](https://nodejs.org/api/)

#### Installation unter Linux (x64)

Nach der Installation von NodeJS stehen die Tools `node` und `npm` zur Verfügung:

- Script Interpreter und JS Runtime (`node`)
- Node Packet Manager (`npm`)

Manuelle Installation von NodeJS:
```
sudo -i
mkdir /opt/node
cd /opt/node
DOWNLOAD_URL=https://nodejs.org/dist/v8.12.0/node-v8.12.0-linux-x64.tar.xz
wget $DOWNLOAD_URL
tar xf node-v6.11.0-linux-x64.tar.xz
ln -s node-v8.12.0-linux-x64 current
export PATH="/opt/node/current/bin:$PATH"
cd /opt/node/current/bin
ln -s node nodejs
which node
which nodejs
which npm
```

#### Das erste node.js-Programm

Anlegen eines NodesJS Scriptes `Hello.js` mit folgendem Inhalt:
```
/* First nodejs program */
console.log('This is a simple NodeJS script!');
```

Ausführen des Scriptes:
```
node Hello.js
```

Direktes Ausführen des Scriptes:
```
#!/usr/bin/env node
```

Beginnt das NodeJS Script mit der o.a. Instruktionsanweisung und wurde die Script-Datei mittels `chmod a+x *.js` ausführbar gemacht, kann das Script direkt gestartet werden.

#### Vorlage für ein Programm-Script (main.js)

```
#!/usr/bin/env node
/**
 ** Node.JS Application
 **
 ** SimpleWebServer (2017)
 */

var http = require("http");
var port = 8765;

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(port);

// Console will print the message
console.log('Server running at http://127.0.0.1:'+port+'/');
```

#### Lokale Kopie erstellen (git)

```
git clone https://github.com/xd23fe39/nodejs-samples.git
```
