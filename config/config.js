
const defaultConfig = {
    db: {
        // most of the cases this will be localhost
        // unless you are connecting to remote database
        host: "localhost",

        // port on which database is running
        port: 3306,

        // name of the database connecting to
        name: "serviceprovider",

        // database username
        user: "root",

        // password for above database user
        password: "root",

        // we are using Sequelize for connecting to database
        // Sequelize supports Mysql, SQlite, PostgreSQL and MSSQL
        // As applicable use either of 'mysql'|'sqlite'|'postgres'|'mssql'
        dialect: "mysql",
    },
    port: 8080
}

module.exports = {
    ...defaultConfig
}