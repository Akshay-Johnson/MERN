const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use product routes
app.use("/api/products", productRoute);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://testuser:testuser@cluster0.xixj92c.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
  
// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
