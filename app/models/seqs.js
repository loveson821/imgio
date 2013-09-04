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
		this.collection.findAndModify(query, [], update, options, function(err, data){
			// var shurl = utils.shortener(data.seq);
			// cb(shurl)
			//cb( utils.shortener(data.seq) )
			// cb(data.seq + '')
			utils.shortener(data.seq, function(shurl){
				cb(shurl)
			})
		});
		// this.findOneAndUpdate( query, update, options,
		// 	function(err, data) {
		// 		var shurl = utils.shortener(data.seq);
		// 		cb(shurl)
		// 	}
		// );
	}
}

mongoose.model('Seqs', seqs_schema);

