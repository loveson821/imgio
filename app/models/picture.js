
/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , _ = require('underscore')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]

var PictureSchema = new Schema({
  name: { type: String, default: '' },
  permalink: { type: String, default: ''},
  shortlink: { type: String, default: ''},
  createdAt: { type: Date, default: Date.now },
  activate: { type: Boolean, default: false},
  path: { type: String, default: ''},
  hit: { type: Number, default: 0},
  author: {type: Schema.ObjectId, ref: 'User'}
})

/**
 * Pre-save hook
 */

PictureSchema.pre('save', function(next) {
  if (!this.isNew) return next()
  var self = this
  mongoose.model('Picture').nameCount({name: this.name}, function(err, count){
    if(err) next('Unexpected error when Pre-save')
    else{
      if(count>0)
        self.permalink = self.name + count
      else
        self.permalink = self.name
    }
    next()
  })
})

PictureSchema.methods = {
  cutDomain: function(){
    this.shortlink = this.shortlink.replace(/^.*\/|\.[^.]*$/g, '')
    this.permalink = this.permalink.replace(/^.*\/|\.[^.]*$/g, '')
    return this;
  }
}

PictureSchema.statics = {

  

  patchDomain: function(picture){
    picture.shortlink = config.shortDomain+picture.shortlink
    picture.permalink = config.domain + picture.permalink
    return picture;
  },
  
  search: function( query, options, cb){
    var Model = this
    var ResultSet = this.find(query)
    ResultSet
      .sort({'createdAt': -1}) // sort by date
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      // .select( 'path permalink shortlink name')
      .exec(function(err, docs){
        ResultSet.count(function(err2, count){
          cb(err, _.map(docs, Model.patchDomain), count, count > options.perPage*(options.page+1))
        })
      });
      
  },
  
  fetch: function( word, options, cb){
    var searchRegex = new RegExp(word, 'i');
    var query = { permalink: { $regex: searchRegex } }
    var update = { $inc: {"hit":1} }
    this.findOneAndUpdate(query, update, {}, function(err, pic){
      cb(err, pic)
    });
      
  },

  fetchShort: function( shortlink, options, cb){
    var query = { shortlink: shortlink }
    var update = { $inc: {"hit":1} }
    this.findOneAndUpdate(query, update, {}, function(err, pic){
      cb(err, pic)
    });
      
  },

  nameCount: function(query, cb ){
    this.count(query, function(err, num){
      cb(err, num)
    })
  },

  load: function(id, cb){
    this.findOne({_id: id})
      .exec(cb)
  },

  hotest: function(options, cb){
    var Model = this
    this.find().sort('-hit')
    .limit(options.perPage)
    .skip(options.perPage * options.page)
    .exec(function(err, docs){
      cb(err, _.map(docs, Model.patchDomain))
    })
  },

  recent: function(options, cb){
    var Model = this
    this.find().sort('-createdAt')
    .limit(options.perPage)
    .skip(options.perPage * options.page)
    .lean()
    .exec( function(err, docs ){
      cb(err, _.map(docs, Model.patchDomain))
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
            data.hotests = hotests
            data.recents = recents
            cb(err, data)
          }
        })
      }
    }) 

  }

}

PictureSchema.index({"name":1, "shortlink": 1,"permalink":1, "createdAt": -1, "activate": 1, "hit": -1})

mongoose.model('Picture', PictureSchema)