import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async()=>{
    try{
       const connecttionInstance = await mongoose.connect(`${process.env.MONGODG_URL}/n Mongodb connected !! DB HOST ${connecttionInstance.Connection.host}`)
    } catch(error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}
export default connectDB

