require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");

// Import route files
const customerRoutes = require("./routes/customers");
const staffRoutes = require("./routes/staff");
const menuRoutes = require("./routes/menu");
const orderRoutes = require("./routes/order");
const paymentRoutes = require("./routes/payment");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use routes
app.use("/customers", customerRoutes);
app.use("/staff", staffRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Sync database
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
