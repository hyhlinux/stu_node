var client = require('./dbclient');

client.sadd('testSet', 1)
client.sadd('testSet', 2)
client.sadd('testSet', 3)

client.smembers('testSet', function(err, v) {
    if (err) {
        console.log('err:', err);
    }
    console.log('v:', v);
});
