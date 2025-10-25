import express from 'express';
import jwt from 'jsonwebtoken';
import Blog from '../models/blogModel.js';
import mongoose from 'mongoose';

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


//filter
router.get("/filter",async(req,res)=>{
    try{
        const {author,keyword,sortBy,order} = req.query;

        let filter = {};
        if(author) {
            if(mongoose.Types.ObjectId.isValid(author)){
                filter.author = new mongoose.Types.ObjectId(author);
            } else {
                return res.status(400).json({message:"Invalid author ID"});
            }
        }

        if(keyword) {
            filter.$or = [
                {title:{$regex:keyword,$options:"i"}},
                {content:{$regex:keyword,$options:"i"}}
            ];
        }

        let sort ={};
        if(sortBy){
            if(sortBy ==="likes"){
                sort={"likes.length": order ==="desc"? -1:1};
            } else {
                sort[sortBy] = order ==="desc"? -1:1;
            }
        }else{
            sort={createdAt:-1};
        }
    

       console.log("Filter Used:",filter);
       console.log("Sort Used:",sort);

       const blogs= await Blog.find(filter)
         .populate("author","displayname email")
         .sort(sort);
        console.log("Filter used:", JSON.stringify(filter, null, 2));
        console.log("Sort used:", JSON.stringify(sort, null, 2));
       res.json(blogs);
    }catch(error){
        res.status(500).json({message:"Error filtering blog posts"});
    }
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

//comment on blog post
router.post("/:id/comments",auth,async(req,res)=>{
    try{
        const{text} = req.body;
        if(!text){
            return res.status(400).json({message:"Comment text is required"});
        }

        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(404).json({message:"Blog post not found"});
        }

        blog.comments.push({ user:req.user,text});
        await blog.save();

    }catch(error){
        res.status(500).json({message:"Error adding comment"});
    }
});

//update comment
router.put("/:blogId/comments/:commentId",auth,async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.blogId);
        if(!blog){
            return res.status(404).json({message:"Blog post not found"});
        }
        const comment = blog.comments.id(req.params.commentId);
        if(!comment){
            return res.status(404).json({message:"Comment not found"});
        }
        if(comment.user.toString() !== req.user){
            return res.status(403).json({message:"Unauthorized"});
        }
        comment.text= req.body.text || comment.text;
        await blog.save();
        res.json({message:"Comment updated",comment});
    }catch(error){
        res.status(500).json({message:"Error updating comment"});   
    }
});

//delete comment
router.delete("/:blogId/comments/:commentId",auth,async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.blogId);
        if(!blog){
            return res.status(404).json({message:"Blog post not found"});
        }

        const comment = blog.comments.id(req.params.commentId);
        if(!comment){
            return res.status(404).json({message:"Comment not found"});
        }
        if(comment.user.toString() !== req.user){
            return res.status(403).json({message:"Unauthorized"});
        }
        comment.deleteOne();
        await blog.save();
        res.json({message:"Comment deleted"});

    }catch(error){
        res.status(500).json({message:"Error deleting comment"});   
    }
});

//blog like and unlike
router.post("/:id/like",auth,async(req,res)=>{
    try{
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(404).json({message:"Blog post not found"});
        }

        const alreadyLiked = blog.likes.includes(req.user);
        if(alreadyLiked){
            blog.likes.pull(req.user);
        }else{
            blog.likes.push(req.user);
        }
        await blog.save();
        res.json({message:alreadyLiked?" Unliked":"Liked",likes:blog.likes});
    }catch(error){
        res.status(500).json({message:"Error liking/unliking blog post"});
    }
});




export default router;