// // Dependencies
// // =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var connection = require("../config/connection.js");

// // Creates a "User" model that matches up with DB
// var User = connection.define("user", {
//   email: {
//     type: Sequelize.STRING
//   },
//   password: {
//     type: Sequelize.STRING
// }
// });

// // Syncs with DB
// User.sync();

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    // email: {
    //   name: DataTypes.STRING
    //   },
    // password: {
    //   type: DataTypes.STRING
    //   }
    name: DataTypes.STRING
    
  });

  User.associate = function(models) {
    // Associating User with Posts
    // When an User is deleted, also delete any associated Posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
 




