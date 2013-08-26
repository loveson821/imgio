module.exports = function(app, passport) {
  
  // set api header
  app.get('/api/*',function(req,res,next){
    res.setHeader('content-type','text/json; charset=UTF-8');
    next(); 
  });
  
  
  // users api
  // var users = require('./controllers/users')
  app.get('/api', function(req, res){res.send({"status": 'working'})})

  //properties api
  var pictures = require('./controllers/pictures')
  // app.get('/api/pictures', pictures.index)
  // app.get('/api/picture/:picid', picture.show)
  app.get('/api/search', pictures.search)
  // app.param('picid', pictures.picture)
}