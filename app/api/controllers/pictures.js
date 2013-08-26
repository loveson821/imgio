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