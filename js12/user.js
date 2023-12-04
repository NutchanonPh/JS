const { readFile } = require('fs');
readFile(
    'user.json',
    'utf-8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);