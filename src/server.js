const http = require('http');
const express = require('express');
const routes = require('./routes');

const http2 = require('express-h2');
const fs = require('fs');


const app = express();
routes(app);

//HTTP 1.1 Server
const serverHttp = http.Server(app);
serverHttp.listen(3000, () => console.log("Running HTTP 1.1 Server"));

 //HTTP 2 Server
const secureOptions = {
  key: fs.readFileSync('./cert/certificate.key'),
  cert: fs.readFileSync('./cert/certificate.crt')
};

const serverHttp2 = http2.createSecureServer(secureOptions, routes);
serverHttp2.listen(3443, () => console.log("Running HTTP 2 Server"));