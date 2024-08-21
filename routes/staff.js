const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.post("/staff", verifyToken, staffController.createStaff);
router.get("/staff", verifyToken, staffController.getAllStaff);
router.get("/staff/:id", verifyToken, staffController.getStaffById);
router.put("/staff/:id", verifyToken, staffController.updateStaff);
router.delete("/staff/:id", verifyToken, staffController.deleteStaff);

module.exports = router;
