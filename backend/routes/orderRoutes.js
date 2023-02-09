const express=require('express');
const { createOrder } = require('../controllers/orderController');
const auth  = require('../middleware/auth');
 
const router=express.Router();

// Create Order POST API
router.post("/create/:id",  auth, createOrder);







module.exports=router;