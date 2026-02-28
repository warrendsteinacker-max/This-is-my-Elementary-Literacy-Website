import mongoose from "mongoose";


const connectDB = async() => {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('connected')
    }
    catch(error){
        console.error(error.message)
        console.log('not connected') 
    }
}

// In your connectDB.js


// const connectDB = async () => {
//     if (mongoose.connection.readyState >= 1) {
//         return; // Already connected
//     }
//     await mongoose.connect(process.env.MONGO_URI);
// };

export default connectDB