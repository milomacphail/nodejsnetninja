var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log("The request was made "+ req.url);
    res.writeHead(200, {"Content-Type": "text/plain"});
    var myReadStream = fs.createReadStream(__dirname + '/readme.txt', "utf8");
    myReadStream.pipe(res);
    res.end("Hey Ninjas");
});


server.listen(3000, "127.0.0.1");
console.log("Now listening to port 3000");