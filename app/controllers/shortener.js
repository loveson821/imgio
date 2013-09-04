/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, Seqs = mongoose.model('Seqs')

exports.fetch = function(req, res){
  Seqs.shorturl(function(shurl){
  	res.send(shurl)
  })
}