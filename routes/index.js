var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/api/sayHello', function(req, res, next){
	const responseBody = {
	version: "2.0",
	template: {
	outputs: [
		{
		simpleText: {
		text:"안녕"
		}
		}
		]
		}
		};
	console.log(req.body)
	res.status(200).send(responseBody);
	});
module.exports = router;
