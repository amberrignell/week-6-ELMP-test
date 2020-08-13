const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");

test("Can get list of users", t => {
    build()
    .then( () => {
        db.query("SELECT * FROM usernames")
    })
    .then(result => result.rows)
    .then( users => {
        console.log(users);
    })
})