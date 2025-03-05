const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
require('dotenv').config({path:'../config/.env'})

const auth = async(req, res, next) => {
    const tokenauth =req.header.Authorization
    const token = tokenauth.split(' ')[1]
    const secret = process.env.secretkey;

    jwt.verify(token, secret, function(err,decoded){
        if(err){
            return res.status(401).json({success:false, message: "Invalid token"})
        }else{
            next()
        }
    });

}

module.exports=auth