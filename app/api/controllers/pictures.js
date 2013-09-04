var mongoose = require('mongoose')
  , Picture = mongoose.model('Picture')
  , _ = require('underscore')

exports.create = function(req, res){
  /*
  var picture = new Picture()
  picture.name = req.body.name
  Picture.findOne({'name': req.body.name}).exec(function(err, doc){
    if(err) res.send({'success': false, 'error': err })
    else if (!doc){
      console.log(picture)
      picture.paths = [ req.body.path ]
      picture.save(function(err, pic){
        if(err) res.send({'success': false, 'error': err })
        else{
          res.send({'success': true})
        }
      })
    }
    else{
      if(!_.contains(doc.paths, req.body.path)){
        doc.paths.append(req.body.path)
      
        doc.save(function(err, pic){
          if(err) res.send({'success': false, 'error': err })
          else{
            res.send({'success': true})
          }
        })
      }
    }
  })
  */
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
  var limit = req.param('limit') || 10
  var options = {
    limit: limit
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
  var limit = req.param('limit') || 10
  var options = {
    limit: limit
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
    hotest: { limit: hotest_limit},
    recent: { limit: recent_limit}
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