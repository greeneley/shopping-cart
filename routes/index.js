var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// hien thi form login
router.get('/login', function(req, res){
  res.render('login',{email: req.email});
})
router.post('/login',function(req, res){
  res.redirect('/users');
})
module.exports = router; // xuất tất cả các thành phần khai báo trên