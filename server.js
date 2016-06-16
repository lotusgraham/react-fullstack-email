var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myTestDB');
// var app = require('app');

var db = mongoose.connection;

db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');
});

var Schema = mongoose.Schema;
var emailSchema = new Schema({
email : String
});

var User = mongoose.model('User', emailSchema);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res, next) {
  res.json({'message':' Hello World!'});
});

app.post('/users', jsonParser, function(request, response, next){
  // request is from postman/chrome/jquery/redux TO the server
  // response is what the server says back
  console.log(request.body);
  if (!request.body){
    return res.sendStatus(400);
  }
  var graham = new User({
  email: request.body.email
  });

  graham.save(function (err, data) {
  if (err) console.log(err);
  else console.log('Saved : ', data );
  // console.log(app);
  });
  // here is where want to create/save to mongo/mongoose
  response.json({'status':request.body.email})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
