import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async ()=>{
    try {
      const connectInstance =   await mongoose.connect(`${process.env.MONGODG_URL}/${DB_NAME}`);
       console.log(`\n mogodb connected ${DB_NAME}`)
    
    } catch(error) {

        console.log("MONGODB connection error",error);
        process.exit(1)
    }
}
export default connectDB
