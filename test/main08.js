var client = require('./dbclient');

client.publish('testPublish', 'msg publish');

function do1s() {
    client.publish('testPublish', Date.now());
    setTimeout(do1s,
        2000);
}

setTimeout(do1s, 1000);
