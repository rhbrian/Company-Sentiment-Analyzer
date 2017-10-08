var dotenv = require('dotenv');
var express = require('express');
var app = express();
var gFinance = require('google-finance');
var util = require('util');

var SYMBOL = 'EFX:NYSE';

dotenv.load();

app.get('/', function(req,res){
	gFinance.companyNews({
		symbol: SYMBOL
	}, function (err, news) {
		if (err) { throw err; }
		var info = `=== ${SYMBOL} ${news.length} ===`
		console.log(
			'\x1b[31m%s\x1b[0m', info
			);
		if (news[0]) {
			for (var i = 0; i < news.length; i++){
				console.log('%s\n', JSON.stringify(news[i],null,2));
			}
		} else {
			console.log('N/A');
		}
	})
})

app.listen(8000,function(){
	console.log('Running localhost');
})

