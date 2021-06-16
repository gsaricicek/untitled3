//This js file reads the HTML file, and return the content

var http = require('http');
var fs = require('fs');  //To include the File System module
http.createServer(function (req, res) {
    fs.readFile('demo_html.html', function(err, data) {  // fs.readFile() method is used to read files on your computer.
        res.writeHead(200, {'Content-Type': 'text/html'});                  //bu örnekte demo_html dosyası okunuyor.
        res.write(data);
        return res.end();
    });
}).listen(8080);