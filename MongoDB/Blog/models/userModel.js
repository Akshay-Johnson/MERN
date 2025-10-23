import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    displayname:{
        type:String,
        required:true
    },
    profileimage:{
        type:String,
        default:""
    }
}, {timestamps:true});


export default mongoose.model("User",userSchema);