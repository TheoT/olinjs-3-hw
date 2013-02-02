
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , ingredient = require("./routes/ingredient")
  , order = require("./routes/order")
  , mongoose= require('mongoose');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
  mongoose.connect(process.env.MONGOLAB_URI || 'localhost')

});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/ingredient/new',ingredient.new);
app.post('/ingredient/create',ingredient.create);
app.get('/order/new', order.new);
app.post('/orders',order.show)
app.get('/orders',order.showAll)
app.post('/order/delete',order.remove)



http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
