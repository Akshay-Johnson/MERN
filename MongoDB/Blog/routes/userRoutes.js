import express from 'express';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const router = express.Router();

// User Signup
router.post('/signup',async (req,res)=>{
    try{
        const {email,password,displayname}= req.body;

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword = await bycrypt.hash(password,12);
        const newUser = await User.create({ email,password:hashedPassword,displayname  });
        res.status(201).json({message:"User created successfully", userId:newUser._id});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"error"});
    }
});

// User Login
router.post('/signin',async (req,res) =>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const isMatch = await bycrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"});
        res.json({ msg: "Login successful", token })
    }catch(error){
        console.error(error);
        res.status(500).json({message:"token error"});
    }
});

export default router;


