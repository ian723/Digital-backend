module.exports = (sequelize, DataTypes) => {
  const RandR = sequelize.define('RandR', {
    rating: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    customer_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER,
  }, {});

  RandR.associate = function(models) {
    RandR.belongsTo(models.Customer, { foreignKey: 'customer_id' });
    RandR.belongsTo(models.Menu, { foreignKey: 'food_id' });
  };

  return RandR;
};
