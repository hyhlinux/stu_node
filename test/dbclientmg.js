var mongoose = require('mongoose');
var uri = 'mongodb:/username:password@hostname:port/test'
uri = 'mongodb://localhost/test'

module.exports = mongoose.connect(uri);
