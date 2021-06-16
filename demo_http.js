var http = require('http'); //To include a module, use the require() function with the name of the module. (here it is a http module)

//create a server object // createServer method to create an HTTP server
http.createServer(function (req, res) { //req argumnent that represents tge request from the client, as an object
    res.writeHead(200, {'Content-Type': 'text/html'}); //write a response to the client
    res.end('Hello World!'); //end of response
}).listen(8081); //the server object listens on port 8080