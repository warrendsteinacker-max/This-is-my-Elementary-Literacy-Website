import mongoose from "mongoose";

const User = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
            trim: true
        },           
        
        username: {
            type: String,
            required: true,
            trim: true   
        }
    },
    {timestamps: true}
)

const Users = mongoose.model('Users', User)

export default Users