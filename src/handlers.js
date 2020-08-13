const fs = require("fs");
const path = require("path");

function homeHandler(request, response) {
    fs.readFile(path.join(__dirname,'..', "public", 'main.html'), (error, file) => {
        if (error) {
          console.log(error);
          response.writeHead(404, { "content-type": "text/html" });
          response.end("<h1> Not Found </h1>");
        } else {
          response.writeHead(200, { "content-type": "text/html" });
          response.end(file);
        }
      });
}

function missingHandler(request, response) {
  response.writeHead(404, {"content-type": "text/html"});
  response.end("<h1>Page not found.</h1>");
}

function readFortuneHandler(request, response) {
    response.writeHead(200, { "content-type" : "text/html"})
    response.end()
}

function createFortuneHandler(request, response) {
    let body = "";
    request.on("data", chunk => (body += chunk));
    request.on("end", () => {
        // INJECTION PROTECTION !!!! 
        const searchParams = new URLSearchParams(body); // turns form post string in to an object
        const data = Object.fromEntries(searchParams);         
        const values = [data.name, data.message];

    })
    response.writeHead()
    response.end()
}

function missingHandler(request, response) {
    response.writeHead()
    response.end()
}

module.exports = {missingHandler}