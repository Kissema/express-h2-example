const http2 = require('express-h2');
const routes = require('./routes');
const fs = require('fs');

const secureOptions = {
    key: fs.readFileSync('./cert/certificate.key'),
    cert: fs.readFileSync('./cert/certificate.crt')
  };

const serverHttp2 = http2.createSecureServer(secureOptions, routes);
serverHttp2.listen(3443, () => console.log("Running HTTP 2 Server"));