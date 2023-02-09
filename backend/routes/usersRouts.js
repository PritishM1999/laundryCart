const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
// const mongoose = require('mongoose');
// const {Users} = require('../models/usersSchema');

const router = express.Router();


// register
router.post("/register", registerUser)

// login
router.post('/login', loginUser)

module.exports = router;