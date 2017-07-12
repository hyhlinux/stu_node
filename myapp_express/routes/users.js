var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User respond with a resource');
});

router.get('/:userId/books/:bookId', function(req, res, next){
    res.send(req.params)
});

router.get('/:userId(\d+)', function(req, res, next){
    res.send(req.params)
});

//a-b
router.get('/:from-:to', function(req, res, next){
    res.send(req.params)
});


router.get('/example/a', function(req, res){
    res.send('hello from a')
});

router.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...');
  next();     //调用到hello from B!
}, function (req, res) {
  res.send('Hello from B!')
})


var cb0 = function(req, res, next) {
  console.log('cb0')
  next()
}

var cb1 = function(req, res, next) {
  console.log('cb1')
  next()
}

var cb2 = function(req, res) {
  res.send('Hello from C!')
}

router.get('/example/c', [cb0, cb1, cb2])

module.exports = router;
