const express=require('express');
const { createOrder, getPastOrder , updateOrder} = require('../controllers/orderController');
const auth = require("../middleware/auth")

const router=express.Router();

// Create Order POST API


// router.post("/create", auth , createOrder); \
router.post("/create",auth,createOrder);
router.get("/orders", getPastOrder)
router.put("/orders/:id" , updateOrder)





module.exports=router;