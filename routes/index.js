var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET username and display a image if the username is 'JohnChina' */
router.get('/users/:username', function(req, res, next) {
  if (req.params.username === 'JohnChina') {
    res.render('user', { username: req.params.username });
  } else {
    res.send('<strong>You are not JohnChina</strong>');
  }
});

module.exports = router;
