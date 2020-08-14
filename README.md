### Week-5-ELMP DATABASE WEEK! 

---

# FAC Fortunes and Cookies 

This week we aimed to learn about databases, specifically SQL, as well as advancing our Node knowledge.

- Designing and documenting a database schema
- Create a relational database
- Read and write SQL queries 
- Avoid SQL injection vulnerabilities
- Handle node errors 
- Testing SQL and servers 

We used all this database and node wizardry to create a page where FAC20 submit their own quotes and wisdom, and receive a cookie containing the wisdom of others! 

## Schema 

![](https://i.imgur.com/PxINJD5.png)

## Wireframe 

![](https://i.imgur.com/jVFKXdx.png)


## If you want to install locally rather than using the heroku link 

- Git clone this repo
- Run `npm install` to set up node modules
-- enter `psql`
-- `CREATE USER myuser SUPERUSER PASSWORD 'mypassword';`
-- `CREATE DATABASE learn_node_postgres WITH OWNER myuser;`
- Create .env file in project
- Add `DATABASE_URL` variable in your .env file and assign to initialised database
- `npm run start` will start the server 


### For the tests -- 

`npm run test` 


## Our team 

- Amber : quality  🕵
- Shaya : design 👩‍🎨
- Terrence : deployment  🧙‍♂️
- Trish : facilitator  🧞‍♀️


## Our user stories 

- As a visually impaired user I would like to be able to navigate the page
- As a user, I want to submit my own and other people's pearls of wisdom and check-in question answers for the rest of FAC to read
- As a user, I want to come back later to read our responses as 'fortunes' 
- As a user, I want to know how to use the fortune cookie site and what it's for
- Stretch goal: As a FAC20 member, I want to search through the wisdom of my cohort for specific people's answers


## Acceptance Criteria 

- [X] A form for users to submit data
- [ ] A page showing all the data
- [X] Semantic form elements with correctly associated labels
- [X] A Postgres database hosted on Heroku
- [X] A schema describing your database in your README
- [ ] Tests for server routes
- [X] Tests for database access
- [X] Tests for database access
- [X] Not process user input as SQL commands
- [X] Hidden environment variables (i.e. not on GitHub)

## Tools/methods used

- heroku!! Terrence is a heroku hero 
- figma !! Shaya is fiiiine with figma 
- dbdiagram (didn't break) 
- postgres (are we professionals yet?) 
- miro for mirroring our crazy 8s 

#### Project presentation link: to be updated 
<!--- (https://hackmd.io/I29b9WUASfie2LhNWV1ukw?both) ---!>
