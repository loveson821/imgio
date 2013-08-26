/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
  , Picture = mongoose.model('Picture')

/**
 * Load
 */

exports.load = function(req, res, next, id){
  // var User = mongoose.model('User')

  Picture.load(id, function (err, picture) {
    if (err) return next(err)
    if (!picture) return next(new Error('not found'))
    req.picture = picture
    next()
  })
}

exports.fetch = function(req, res){
  word = req.params.word || ''
  Picture.fetch(word, {}, function(err, doc){
    if(err){
      res.send({'success': false})
    }
    else{
      res.redirect( doc.path )
    }
      
  })
}