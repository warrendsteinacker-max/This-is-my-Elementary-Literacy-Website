import Posts from "./schema.js";


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