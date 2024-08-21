const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, customerController.createCustomer);
router.get("/", verifyToken, customerController.getAllCustomers);
router.get("/:id", verifyToken, customerController.getCustomerById);
router.put("/:id", verifyToken, customerController.updateCustomer);
router.delete("/:id", verifyToken, customerController.deleteCustomer);

module.exports = router;
