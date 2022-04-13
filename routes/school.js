var express = require('express');
var list = require('../connector')
var router = express.Router();
router.get('/EE/:id', function(req, res, next) {
	let param = req.params.id;
	let answer = list.getHistorySchool(param,'EE')
	if (answer !== undefined)
		res.send(answer);
	else
		res.send('Invalid School Number!')
});
router.get('/CS/:id', function(req, res, next) {
	let param = req.params.id;
	let answer = list.getHistorySchool(param,'CS')
	if (answer !== undefined)
		res.send(answer);
	else
		res.send('Invalid School Number!')
});
module.exports = router;
