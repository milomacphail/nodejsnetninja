var express = require('express');
var todoController = require('./controllers/todocontroller')

var app = express();

//setup template engine

app.set('view engine', 'ejs');

//static files
app.use('/assets', express.static('assets'));

//firecontrollers
todoController(app);

//listent to port
app.listen(8080);
console.log('You are listening to port radio');