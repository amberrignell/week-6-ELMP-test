const fs = require("fs");
const path = require("path");
const db = require("./connection")

const initPath = path.join(__dirname, "init.sql");
const initSQL = fs.readFileSync(initPath, "utf-8", (error, file) => {
    if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end(`<h1>Server error</h1>`);
      } else {
        console.log('init file read')
      }
});


function build() {
    return db.query(initSQL);
}

if (require.main === module) {
    build().then(() => db.end());
}

module.exports = build; 