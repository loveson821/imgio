module.exports = function(app, passport) {
  // users api
  // var users = require('./controllers/users')
  app.get('/api', function(req, res){res.send({"status": 'working'})})

  //properties api
  var pictures = require('./controllers/pictures')
  // app.get('/api/pictures', pictures.index)
  // app.get('/api/picture/:picid', picture.show)
  app.post('/api/create', pictures.create)
  // app.param('picid', pictures.picture)
}