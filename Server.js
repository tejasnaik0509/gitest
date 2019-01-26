//creating web server using http module
var http = require('http'); //for "https" use https instead of http. 
var fs = require('fs'); //for fileSystem
var path = require('path'); //for files path

http.createServer(function(req, res){

    if(req.url === '/'){
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {'Content-Type': 'text/html'});
            //res.write("Hello from server");
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
    }

}).listen(3000);


//ES6 code for http connection
/* http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Request receive at Server" + req.url+ "<br />");
    res.write("Hello from server 1");
    res.end();

}).listen(3000); */