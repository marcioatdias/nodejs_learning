var http = require('http');
var url = require('url');

var HTTP_PORT = process.argv[2];

HTTP_PORT = !isNaN(HTTP_PORT) ? HTTP_PORT : 9999;

function parseTime(date) {
    
    return {
            'hour' : date.getHours(),
            'minute' : date.getMinutes(),
            'second' : date.getSeconds()
            };
}

function getUnixTime(date) {
    return { 'unixtime' : date.getTime() };
}

var server = http.createServer((req, res) => {
    console.log('Client connected', req.url);
    
    var json;
    if (req.method == 'GET') {
        console.log("IS A GET");
        
        var parsedUrl = url.parse(req.url, true); 
        var date = new Date(parsedUrl.query.iso);  
        
        
        if (/^\/api\/parsetime/.test(req.url)) {  
          json = parseTime(date);  
        } else if (/^\/api\/unixtime/.test(req.url)) {  
          json = getUnixTime(date);
        } 
   }

    
    if(json){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(json));
    }else{
        res.writeHead(404)  
        res.end('NOT FOUND')
    }
    
   
  
});

server.listen(HTTP_PORT, () => {
  console.log('listening on ', HTTP_PORT);
});