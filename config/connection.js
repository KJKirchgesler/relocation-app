// Dependencies
const Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

const connection = new Sequelize("relocation_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
      max: 5,
      min: 0,
      idle: 10000
   }
});

// Exports the connection for other files to use
module.exports = connection