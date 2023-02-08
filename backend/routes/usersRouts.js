const express = require('express');
const mongoose = require('mongoose');
const {Users} = require('./model-schemas/uSchema');

const app = express();
app.use(express.json());


const { Result } = require("express-validator"); //middleware
const { body, validationResult } = require('express-validator')

const jwt = require('jsonwebtoken');
const secret = "LAUNDRYKEY";

mongoose.connect('mongodb://localhost:27017/laundaryCart', {useNewUrlParser:true, useUnifiedTopology:true})
.then((data)=>{
   console.log(`Connected to mongo DB :${data.connection.host}`);
})

app.listen(4000, ()=> {
    console.log("Server up at Port 4000")
});

// register
app.post("/register",
    body('email').isEmail(),
    body('phone').isNumeric(),
    body('password').isLength({min:6, max:16}),
    body('name').isAlphanumeric(), async (req, res) =>{

    const data = req.body;
    
    try{
        ////if user already exists
        const existingUser =  await Users.findOne({$or: [{phone : data.phone}, {email : data.email}]}); 
        // console.log(existingUser);
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }

        //// storing new user
        const user = await Users.create(req.body);
        res.status(201).json({
            status: "User registered sucessfully",
            user
        })
        // res.send("OK");
        console.log(req.body);
        }
        catch(e){
            res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
});


app.post('/login', async (req, res) => {

const data = req.body;
    try{
    ////if user already exists - & checking either phone or pass and password
    const existingUser =  await Users.findOne({$or: [{phone : data.phone}, {email : data.email}], $and: [{password : data.password}] });

    if(!existingUser){
        return res.status(400).json({
            status: 'Failed',
            message: 'Invalid details'
        });
    }

    if(existingUser){
        const token = jwt.sign({
            exp: Math.floor(Date.now()/1000) + (60*60),
            data: existingUser._id,
        }, secret);
        console.log(data);
        console.log(token);
        return res.status(200).json({
            status: "Success",
            message: "Login Sucessful",
            token
        })
    }else {
        return res.status(400).json({
            status: "Failed"
        })
    }
    
    }
    catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    } 
})
