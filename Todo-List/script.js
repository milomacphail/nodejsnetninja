var express = require('express');

var app =  express();
var todoController = require('./controllers/todocontroller')

//set up template engine

app.set('view engine','ejs');

//static files
app.use(express.static('./Todo-List'));

//fire controllers
todoController(app);

app.listen(process.env.PORT, process.env.IP);
console.log("You are listening.")