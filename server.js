// all config will write here //1st page
//https://sequelize.org/docs/v6/getting-started/
// to run server npm start / nodemon server.js 

const express = require("express");
const { port } = require("./config/config");
const UserRouter = require('./routes/user.routes');

const app = express();

//middleware
app.use(express.json()); //to recorganize json is there  in body (because i putting all the information in the json formate)


app.use('/v1/user', UserRouter) //this the prefix that will add after base url(localhost:8080) ; 1st go to routes(User.routes.js) folder 

app.use("/health-check", (req, res) => { // health api
    res.send("Welcome to Service Provider API")
});

app.listen(port, () => console.log(`ServiceProvider API app listening on port ${port}!`)); //bindind in starting server
