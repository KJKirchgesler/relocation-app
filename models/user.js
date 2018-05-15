// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var connection = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var User = connection.define("user", {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
}
});

// Syncs with DB
User.sync();

 

/*connection.sync().then(function() {
    User.create( {
      email: "someone@gmail.com",
      password: "pwd123"
    });
  }); */

/* Makes the UserSequelizeVersion Model available for other files (will also create a table) */
module.exports = User; 
