import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import User from "./models/userModels.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use (express.static(path.join(__dirname, 'public')));

//connect to mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("Connection error", err));


//show users
app.get("/", async (req, res) => {
    const users = await User.find();
    let html = `
    <h2> Users</h2>
    <button><a href="/adduser">Add New User</a></button>
    <table border="1" cellPadding="10" cellSpacing="0">
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>age</th>
    </tr> `;

    users.forEach(user => {
        html += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <button><a href="/updateuser/${user._id}">Edit</a></button>
                <button><a href="/deleteuser/${user._id}">Delete</a></button>
            </td>
        </tr>
        `;
    });

    html += `</table>`;
    res.send(html);
});

//add  user 
app.get("/adduser", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post("/adduser", async (req, res) => {
    const { name, email, age } = req.body;
    await User.create({ name, email, age });
    res.redirect("/");
});

//update user
app.get("/updateuser/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(`
        <h2>Update User</h2>
        <form action="/updateuser/${user._id}" method="POST">
        Name: <input type="text" name="name" value="${user.name}" required /><br/>
        Email: <input type="email" name="email" value="${user.email}" required /><br/>
        Age: <input type="number" name="age" value="${user.age}" required /><br/>
        <button type="submit">Update User</button>
        </form>
        `)
});

app.post("/updateuser/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
});

//delete user
app.get("/deleteuser/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
