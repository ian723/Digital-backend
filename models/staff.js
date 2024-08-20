module.exports = (sequelize, DataTypes) => {
  const Staff = sequelize.define('Staff', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone_no: DataTypes.STRING,
    email_address: DataTypes.STRING,
    role: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {});

  Staff.associate = function(models) {
    Staff.hasMany(models.OrderList, { foreignKey: 'staff_id' });
    Staff.hasMany(models.Menu, { foreignKey: 'staff_id' });
    Staff.hasMany(models.Payment, { foreignKey: 'staff_id' });
  };

  return Staff;
};
