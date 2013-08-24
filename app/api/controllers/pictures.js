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