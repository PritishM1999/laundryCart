const Users = require('../models/usersSchema');
const { Result } = require("express-validator"); //middleware
const { body, validationResult } = require('express-validator')

const jwt = require('jsonwebtoken');
const secret = "LAUNDRYKEY";



const registerUser = (body('email').isEmail(),
    body('phone').isNumeric(),
    body('password').isLength({ min: 6, max: 16 }),
    body('name').isAlphanumeric(), async (req, res) => {

        const data = req.body;

        try {
            ////if user already exists
            const existingUser = await Users.findOne({ $or: [{ phone: data.phone }, { email: data.email }] });
            // console.log(existingUser);
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
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
        catch (e) {
            res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
    });


const loginUser = async (req, res) => {

    const data = req.body;
    try {
        ////if user already exists - & checking either phone or pass and password
        const existingUser = await Users.findOne({ $or: [{ phone: data.phone }, { email: data.email }], $and: [{ password: data.password }] });

        if (!existingUser) {
            return res.status(400).json({
                status: 'Failed',
                message: 'Invalid details'
            });
        }

        if (existingUser) {
            const token = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: existingUser._id,
            }, secret);
            console.log(data);
            console.log(token);
            return res.status(200).json({
                status: "Success",
                message: "Login Sucessful",
                token
            })
        } else {
            return res.status(400).json({
                status: "Failed"
            })
        }

    }
    catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
}





module.exports = { registerUser, loginUser };