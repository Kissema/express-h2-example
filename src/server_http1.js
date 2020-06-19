const http = require('http');
const express = require('express');

const routes = require('./routes');

const app = express();
routes(app);

const serverHttp = http.Server(app);
serverHttp.listen(3000, () => console.log("Running HTTP 1.1 Server"));