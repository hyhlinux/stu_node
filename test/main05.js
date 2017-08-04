var redis = require('redis');

var client = redis.createClient(6379, 'localhost');

client.set('h', 'hello');

client.get('h', function(err, v) {
    if (err) {
        console.error(err);
    }
    console.log('v:', v);
});


client.set('hello', {
    a: 1,
    b: 2
});


client.get('hello', function(err, v) {
    if (err) {
        console.error(err);
    }
});
