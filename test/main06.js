var client = require('./dbclient');

client.rpush('testLists', 'a');
client.rpush('testLists', 'b');
client.rpush('testLists', 'c');

client.lpop('testLists', function(err, v) {
    if (err) {
        console.log('err:', err);
    }
    console.log('v:', v);
});

client.lrange('testLists', 0, -1, function(err, lists) {
    if (err) {
        console.log('err:', err);
    }
    console.log('lists:', lists);
});
