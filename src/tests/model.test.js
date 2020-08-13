const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");

test("Can get list of users", t => {
build()
.then( () => db.query("SELECT * FROM usernames"))
.then((result) => result.rows)
.then( usernames => {
        const firstUser = usernames[0];
        console.log(firstUser.name);
        t.equal(firstUser.name, "Aishah");
        t.equal(firstUser.id, 1);
        t.end();
    }).catch((buildError) => {
        t.error(buildError);
        t.end();
      });
})