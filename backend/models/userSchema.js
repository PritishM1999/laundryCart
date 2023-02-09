const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,      
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    phone:{
        type:String,
        required:true,
        unique: true
    },
    state:{
        type:String,
        required:true
    },
    district:{
        type:String,
        required:true
    },
    address:[
        {
        type:String,
        required:true
    }],
    pincode:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}, 
{timestamps: true});

module.exports = {Users: mongoose.model("User", UserSchema)}
