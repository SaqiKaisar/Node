console.log('begin');
const fs = require('fs');

fs.readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const first = data;
        //console.log(first);
        fs.readFile('./content/second.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const second = data;
                //console.log(second);
                fs.writeFile('./content/result_async.txt', `Here is the result: ${first}, ${second}`, 'utf8', (err, data) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        const result=data;
                        console.log('end');
                    }
                }
                )
            }
        }
        )
    }
})
console.log('starting new task');