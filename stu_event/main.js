var events = require('events');
var eventEmitter = new events.EventEmitter();



var connectHanler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHanler);
eventEmitter.on('data_received', function() {
    console.log('数据接收成功');
});


//定时触发
setTimeout(function() {
    eventEmitter.emit('connection');
}, 1000);

console.log('程序执行完毕');
