const express =require('express');
const mongoose =require('mongoose');
const Product=require("../models/productSchema");




// Create Product 
const createProduct=async(req,res)=>{

    try {
    const data=req.body;
    const product=await Product.create(data);
    console.log(product);
    } catch (error) {
       res.status(400).json({
          message:error.message
       })
    }
 };

// Get All Products
const getAllProducts=async(req,res)=>{
    try {
       const products=await Product.find();
       return res.status(200).json({
          message:"Success",
          products
       })
    } catch (error) {
       res.status(400).json({
          message:error.message
       })
    }
 };


 module.exports={createProduct, getAllProducts}
