
var mongoose = require('mongoose')
		, Seqs = mongoose.model('Seqs')

var punctuations = /[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g
exports.picture = {
	normalize: function(req, res, next) {
		req.body.name = req.body.name.replace(punctuations,"")
		req.body.path = req.body.path.replace(/\s+/g, ' ');
		req.body.shortlink = req.body.shorturl
		next()
	},

	shorturl: function(req, res, next){
		Seqs.shorturl(function(shurl){
			req.body.shorturl = shurl
			next()
		})
	}
}