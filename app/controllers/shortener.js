/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
	, Seqs = mongoose.model('Seqs')
	, utils = require('../../lib/utils')

exports.fetch = function(req, res){
  Seqs.shorturl(function(shurl){
  	res.send(shurl)
  })
}