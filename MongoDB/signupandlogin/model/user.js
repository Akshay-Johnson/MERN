import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
 }
});

const User = mongoose.model('user', userSchema);// Create a model named 'user' using the 'userSchema'

export default User;// Export the User model