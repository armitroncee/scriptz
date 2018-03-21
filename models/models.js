module.exports = function(sequelize, DataTypes) {
  var scriptz = sequelize.define("scriptz", {
    prescription_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [1]
      // }
    },
    dose:{
      type: DataTypes.INTEGER, 
      allowNull: false
    }
  });
  return scriptz;
};