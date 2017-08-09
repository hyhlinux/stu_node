var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    uid: {
        type: Number,
        unique: true,
        require: true
    },
    userName: {
        type: String,
        index: true,
        // 字段去掉空格
        trim: true,
        require: true
    },
    crateTime: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    blog: {
        type: String,
        // 字段去掉空格
        trim: true,
        set: function(url) {
            if (!url) return url;

            if (0 != url.indexOf('http://') || 0 != url.indexOf('https://')) {
                url = 'http://' + url
            }
            return url
        }
    }
});

mongoose.model('User', UserSchema);
