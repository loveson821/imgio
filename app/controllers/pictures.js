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

exports.search = function(req, res){
  word = req.params.word || ''
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1
  var perPage = 5
  var options = {
    perPage: perPage,
    page: page
  }

  Picture.search(word, options, function(err, docs){
    if(err){
      res.send({
        'success': false
      })
    }
    else
      res.send(docs)
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