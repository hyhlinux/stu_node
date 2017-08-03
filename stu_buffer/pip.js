var fs = require('fs');

var readStream = fs.createReadStream('./data/input.txt');
var writeStream = fs.createWriteStream('./data/output.txt');


readStream.pipe(writeStream);

console.log('pip finish');
