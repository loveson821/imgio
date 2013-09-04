/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , utils = require('../../lib/utils')

var seqs_schema = new Schema({
  _id:  { type: String}
  , seq:  { type: Number}
});

seqs_schema.statics = {
	shorturl: function(cb){
		query = {"_id": "urls"}
		update = {$inc: {"seq":1}}
		options = {new: true, upsert: true}
		this.findOneAndUpdate( query, update, options,
			function(err, data) {
				shurl = utils.shortener(data.seq);
				cb(shurl)
			}
		);
	}
}

mongoose.model('Seqs', seqs_schema);

