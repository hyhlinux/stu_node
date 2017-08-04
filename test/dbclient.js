var redis = require('redis');
// var mongoose = require('mongoose');
// var uri = 'mongodb:/username:password@hostname:port/test'
// uri = 'mongodb://localhost/test'

module.exports = redis.createClient(6379, 'localhost');
// module.exports = mongoose.conect(uri);
