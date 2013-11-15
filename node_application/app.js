
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/users');
var test = require('./routes/test');
var http = require('http');
var path = require('path');
var flash = require('connect-flash');

var app = express();

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({secret: 'afba088de42a4ee5867a577546973932', key: 'uid', cookie: { maxAge: 60000 }}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next){
  //console.error('==============================>>>>>>>>>>>>>>>>>>>>>>>> ' + req.path);
  res.locals.notifications = req.flash('REQUEST_FLASH_MSG');
  //console.error('==============================>>>>>>>>>>>>>>>>>>>>>>>> ' + JSON.stringify(res.locals.notifications));
  //res.locals.notifications = { message: 'Added successfully', type: 'success' };
  next();
});
app.use(app.router);

if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.use(function(req, res, next){
  res.status(404);
  
  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

app.use(function(err, req, res, next){
  // we may use properties of the error object
  // here and next(err) appropriately, or if
  // we possibly recovered from the error, simply next().
  
  //if(!err) return next();
  res.status(err.status || 500);
  res.render('500', { error: err });
});

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);

//  Users
app.get('/users', user.index);
app.get('/users/new', user.new);
//app.get('/users/:id(\\d+)', user.show);
app.get('/users/:id', user.show);
app.get('/users/:id/edit', user.edit);
app.post('/users', user.create);
app.put('/users/:id', user.update);
app.del('/users/:id', user.destroy);

//  Test
app.get('/test', test.index);
app.get('/foo', test.foo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});