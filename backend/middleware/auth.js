const jwt = require('jsonwebtoken');
const secret = "LAUNDRYKEY";

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        if(token){
            req.userID = jwt.verify(token, secret);
            next();
        }

    }
    catch(err){
        console.log(err);
    }
}

module.exports = auth;