var express = require('express');
var sleep = require('sleep');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/health', function(req, res, next) {
    console.log('time:', Date.now());
    sleep.sleep(1);
    console.log('time:', Date.now());
    res.render('health', { title: 'health' });
});

module.exports = router;
