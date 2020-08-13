const fs = require("fs");
const path = require("path");
const db = require("./database/connection")

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

function formHandler(request, response) {
    fs.readFile(path.join(__dirname,'..', "public", 'form.html'), (error, file) => {
        if (error) {
          console.log(error);
          response.writeHead(404, { "content-type": "text/html" });
          response.end("<h1>404: Your present is looking unclear</h1>");
        } else {
          response.writeHead(200, { "content-type": "text/html" });
          response.end();
        }
      });
}



function missingHandler(request, response) {
        response.writeHead(404, {"content-type": "text/html"});
        response.end("<h1>404: your present is looking unclear</h1>");
};

// function inputFortuneHandler(request, response) {
    
//     response.writeHead(200, { "content-type" : "text/html"})
//     response.end()
// }


function createFortuneHandler(request, response) {
    let body = "";
    request.on("data", chunk => (body += chunk));
    request.on("end", () => {
        // INJECTION PROTECTION !!!! 
        const searchParams = new URLSearchParams(body); // turns form post string in to an object
        const data = Object.fromEntries(searchParams);      
        const values = [data.name, data.message];
        db.query(
            "INSERT INTO (usernames, posts) VALUES($1, $2)",
            values
        )
        .then(() => {
            response.writeHead(302, { location: "/success"});
            response.end(); 
        })
        .catch(error => {
            response.writeHead(500, {"content-type": "text/html"})
            response.end(`<h1>Your fortune has not been well received</h1>`)
        })
    });
};


module.exports = {homeHandler, missingHandler, createFortuneHandler, formHandler}