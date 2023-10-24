var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola, estas en la pagina de videos!');
});

module.exports = router;