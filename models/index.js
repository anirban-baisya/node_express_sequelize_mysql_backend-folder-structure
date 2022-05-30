const Sequelize = require("sequelize");
const config = require("../config/config");
const UserModel = require("./user.model");


// initialize database connection
const sequelize = new Sequelize(
    config.db.name, // database name
    config.db.user, // user
    config.db.password, // password
    {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
        operatorsAliases: false,
        timezone: "+00:00" // set time zone to UTC,
    },
);

// check database connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connection has been established successfully.");
    })
    .catch(err => {
        console.error("Unable to connect to the database:", err);
    });

sequelize.sync().then(() => console.log("DB Synced")).catch((err) => console.log(err.message));

const User = UserModel(sequelize, Sequelize);

module.exports = {
    "User" : User
}



// v1/user/get/:id   ---- id   path param
// v1/user/get?id=1   ---- id   ouery param