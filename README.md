# nodesjs-pastebin

#### Aktuelle Version (LTS)

NodeJS Download:
- Homepage, <https://nodejs.org/en/>
- API Docs, <https://nodejs.org/dist/latest-v6.x/docs/api/>

#### Installation unter Linux (x64)

Nach der Installation von NodeJS stehen die Tools `node` und `npm` zur Verfügung:

- Script Interpreter und JS Runtime (`node`)
- Node Packet Manager (`npm`)

Manuelle Installation von NodeJS:
```
sudo -i
INSTALL_PATH='/opt/node-v6'
mkdir -p ${INSTALL_PATH}
cd ${INSTALL_PATH}
wget https://nodejs.org/dist/v6.11.0/node-v6.11.0-linux-x64.tar.xz
tar xf node-v6.11.0-linux-x64.tar.xz
```

Anlegen von Links unter `/opt/bin`
```
ln -s /opt/node-v6/node-v6.11.0-linux-x64/bin/node /usr/bin/node
ln -s /opt/node-v6/node-v6.11.0-linux-x64/bin/npm /usr/bin/npm
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
