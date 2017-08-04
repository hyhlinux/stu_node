var express = require('express');
var router = express.Router();
var db = require('../models/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    var collection = db.collection('blog');
    var data = {
        "num": 0,
    }
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('err:', err, result);
        }
        console.log('res:', result);
        res.render('index', {
            title: 'Express'
        });
    });
});

router.get('/register', (req, res) => {
    res.render('register', {
        "title": '注册'
    });
});

router.post('/register', (req, res) => {
    // res.render('register', {
    //     "title": '注册'
    // });
});

router.get('/login', function(req, res) {
    res.render('login', {
        "title": '登陆'
    });
});

router.post('/login', function(req, res) {
    // res.render('login', {
    //     "title": '登陆'
    // });
});

router.get('/logout', function(req, res) {
    res.render('logout', {
        "title": '退出'
    });
});

//发表文章
router.get('/post', function(req, res) {

});
router.post('/post', function(req, res) {

});

module.exports = router;
