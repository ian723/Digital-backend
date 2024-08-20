module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define('Payment', {
    order_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER,
    method: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {});

  Payment.associate = function(models) {
    Payment.belongsTo(models.Order, { foreignKey: 'order_id' });
    Payment.belongsTo(models.Staff, { foreignKey: 'staff_id' });
  };

  return Payment;
};
