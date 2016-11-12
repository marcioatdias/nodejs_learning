var concat = require('concat-stream')


process.stdin
    .pipe(concat(function (buffer) {
        //use array reverse function
        var res = buffer
                    .toString()
                    .split('')
                    .reverse()
                    .join('');
            
        console.log(res);
        
    }));