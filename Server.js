//creating web server using http module
var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello from server");
    res.end();

}).listen(3000);
