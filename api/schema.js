import mongoose from "mongoose";

const posts = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        name: {
            type: String,
            required: true,
            trim: true            
        },
        descript: {
            type: String,
            required: true,
            trim: true   
        }
    },
    {timestamps: true}
)

const Posts = mongoose.model('Posts', posts)

export default Posts