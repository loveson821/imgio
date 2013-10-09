var normalization = require('../../config/middlewares/normalization')
  , auth = require('../../config/middlewares/authorization')

module.exports = function(app, passport) {
  
  // set api header
  app.get('/api/*',function(req,res,next){
    res.setHeader('content-type','text/json; charset=UTF-8');
    res.setHeader("Access-Control-Allow-Origin", "*");
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
  app.get('/api/recent', pictures.recent)
  app.get('/api/hotest', pictures.hotest)
  app.get('/api/hub', pictures.hub)

  app.get('/api/picture/:picid', pictures.show)
  app.post('/api/picture'
          , auth.requiresLogin
          , normalization.picture.shorturl
          , normalization.picture.normalize
          , pictures.create
          )
  app.put('/api/picture/:picid'
          , auth.requiresLogin
          , pictures.update
          )
  app.del('/api/picture/:picid'
          , auth.requiresLogin
          , pictures.destroy
          )
  app.param('picid', pictures.load)

  app.get('/auth', auth.requiresLogin, function(req,res){
    res.send('welcome good boy')
  })
}