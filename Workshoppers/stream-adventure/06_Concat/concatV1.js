var concat = require('concat-stream')


process.stdin
    .pipe(concat(function (buffer) {
        var orig = buffer.toString();
        var res = ""
        for(var i=orig.length-1; i>=0; i--)
            res += orig[i];
            
        console.log(res);
        
    }));