const fs = require("fs")
const path = require("path")


const types = {
    html: "text/html",
    css: "text/css",
    js: "application/javascipt",
    png: "image/png",
    jpg: 'image/jpg',
    ico :"image/x-icon"
};

function publicHandler(request, response) {
    const url = request.url;
    const urlArray = url.split("/");
    const extension = urlArray[urlArray.length-1].split('.');
    const type = types[extension[1]];
    const filePath = path.join(__dirname, "..", url); 
    console.log(filePath)
    fs.readFile(filePath, (error, file) => {
        if (error) {
            console.log(error);
            response.writeHead(404, {"content-type": "text/html"});
            response.end("<h1>Not found</h1>");
        } else { 
            response.writeHead(200, {"content-type": type});
            response.end(file);  
            }
        })
    
}

module.exports = publicHandler;