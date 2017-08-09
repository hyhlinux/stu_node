var mongoose = require('mongoose');


var Blog = new mongoose.Schema({
    crateTime: {
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

mongoose.model('Blog', Blog);
