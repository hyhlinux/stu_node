var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./data/input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./data/output.zip'))



console.log('zip ok');
