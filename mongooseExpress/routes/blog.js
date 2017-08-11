var express = require('express');
var router = express.Router();
var blogModel = require('../library/db/blog.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    var m = {};
    m.blog = 'www.facebook.com'
    blogModel.model.save(m, function(err) {
        console.log('err:', err);
        if (err) {
            res.end(err);
            return;
        }
    });

    // res.end('blog');
});

module.exports = router;
