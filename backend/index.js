const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const productRoutes=require("./routes/productRoutes");
const orderRoutes=require("./routes/orderRoutes");

const usersRouts = require("./routes/usersRouts");


const app=express();
app.use(express.json());
app.use(cors());


app.use("/product", productRoutes)
app.use("/order", orderRoutes)

app.use("/user", usersRouts)

mongoose.connect("mongodb://localhost:27017/testSchema", {useNewUrlParser:true, useUnifiedTopology:true})
.then((data)=>{
   console.log(`Mongo DB Connected :${data.connection.host}`);
})

app.listen(4000, ()=> {
    console.log("Server up at Port 4000")
});