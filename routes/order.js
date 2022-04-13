var express = require('express');
var router = express.Router();
let list = require('../connector')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(list.getOrderlist());
});
module.exports = router;
