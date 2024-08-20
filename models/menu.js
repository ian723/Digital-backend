module.exports = (sequelize, DataTypes) => {
    const Menu = sequelize.define('Menu', {
      food_name: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      food_price: DataTypes.FLOAT,
      staff_id: DataTypes.INTEGER,
    }, {});
  
    Menu.associate = function(models) {
      Menu.hasMany(models.Order, { foreignKey: 'menu_id' });
      Menu.hasMany(models.RandR, { foreignKey: 'food_id' });
    };
  
    return Menu;
  };
  