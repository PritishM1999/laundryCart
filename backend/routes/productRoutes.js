const express=require('express');

const { getAllProducts, createProduct } = require('../controllers/productController');


const router=express.Router();

// Create Order POST API
router.post('/product', createProduct);
// GET All Product API
router.get("/products", getAllProducts)



module.exports=router;