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


module.exports = router;
