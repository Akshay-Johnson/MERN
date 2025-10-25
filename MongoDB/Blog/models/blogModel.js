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
    likes:[{
        type:mongoose.Schema.Types.ObjectId, ref:"User"
    }],
    comments:[{
        user:{
            type:mongoose.Schema.Types.ObjectId, ref:"User"
        },
        text:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }]  
}, {timestamps:true});

export default  mongoose.model("Blog",blogSchema);
        
