import http from "http";
import staticServer from "node-static"

var file = new staticServer.Server('./public');
http.createServer(function (request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8080);