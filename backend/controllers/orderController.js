const mongoose =require('mongoose');
const Order=require("../models/orderSchema");

// Create Order controller
const createOrder = async(req,res)=>{
    const neworder=req.body; 
   //  const {data}=req.userID;

    // const {data}=req.userID;

  
    const order=await Order.create(neworder);
    if(!order){
       return res.status(400).json({
          message:"Order Creation Fail,Check post order, BE"
       })
    }
    console.log(order);
    return res.status(200).json({
       message:"Success",
       order,
    })
 };
  //PastOrder Get Api
  const getPastOrder = async (req , res) =>{
   try{
      //  let {data} = req.userID
       let result = await Order.find()
       res.status(201).json({
           status:"Success",
           result
       })
   }catch(e){
       res.status(500).json({
           status:"Failed",
           message:e.message
       })
   }
}



 module.exports={createOrder , getPastOrder}