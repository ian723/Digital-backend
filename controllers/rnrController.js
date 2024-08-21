const { RnR } = require('../models');

// Get all reviews and ratings
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await RnR.findAll();
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a review and rating by ID
exports.getReviewById = async (req, res) => {
    try {
        const review = await RnR.findByPk(req.params.id);
        if (!review) return res.status(404).json({ error: 'Review and rating not found' });
        res.json(review);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new review and rating
exports.createReview = async (req, res) => {
    try {
        const newReview = await RnR.create(req.body);
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a review and rating by ID
exports.updateReview = async (req, res) => {
    try {
        const updatedReview = await RnR.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedReview[0] === 0) return res.status(404).json({ error: 'Review and rating not found' });
        res.json({ message: 'Review and rating updated' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a review and rating by ID
exports.deleteReview = async (req, res) => {
    try {
        const deletedReview = await RnR.destroy({
            where: { id: req.params.id }
        });
        if (deletedReview === 0) return res.status(404).json({ error: 'Review and rating not found' });
        res.json({ message: 'Review and rating deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
