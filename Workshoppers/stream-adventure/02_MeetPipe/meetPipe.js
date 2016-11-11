var fs = require('fs');

var filePath = process.argv[2]

fs.createReadStream(filePath).pipe(process.stdout);