var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('test html ')
  res.render('test', {title:"test html", message:"hello html"})
});

module.exports = router;
