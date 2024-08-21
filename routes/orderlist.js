const express = require('express');
const router = express.Router();
const orderListController = require('../controllers/orderlistController');

// Get all order lists
router.get('/', orderListController.getAllOrderLists);

// Get an order list by ID
router.get('/:id', orderListController.getOrderListById);

// Create a new order list
router.post('/', orderListController.createOrderList);

// Update an order list by ID
router.put('/:id', orderListController.updateOrderList);

// Delete an order list by ID
router.delete('/:id', orderListController.deleteOrderList);

module.exports = router;
