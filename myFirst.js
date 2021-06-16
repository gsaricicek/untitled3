var http = require('http'); //To include a module, use the require() function with the name of the module. (here it is a http module)

//create a server object
http.createServer(function (req, res) { // createServer method to create an HTTP server:
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    res.end('Hello World!'); //end of response
}).listen(8080); //the server object listens on port 8080