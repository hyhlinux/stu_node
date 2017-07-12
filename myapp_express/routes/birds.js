var express = require('express');
var router = express.Router();

//测试中间件
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

router.use(myLogger)

/* GET home page. */
router.get('/', function(req, res) {
  res.send('birds home page')
});


module.exports = router;
