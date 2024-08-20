const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.post("/menu", menuController.createMenu);
router.get("/menu", menuController.getAllMenu);
router.get("/menu/:id", menuController.getMenuById);
router.put("/menu/:id", menuController.updateMenu);
router.delete("/menu/:id", menuController.deleteMenu);

module.exports = router;
