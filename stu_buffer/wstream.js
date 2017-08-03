var fs = require('fs');

var data = 'node js test';

var writerStream = fs.createWriteStream('./data/output.txt');

writerStream.write(data, 'UTF8');

writerStream.end()

writerStream.on('finish', function() {
    console.log('写入完成');
});

writerStream.on('error', function(err) {
    console.log(err);
});

console.log('程序执行完毕!');
