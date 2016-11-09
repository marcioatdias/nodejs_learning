var http = require('http');
var fs = require('fs');

const HTTP_PORT = process.argv[2];
var filePath = process.argv[3];

HTTP_PORT = HTTP_PORT ? HTTP_PORT : 9999;

var server = http.createServer((req, res) => {
  console.log("Client connected", filePath);
  res.writeHead(200, { 'content-type': 'text/plain' }) 
  var rStream = fs.createReadStream(filePath);
  rStream.pipe(res);
  
});

server.listen(HTTP_PORT, () => {
  console.log('listening on ', HTTP_PORT);
});