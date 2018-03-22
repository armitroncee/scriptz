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
      TimeFrame: {
          type: DataTypes.STRING,
          allowNull: false
      },
      Pills_Remaining:{
        type: DataTypes.INTEGER,
        allowNull:false
      }

    },{
       freezeTableName: true,
       timestamps: false
    });


    return scriptz;
  };