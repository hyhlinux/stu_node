var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
    var user = new User({
        uid: 1,
        userName: 'sid'
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

module.exports = router;
