module.exports = (sequelize, DataTypes) => {
  const OrderList = sequelize.define('OrderList', {
    price: DataTypes.FLOAT,
    customer_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    staff_id: DataTypes.INTEGER,
    paid_status: DataTypes.BOOLEAN,
  }, {});

  OrderList.associate = function(models) {
    OrderList.belongsTo(models.Order, { foreignKey: 'order_id' });
    OrderList.belongsTo(models.Customer, { foreignKey: 'customer_id' });
    OrderList.belongsTo(models.Staff, { foreignKey: 'staff_id' });
  };

  return OrderList;
};
