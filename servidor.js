'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
//var db = require('./config/bd');

var app = express();

app.all('/*', function(req, res, next){
	//Encabezados CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');

	res.header('Access-Control-Allow-Headers','Content-type,Accept,X-Access-Token');

	if(req.method == 'OPTIONS'){
		res.status(200).end();
	}else{
		next();
	}
});

app.use(express.static(__dirname + '/publica'));
app.use(logger('dev'));
app.use(bodyParser.json({limit: '25mb'}));

//app.all('/api/secure*', [require('./middlewares/validateRequest')]);

//app.use('/', require('./rutas'));

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3003);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

/*db.conectar(function(err) {
  if (err) {
    console.log('Error en conexión a BD\n' + err);
    process.exit(1);
  } else {
		app.listen(app.get('port'), app.get('ip'));
		console.log("Listening on port " + app.get('ip') + ":" + app.get('port'));
  }
});*/

app.listen(app.get('port'), app.get('ip'));
console.log("Listening on port " + app.get('ip') + ":" + app.get('port'));
