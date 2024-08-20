module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      price: DataTypes.FLOAT,
      customer_id: DataTypes.INTEGER,
      menu_id: DataTypes.INTEGER,
      payment_id: DataTypes.INTEGER,
      timestamp: DataTypes.DATE,
    }, {});
  
    Order.associate = function(models) {
      Order.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Order.belongsTo(models.Menu, { foreignKey: 'menu_id' });
      Order.belongsTo(models.Payment, { foreignKey: 'payment_id' });
      Order.hasMany(models.OrderList, { foreignKey: 'order_id' });
    };
  
    return Order;
  };
  