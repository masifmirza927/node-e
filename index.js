const http = require("http");

const server = http.createServer( (request, response) => {
    
    if(request.url == "/") {
        response.write("this is home page");
    }else if(request.url == "/about") {
        response.write("this is about page");
    }

    response.end();
});

server.listen(3001, () => {
    console.log("server is running...")
})