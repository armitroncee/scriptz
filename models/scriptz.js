module.exports = function(sequelize, DataTypes) {
    var scriptz = sequelize.define("scriptz", {
      prescription_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dose: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      when: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return scriptz;
  };