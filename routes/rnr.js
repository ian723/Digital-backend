const express = require('express');
const router = express.Router();
const rnrController = require('../controllers/rnrController');

// Get all reviews and ratings
router.get('/', rnrController.getAllReviews);

// Get a review and rating by ID
router.get('/:id', rnrController.getReviewById);

// Create a new review and rating
router.post('/', rnrController.createReview);

// Update a review and rating by ID
router.put('/:id', rnrController.updateReview);

// Delete a review and rating by ID
router.delete('/:id', rnrController.deleteReview);

module.exports = router;
