module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 15b71565c101125658cf36ded665f67901794be1
