var mongoose = require('mongoose')
  , Picture = mongoose.model('Picture')

exports.index = function(req, res){
	var hotest_limit = req.param('hlimit') || 10
  var recent_limit = req.param('rlimit') || 10
  var options = {
    hotest: { perPage: hotest_limit, page: 10},
    recent: { perPage: recent_limit, page: 10}
  }
  Picture.hub(options, function(err, data){
    res.render('webpages/index', {
    	recents: data.recents,
    	hotests: data.hotests
  	})
  })
  
}
