const { Menu } = require("../models");

// Create a new menu item
exports.createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all menu items
exports.getAllMenu = async (req, res) => {
  try {
    const menu = await Menu.findAll();
    res.json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific menu item
exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (menu) {
      res.json(menu);
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a menu item
exports.updateMenu = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (menu) {
      await menu.update(req.body);
      res.json(menu);
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a menu item
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (menu) {
      await menu.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Menu item not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
