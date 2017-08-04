var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/blog", {}, function(err) {
    if (err) {
        console.error('connect to %s error: ', err);
        process.exit(1);
    }
});

require('./apk');
exports.apk = mongoose.model('apk');

console.log('init mongodb done');
