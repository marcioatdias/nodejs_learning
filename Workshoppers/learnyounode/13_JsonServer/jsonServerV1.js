var http = require('http');

var HTTP_PORT = process.argv[2];

HTTP_PORT = !isNaN(HTTP_PORT) ? HTTP_PORT : 9999;

function parseTime(date) {
    console.log('parsing time',date);
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
        var urlArgs = req.url.split('/');
        console.log(urlArgs);
        if(urlArgs[1] === 'api'){
            var params = urlArgs[2].split('?');
            var date = new Date(params[1].split('=')[1]);
            
            if(params[0] === 'parsetime'){
                json = parseTime(date);
                
            }else if(params[0] === 'unixtime'){
                json = getUnixTime(date);
            }
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