var client = require('./dbclient');

client.subscribe('testPublish');

client.on('message', function(channel, msg) {
    console.log('subscribe ch:', channel, 'msg:', msg);
});
