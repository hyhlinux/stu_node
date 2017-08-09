var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
// var User2 = mongoose.model('User2', {
//     blog: {
//         type: String,
//         get: function(url) {
//             if (!url) return url;
//
//             if (0 != url.indexOf('http://') || 0 != url.indexOf('https://')) {
//                 url = 'http://' + url
//             }
//             return url;
//         }
//     }
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    var user = new User({
        uid: Date.now(),
        userName: ' sid',
        blog: 'www.baidu.com'

    });
    user.save(function(err, docs) {
        console.log("save status:", err ? 'failed' : 'success');
        if (err) {
            res.end(err);
            return next();
        }

        User.find({}, function(err, docs) {
            if (err) {
                res.end(err);
                return next();
            }

            res.json(docs);
        });
    });
});

// router.get('/user2', function(req, res, next) {
//     var user = new User2({
//         blog: 'www.baidu.com'
//     });
//     user.save(function(err, docs) {
//         console.log("save status:", err ? 'failed' : 'success');
//         if (err) {
//             res.end(err);
//             return next();
//         }
//
//         User2.find({}, function(err, docs) {
//             if (err) {
//                 res.end(err);
//                 return next();
//             }
//
//             res.json(docs);
//         });
//     });
// });

module.exports = router;
