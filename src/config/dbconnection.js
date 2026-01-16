import  Env from "./envConfig.js"; // env (secrets add garna ko lagi)
import mongoose from "mongoose";

async function dbconnection(){
    try {
        await mongoose.connect(Env.dburl);
        console.log("Database connected successfully");
    } catch(error) {
        console.error("Database connection error:", error);
    }
}
export default dbconnection;