const mongoose=require('mongoose')


const productSchema=mongoose.Schema({
    name:{
        type:String,
    },
    operation:[{
        operationName:{
            type:String,
            required:true,
        },
        operationPrice:{
            type:Number,
            required:true
        }
    }]
});


module.exports=mongoose.model("product", productSchema)