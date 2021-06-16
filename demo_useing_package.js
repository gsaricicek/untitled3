//indirilen package'ler "node_modules" dosyasına gider.
//konsola nmd install "..." yazarak package'ler indirilir.

var uc = require('upper-case');
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8080);

//output: HELLO WORLD!
