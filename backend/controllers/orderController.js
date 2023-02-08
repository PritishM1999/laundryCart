const mongoose =require('mongoose');
const Order=require("../models/orderSchema");

// Create Order controller
const createOrder = async(req,res)=>{
    const neworder=req.body;
    const {id}=req.params;
  
    const order=await Order.create({...neworder, userId:id});
    if(!order){
       return res.status(400).json({
          message:"Order Creation Fail,Check post order, BE"
       })
    }
    return res.status(200).json({
       message:"Success",
       order,
    })
 };



 module.exports={createOrder}