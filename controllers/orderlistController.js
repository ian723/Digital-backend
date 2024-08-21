const { OrderList } = require('../models');

// Get all order lists
exports.getAllOrderLists = async (req, res) => {
    try {
        const orderLists = await OrderList.findAll();
        res.json(orderLists);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get an order list by ID
exports.getOrderListById = async (req, res) => {
    try {
        const orderList = await OrderList.findByPk(req.params.id);
        if (!orderList) return res.status(404).json({ error: 'Order list not found' });
        res.json(orderList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new order list
exports.createOrderList = async (req, res) => {
    try {
        const newOrderList = await OrderList.create(req.body);
        res.status(201).json(newOrderList);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an order list by ID
exports.updateOrderList = async (req, res) => {
    try {
        const updatedOrderList = await OrderList.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedOrderList[0] === 0) return res.status(404).json({ error: 'Order list not found' });
        res.json({ message: 'Order list updated' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an order list by ID
exports.deleteOrderList = async (req, res) => {
    try {
        const deletedOrderList = await OrderList.destroy({
            where: { id: req.params.id }
        });
        if (deletedOrderList === 0) return res.status(404).json({ error: 'Order list not found' });
        res.json({ message: 'Order list deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
