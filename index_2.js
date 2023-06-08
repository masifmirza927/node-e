const http = require("http");

const server = http.createServer( (request, response) => {
    
    if(request.url == "/") {
        response.write("this is home page");
    }else if(request.url == "/about") {
        response.write("this is about page");
    }else {
        response.writeHead(404);
        response.write("page not found");
    }


    response.end();
});

server.listen(3001, () => {
    console.log("server is running...")
})