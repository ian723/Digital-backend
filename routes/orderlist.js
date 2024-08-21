const express = require("express");
const router = express.Router();
const orderListController = require("../controllers/orderlistController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/", verifyToken, orderListController.getAllOrderLists);
router.get("/:id", verifyToken, orderListController.getOrderListById);
router.post("/", verifyToken, orderListController.createOrderList);
router.put("/:id", verifyToken, orderListController.updateOrderList);
router.delete("/:id", verifyToken, orderListController.deleteOrderList);

module.exports = router;
