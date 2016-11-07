var fs = require('fs');
var path = require('path');

module.exports = function(folderPath, extension, callback){

  extension = '.' + extension;

  fs.readdir(folderPath, function(err, files){
    if(err)
    {
      return callback(err, null);
    }

    var filteredFiles = [];
    for(var i=0; i<files.length; i++){
      if(path.extname(files[i]).toUpperCase() === extension.toUpperCase())
          filteredFiles.push(files[i]);
    }

    return callback(null, filteredFiles);

  });
}
