var through = require('through2');
var split = require('split')

var count = 0;
var transform = through( function(buffer, encoding, next) {
    count++;
    var res = buffer.toString();
    res = count%2===0 ? res.toUpperCase() : res.toLowerCase();
    this.push(res + '\n');
    next();
});

process.stdin
    .pipe(split())
    .pipe(transform)
    .pipe(process.stdout);