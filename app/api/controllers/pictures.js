var mongoose = require('mongoose')
  , Picture = mongoose.model('Picture')
  , _ = require('underscore')

exports.create = function(req, res){
  var picture = new Picture(_.pick(req.body,'name','path','shortlink'))

  picture.save(function(err, pic){
    if(err) res.send({'success': false, 'error': err })
    else{
      res.send({'success': true, doc: pic})
    }
  })
}

exports.search = function(req, res){
  var word = req.param('word') || ''
  var query = {}
  query.permalink = new RegExp(word, 'i');
  
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1
  var perPage = 5
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