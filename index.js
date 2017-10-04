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
		console.log(util.format(
			'=== %s (%d) ===',
			SYMBOL,
			news.length
			).cyan);
		if (news[0]) {
			console.log(
				'%s\n...\n%s',
				JSON.stringify(news[0], null, 2),
				JSON.stringify(news[news.length - 1], null, 2)
				);
		} else {
			console.log('N/A');
		}
	})
})

app.listen(8000,function(){
	console.log('Running localhost');
})

