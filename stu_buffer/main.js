var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('./data/input.txt');

readerStream.setEncoding('UTF8')
readerStream.on('data', function(chunk) {
    data += chunk;
});
readerStream.on('end', function() {
    console.log('data:', data);
});
readerStream.on('error', function() {
    console.log('err:', err.stack);
});

console.log('程序执行完毕');
