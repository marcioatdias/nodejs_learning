var through = require('through2');

var transform = through( function(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});

process.stdin.pipe(transform).pipe(process.stdout);