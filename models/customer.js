module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      floor_number: DataTypes.STRING,
      office_number: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_no: DataTypes.STRING,
      email_address: DataTypes.STRING,
    }, {});
  
    Customer.associate = function(models) {
      Customer.hasMany(models.Order, { foreignKey: 'customer_id' });
      Customer.hasMany(models.RandR, { foreignKey: 'customer_id' });
    };
  
    return Customer;
  };
  