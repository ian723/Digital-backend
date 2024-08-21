const express = require("express");
const router = express.Router();
const rnrController = require("../controllers/rnrController");
const { verifyToken } = require("../middlewares/authMiddleware");

router.get("/", verifyToken, rnrController.getAllReviews);
router.get("/:id", verifyToken, rnrController.getReviewById);
router.post("/", verifyToken, rnrController.createReview);
router.put("/:id", verifyToken, rnrController.updateReview);
router.delete("/:id", verifyToken, rnrController.deleteReview);

module.exports = router;
