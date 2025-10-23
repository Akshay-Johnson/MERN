import express from 'express';
import jwt from 'jsonwebtoken';
import Blog from '../models/blogModel.js';

const router = express.Router();

//middleware to verify token
const auth = (req,res,next) => {
    const token = req.headers["authorization"]?.replace("Bearer ","");
    if(!token){
        return res.status(401).json({message:"No token, authorization denied"});
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }catch(error){
        res.status(401).json({message:"Token is not valid"});
    } 
};

//create blog post
router.post('/',auth,async (req,res)=>{
    try{
        const{title,content,image} = req.body;
        const newPost = await Blog.create({ author:req.user,title,content,image});
        res.status(201).json(newPost);
    }catch(error){
        res.status(500).json({message:"Error creating blog post"});
    }
});

//get all blog posts
router.get('/',async(req,res)=>{
    const blogs = await Blog.find().populate("author","displayname email").sort({createdAt:-1});
    res.json(blogs);
});

//get single blog post
router.get("/:id",async(req,res)=>{
    const blog = await Blog.findById(req.params.id).populate("author","displayname email");
    if(!blog){
        return res.status(404).json({message:"Blog post not found"});
    }
    res.json(blog);
});

//update blog post
router.put('/:id',auth,async(req,res)=>{
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updatedBlog);
});

//delete blog post
router.delete("/:id",auth,async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.json({message:"Blog post deleted"});
});

export default router;