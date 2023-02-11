const express=require('express');
const { createOrder, getPastOrder } = require('../controllers/orderController');
const auth = require("../middleware/auth")

const router=express.Router();

// Create Order POST API
<<<<<<< HEAD
=======
// router.post("/create", auth , createOrder);
>>>>>>> 3a0e1995e5705d6912e1f3182de3bfbfd105d460
router.post("/create",  createOrder);

router.get("/orders", getPastOrder)





module.exports=router;