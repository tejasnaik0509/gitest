//creating web server using http module
var http = require('http'); //for "https" use https instead of http. 

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello from server");
    res.end();

}).listen(3000);


//ES6 code for http connection
/* http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Request receive at Server" + req.url+ "<br />");
    res.write("Hello from server 1");
    res.end();

}).listen(3000); */