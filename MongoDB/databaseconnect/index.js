// Import necessary modules
import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv";

// Initialize Express app and load environment variables
const app = express();
dotenv.config(); 

const PORT = process.env.PORT; // Port number from .env file
const MONGO_URL = process.env.MONGO_URL; // MongoDB connection string from .env file

mongoose.connect(MONGO_URL) // Connect to MongoDB
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});

// Define a schema and model for the collection
const userSchema = new mongoose.Schema({
    name: String,
    department: String,
    salary: Number,
    age: Number
});

const UserModel = mongoose.model("test", userSchema,"test"); //connecting to employees collection
// const UserModel = mongoose.model("employees", userSchema);

//Middleware to parse bodies
app.get("/getData", async (req, res) => {

    try {
        const userData = await UserModel.find({}); // Fetch all documents from the collection
        if(userData.length===0){
            return res.send("No data found");
        }
    } catch (error) {
        console.error("Error fetching user data:", error);
        return res.status(500).send("Internal Server Error");
    }
    
    const userData = await UserModel.find({}); // Fetch all documents from the collection
    // Format and send the response
    res.send(userData.map(user => `Name : ${user.name}\nDepartment : ${user.department}\nSalary : ${user.salary}\nAge : ${user.age}`).join("<br>"));   
});