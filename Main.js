var http = require("http")

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8081);

console.log('Server running at 192.168.0.7:8081');
