var express = require('express');
var router = express.Router();

//测试中间件
var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

var requestTime = function (req, res, next) {
  //给req动态绑定属性
  req.requestTime = Date.now()
  console.log(req.requestTime)
  next()
}

router.use(myLogger)
router.use(requestTime)

/* GET home page. 会现调用myLogger */
router.get('/', function(req, res) {
  console.log('home')
  // res.send('birds home page')
  var data = {};
  var err = null;
  if (!err){
      data = {
      "err":err,
      };
      res.json(data);
      return ;
      console.log('here1');
  }
  console.log('here2');
});

router.get('/time', function(req, res){
  var responseText = 'hello workld!<br>'
  responseText += '<small>requested at:' + req.requestTime + '</small>'
  res.send(responseText)
});

module.exports = router;
