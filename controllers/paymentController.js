const { Payment, Order } = require("../models");

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all payments
exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll({ include: [Order] });
    res.json(payments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
