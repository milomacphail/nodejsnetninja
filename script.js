var express = require('express');

var app = express();

app.set('view engine', 'ejs');

    app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});
    
    app.get("/contact", function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

    app.get("/profile/:name", function(req, res){
        var data = {job: "ninja", age: 29};
        res.render('profile', {person: req.params.name, data: data});
    });

app.listen(process.env.PORT, process.env.IP, 3000);
