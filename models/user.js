module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    USER_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    FIRST_NAME:{
      type: DataTypes.STRING, 
      allowNull: false
    },

  LAST_NAME: {
      type: DataTypes.STRING,
      allowNull: false
      // validate: {
      //   len: [1]
      // }
    },
    
    email:{
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