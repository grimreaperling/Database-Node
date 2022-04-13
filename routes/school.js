var express = require('express');
var list = require('../connector')
var router = express.Router();
/* GET users listing. */
router.get('/:id', function(req, res, next) {
	let param = req.params.id;
	let answer = list.getHistorySchool(param)
	if (answer !== undefined)
		res.send(answer);
	else
		res.send('No response!'+answer)
});
module.exports = router;
