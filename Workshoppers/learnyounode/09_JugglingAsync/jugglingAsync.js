var http = require('http');
var bl = require('bl');

var callbackCount = 0;
var dataList = ["","",""]

getUrl(process.argv[2], 0);
getUrl(process.argv[3], 1);
getUrl(process.argv[4], 2);

function printData(){
  callbackCount++
  if(callbackCount === 3)
    dataList.forEach((data) => console.log(data));  
}

function getUrl(url, index) {
  http.get(url, (response) => {
    response.pipe(bl( (err,data) => {
      if(err)
        console.error(err);
      else
        dataList[index] = data.toString();
      
      printData();
      
    }));
  }).on('error', (e) => {
    console.error(e);
    printData();
    });
}
