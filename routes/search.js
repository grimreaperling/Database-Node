var express = require('express');
var list = require('../connector')
var router = express.Router();
router.get('/EE/:id', function(req, res, next) {
	let param = req.params.id;
	let answer = list.getSchoollist(param,'EE')
	if (answer !== undefined)
	  res.send(answer);
	else
		res.send('Invalid grade!')
});
router.get('/CS/:id', function(req, res, next) {
	let param = req.params.id;
	let answer = list.getSchoollist(param,'CS')
	if (answer !== undefined)
		res.send(answer);
	else
		res.send('Invalid grade!')
});
module.exports = router;
