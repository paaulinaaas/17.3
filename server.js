var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var stringifyFile;

app.use(bodyParser.json()); //pozwoli wykorzystać middleware body-parser


app.get('/getNote', function(req,res) {

fs.readFile('./test.json', 'utf-8', function(err, data) {
	if (err) throw err;
	fileContent = data;
	res.send(data);
	});

});

app.post('/updateNote/:note', function(req,res) {
	stringifyFile = req.params.note;
	fs.writeFile('./test.json', stringifyFile, function(req, res, next) {
	    If (err) throw err;
	    console.log('file updated');
	});
});

app.listen(3000);