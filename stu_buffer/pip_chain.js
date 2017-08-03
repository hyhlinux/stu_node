var fs = require('fs');
var zlib = require('zlib');

// fs.createReadStream('./data/input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('./data/output.zip'))

fs.createReadStream('./data/output.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('./data/unzipoutput.txt'))


console.log('zip ok');
