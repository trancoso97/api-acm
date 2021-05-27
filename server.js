const http = require('http');
const app = require('./src/app');
const port = process.env.PORT || 999;
const server = http.createServer(app);
server.listen(port);
console.log('Server running on localhost:999');