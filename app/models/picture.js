
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var PictureSchema = new Schema({
  name: { type: String, default: '' },
  permalink: { type: String, default: ''},
  shortlink: { type: String, default: ''},
  createdAt: { type: Date, default: Date.now },
  activate: { type: Boolean, default: false},
  path: { type: String, default: ''},
  hit: { type: Number, default: 0}
})

PictureSchema.statics = {
  
  search: function( query, options, cb){
    var ResultSet = this.find(query)
    ResultSet
      .sort({'createdAt': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .select( 'path permalink')
      .exec(function(err, docs){
        ResultSet.count(function(err2, count){
          cb(err, docs, count, count > options.perPage*(options.page+1))
        })
      });
      
  },
  
  fetch: function( word, options, cb){
    var searchRegex = new RegExp(word, 'i');
    var query = { name: { $regex: searchRegex } }
    var update = { $inc: {"hit":1} }
    this.findOneAndUpdate(query, update, {}, function(err, pic){
      cb(err, pic)
    });
      
  },

  load: function(id, cb){
    this.findOne({_id: id})
      .exec(cb)
  },

  hotest: function(options, cb){
    this.find().sort('-hit').limit(options.limit).exec(function(err, docs){
      cb(err, docs)
    })
  },

  recent: function(options, cb){
    this.find().sort('-createdAt').limit(options.limit).exec( function(err, docs ){
      cb(err,docs)
    })
  },

  hub: function(options, cb){
    var hotest_opt = options.hotest
    var recent_opt = options.recent
    var data = {}
    var Model = this
    Model.hotest(hotest_opt, function(err, hotests){
      if( err || !hotests ) cb( err, data)
      else{
        Model.recent( recent_opt, function(err, recents){
          if( err || !recents) cb( err, data)
          else{
            data.hotest = hotests
            data.recent = recents
            cb(err, data)
          }
        })
      }
    }) 

  }

}

PictureSchema.index({"name":1, "permalink":1, "createdAt": -1, "activate": 1, "hit": -1})

mongoose.model('Picture', PictureSchema)