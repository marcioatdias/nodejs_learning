var listFilter = require('./filterFileByExtension.js');

var folderPath = process.argv[2];
var extension = process.argv[3];

listFilter(folderPath, extension, function(err, files){
  if(err)
    return console.log(err);

    for(var i=0; i<files.length; i++){
          console.log(files[i]);
    }
});
