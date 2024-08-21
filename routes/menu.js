const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/menu", verifyToken, menuController.createMenu);
router.get("/menu", verifyToken, menuController.getAllMenu);
router.get("/menu/:id", verifyToken, menuController.getMenuById);
router.put("/menu/:id", verifyToken, menuController.updateMenu);
router.delete("/menu/:id", verifyToken, menuController.deleteMenu);

module.exports = router;
