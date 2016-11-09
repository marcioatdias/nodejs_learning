var net = require('net');

const HTTP_PORT = process.argv[2];
HTTP_PORT = HTTP_PORT ? HTTP_PORT : 9999;

function lpad(number){
  return number > 9 ? number : "0"+ number;
  
}

function getDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = lpad(date.getMonth()+1);
  var dayOfMonth = lpad(date.getDate());
  var hours =lpad(date.getHours());
  var minutes = lpad(date.getMinutes());
  
  return year + '-' + month + '-' + dayOfMonth + ' ' + hours + ':' + minutes;
}

var server = net.createServer((socket) => {
  
  console.log('Client connected')
  
  
  socket.end(getDate() + '\n');
});

server.on('error', (err) => console.error("..."+err));
server.listen(HTTP_PORT, () => {
  console.log('listening on ', HTTP_PORT);
});
