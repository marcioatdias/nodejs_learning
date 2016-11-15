var http = require('http');
var through = require("through2");

var HTTP_PORT = process.argv[2];

HTTP_PORT = HTTP_PORT ? HTTP_PORT : 9999;

var server = http.createServer(function (req, res) {
   if (req.method == 'POST') { 
     req.pipe(through(function (chunk, _, next) {
       this.push(chunk.toString().toUpperCase());
       next()
     }), (done) => done()).pipe(res);
   } else{
       res.end('NOT POST')
   }
  
});

server.listen(HTTP_PORT, () => {
  console.log('listening on ', HTTP_PORT);
});