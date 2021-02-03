var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Login user */
router.post('/login', function (req, res, next) {const username = req.body.username;
  let loginResult = login(username, req.body.password);if (loginResult) {
      res.render('users', {username: username});
  }
  else {
      res.render('index', {error: true});
  }
});

module.exports = router;
