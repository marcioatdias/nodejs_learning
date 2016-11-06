
/*
# LEARN YOU THE NODE.JS FOR MUCH WIN!

## MY FIRST ASYNC I/O! (Exercise 4 of 13)

 Write a program that uses a single asynchronous filesystem operation to
 read a file and print the number of newlines it contains to the console
 (stdout), similar to running cat file | wc -l.

 The full path to the file to read will be provided as the first
 command-line argument.
*/
var fs = require('fs');

var filename = process.argv[2];


fs.readFile(filename, function(err, data){
  if(err)
  {
    return console.log(err);
  }
  console.log(data.toString().split("\n").length-1);
});
