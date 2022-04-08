var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('honey', { title: 'Search Results honey' });
});

module.exports = router;