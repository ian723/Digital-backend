const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/", verifyToken, paymentController.createPayment);
router.get("/", verifyToken, paymentController.getAllPayments);

module.exports = router;
