import mongoose from "mongoose";
//user schema
 
//create schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,                
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

//create model
const userModel=mongoose.model("users",userSchema);

export default userModel;


