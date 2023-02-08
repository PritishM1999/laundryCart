const mongoose=require('mongoose')


const OrderSchema=mongoose.Schema({
    orderDate:{
        type:Date,
        default: Date.now()
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,   
    },
    storeLocation:{
        type:String,
        default:"JP Nagar"
    },
    storeAddress:{
        type:String,
        default:"Near Phone Booth "
    },
    storePhone:{
        type:String,
        default:"+91 99999999"
    },
    storeCity:{
        type:String,
        default:"Bangalore"
    },
    status:{
        type:String,
        default:"Ready To Pickup"
    },
    price:{
        type:Number,
        required:true
    },
    orderItems:[{
        name:{
            type:String,
            required:true
        },
        operationType:{
            type:Array,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        totalPrice:{
            type:Number,
            required:true,
        },
    }],

    shippingAddress:{
        type:String,
        required:true
    },

    pincode:{
        type:Number,
        required:true
    }
});


module.exports= mongoose.model("order", OrderSchema);