module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('User', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    
  });

  User.associate = function(models) {
    // Associating User with posts
    // When an User is deleted, also delete any associated posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
 




