import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId, ref:"User"
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
}, {timestamps:true});

export default  mongoose.model("Blog",blogSchema);
        
