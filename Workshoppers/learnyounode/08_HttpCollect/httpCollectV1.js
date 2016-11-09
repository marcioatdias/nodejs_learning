var http = require('http');

var url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  var data = ""
  response.on('data', (chunk) => data +=chunk);
  response.on('error', (e) => console.error(e));
  response.on('end', () => {
    console.log(data.length);
    console.log(data);
    
  });
}).on('error', (e) => console.error(e));