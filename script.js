var express = require('express');

var app = express()

app.set('view engine', 'ejs');
app.use("/assets", express.static('assets'));


    app.get("/", function(req, res){
    res.render(__dirname + 'index');
});
    
    app.get("/contact", function(req, res){
    res.render(__dirname + 'contact');
});

    app.get("/profile/:name", function(req, res){
        var data = {job: "ninja", age: 29, hobbies: ["fishing", "hiking", "dining"]};
        res.render('profile', {person: req.params.name, data: data});
    });

app.listen(process.env.PORT, process.env.IP, 3000);
