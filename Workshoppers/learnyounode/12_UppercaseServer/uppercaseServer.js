var http = require('http');
var map = require("through2-map");

const HTTP_PORT = process.argv[2];

HTTP_PORT = HTTP_PORT ? HTTP_PORT : 9999;

var server = http.createServer((req, res) => {
  console.log("Client connected");
   if (req.method == 'POST') {
     console.log("IS A POST");
     res.writeHead(200, { 'content-type': 'text/plain' }); 
     req.pipe(map((chunk) => {
       console.log("a chunk")
       return chunk.toString().toUpperCase();
     })).pipe(res);
   }
  
});

server.listen(HTTP_PORT, () => {
  console.log('listening on ', HTTP_PORT);
});