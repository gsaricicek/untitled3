var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url); //domain name'den sonra gelen kısmı tutan yer url?
    res.end();
}).listen(8082);

//web'de localhost:8082/winter yazarsan sayfada " /winter " görünür.
//web'de localhost:8082/summer yazarsan sayfada " /summer " görünür.