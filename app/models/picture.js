
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var PictureSchema = new Schema({
  name: { type: String, default: '' },
  permalink: { type: String, default: ''},
  createdAt: { type: Date, default: Date.now },
  activate: { type: Boolean, default: false},
  path: { type: String, default: ''}
})

PictureSchema.statics = {
  
  search: function( word, options, cb){
    var searchRegex = new RegExp(word, 'i');
    this.find({ name: { $regex: searchRegex }})
      .sort({'createdAt': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb);
  },
  
  fetch: function( word, options, cb){
    var searchRegex = new RegExp(word, 'i');
    this.findOne({ name: { $regex: searchRegex }})
      .exec(cb);
  },

  load: function(id, cb){
    this.findOne({_id: id})
      .exec(cb)
  }

}

PictureSchema.index({"name":1, "permalink":1, "createdAt": -1, "activate": 1})

mongoose.model('Picture', PictureSchema)