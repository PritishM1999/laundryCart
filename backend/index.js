const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const productRoutes=require("./routes/productRoutes");
const orderRoutes=require("./routes/orderRoutes");
const userRoutes=require("./routes/usersRouts");


const app=express();
app.use(express.json());
app.use(cors());


app.use("/product", productRoutes)
app.use("/order", orderRoutes)

app.use("/user", userRoutes)


mongoose.connect("mongodb://localhost:27017/testSchema", {useNewUrlParser:true, useUnifiedTopology:true})
.then((data)=>{
   console.log(`Mongo DB Connected :${data.connection.host}`);
})

mongoose.set("strictQuery", false);

app.listen(4000, ()=> {
    console.log("Server up at Port 4000")
});