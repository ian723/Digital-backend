const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

router.post("/staff", staffController.createStaff);
router.get("/staff", staffController.getAllStaff);
router.get("/staff/:id", staffController.getStaffById);
router.put("/staff/:id", staffController.updateStaff);
router.delete("/staff/:id", staffController.deleteStaff);

module.exports = router;
