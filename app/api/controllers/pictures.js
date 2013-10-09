var mongoose = require('mongoose')
  , Picture = mongoose.model('Picture')
  , _ = require('underscore')

exports.load = function(req, res, next, id){
  // var User = mongoose.model('User')

  Picture.load(id, function (err, picture) {
    if (err) return next(err)
    if (!picture) return next(new Error('not found'))
    req.picture = picture
    next()
  })
}

exports.show = function(req, res){
  res.send(req.picture)
}

exports.create = function(req, res){
  var picture = new Picture(_.pick(req.body,'name','path','shortlink'))
  picture.author = req.user

  picture.save(function(err, pic){
    if(err) res.send({'success': false, 'errors': err })
    else{
      res.send({'success': true, doc: pic})
    }
  })
}

exports.update = function(req, res){
  var picture = req.picture
  picture = _.extend(picture, req.body)

  picture.save(function(err, pic){
    if(err) res.send({'success': false, 'errors': err })
    else{
      res.send({'success': true, doc: pic})
    }
  })
}

exports.destroy = function(req, res){
  var picture = req.picture
  picture.remove(function(err){
    if(err) res.send({'success': false, 'errors': err })
    else{
      res.send({'success': true})
    }
  })
}

exports.search = function(req, res){
  var word = req.param('word') || ''
  var query = {}
  query.permalink = new RegExp(word, 'i');
  
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1
  var perPage = req.param('count') || 5
  var options = {
    perPage: perPage,
    page: page
  }

  Picture.search(query, options, function(err, docs, count, next){
    if(err){
      res.send({
        'success': false, 'error': err
      })
    }
    else{
      res.send({count: count, next: next, docs: docs})
    }
  })
}


exports.recent = function(req, res){
  var perPage = req.param('count') || 10
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1
  var options = {
    perPage: perPage,
    page: page
  }

  Picture.recent(options, function(err, docs){
    if(err){
      res.send({
        'success': false, 'error': err
      })
    }
    else{
      res.send(docs)
    }
  })
}

exports.hotest = function(req, res){
  var perPage = req.param('count') || 10
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1
  var options = {
    perPage: perPage,
    page: page
  }
  
  Picture.hotest(options, function(err, docs){
    if(err){
      res.send({
        'success': false, 'error': err
      })
    }
    else{
      res.send(docs)
    }
  })
}


exports.hub = function(req, res){
  var hotest_limit = req.param('hlimit') || 10
  var recent_limit = req.param('rlimit') || 10
  var options = {
    hotest: { perPage: hotest_limit, page: 10},
    recent: { perPage: recent_limit, page: 10}
  }
  Picture.hub(options, function(err, data){
    if(err){
      res.send({
        'success': false, 'error': err
      })
    }
    else{
      res.send(data)
    }
  })
}