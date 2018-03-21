module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
    user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    first_name:{
        type: DataTypes.STRING, 
        allowNull: false
      },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return user;
  };