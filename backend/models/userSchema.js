import mongoose from "mongoose";

const userScheme = mongoose.Schema({
    username:{
        type:String,
        requied:true,
        unique:true
    },fullname:{
        type:String,
        requied:true,
    },email:{
        type:String,
        requied:true,
        unique:true
    },password:{
        type:String,
        requied:true,
        unique:true
    },address:{
        type:String,
        default:""
    }
},{timestamps:true});

const User = mongoose.model("User",userScheme);

export default User;