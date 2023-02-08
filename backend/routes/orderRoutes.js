const express=require('express');
const { createOrder } = require('../controllers/orderController');


const router=express.Router();

// Create Order POST API
router.post("/create/:id", createOrder);







module.exports=router;