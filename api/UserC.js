import Posts from "./schema.js";
import Users from './schematwo.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



export const LogIn = async(req, res) => {

    const {pass, user} = req.body


    const User = await Users.findOne({username: user})


    if(!User){
        return res.status(403).json({state: false})
    }

    const isMatch = await bcrypt.compare(pass, User.password)

    if(!isMatch){
        return res.status(403).json({state: false})
    }

    const token = jwt.sing({userId: User.id}, process.env.AUTH_KEY, {expiresIn: "15m"})

    return res.status(200).json({state: true, token: token})

}

export const MakeAcount = async(req, res) => {
    const {pass, user} = req.body

    console.log(pass)
    console.log(user)

    const User = await Users.findOne({username: user})

    if(User){
        return res.status(403).json({status: false})
    }

    console.log(User)

    const haspass = await bcrypt.hash(pass, 10)

    const newUser = new Users({password: haspass, username: user})

    await newUser.save()

    return res.status(201).json({status: true})

}

export const getAllP = async (req, res) => {
    try {
        // Ensure the database is connected
        const allPosts = await Posts.find({}); // Empty object finds everything
        return res.status(200).json({ status: 'success', data: allPosts });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server failed to fetch posts" });
    }
};


export const makeP = async (req, res) => {
    const { name, title, descript } = req.body;
    
    // Check if required fields are provided
    if (!name || !title || !descript) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const newPost = await Posts.create({ name, title, descript });
        return res.status(201).json({ status: 'created', data: newPost });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server failed to create post" });
    }
};

export const editP = async (req, res) => {
    const { name, title, descript } = req.body;
    
    try {
        const updatedPost = await Posts.findByIdAndUpdate(
            req.params.id, 
            { name, title, descript }, 
            { new: true } // Returns the updated document
        );
        
        if (!updatedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        
        return res.status(200).json({ status: 'updated', data: updatedPost });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server failed to update post" });
    }
};

export const deleteP = async (req, res) => {
    try {
        const deletedPost = await Posts.findByIdAndDelete(req.params.id);
        
        if (!deletedPost) {
            return res.status(404).json({ error: "Post not found" });
        }
        
        return res.status(200).json({ status: 'deleted' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Server failed to delete post" });
    }
};