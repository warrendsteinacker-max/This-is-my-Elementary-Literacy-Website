import { mongoose } from "mongoose";


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

export default connectDB