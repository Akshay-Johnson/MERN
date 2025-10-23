import mongoose from "mongoose";
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/users",userRoutes);
app.use("/api/blogs",blogRoutes);

// Basic route
app.get("/",(req,res)=>{
    res.send("Welcome to the Blog API");
});

// Function to connect to MongoDB
const MongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
MongoDB();

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});

