const {Router}= require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");
const {bcrypt} = require("bcrypt");
const userrouter = Router();
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./src/config/.env" });

const secret = process.env.private_key;

userrouter.post("/create-user",upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename ; 
      const fileUrl = path.join(filename);

      bcrypt.hash(password, 10, async function(err, hash) {
      
      await userModel.create({
        name:name,
        email:email,
        password: hash,
        // avatar:fileUrl
      })
    })

console.log(user);
});

userrouter.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    const check = await userModel.findOne({email:email});
    console.log(check);

    if (!check) {
        return res.status(400).json({message: "User not found"});
    }

    bcrypt.compare(password, check.password, function(err, result){
      if (err) {
        return res.status(400).json({message: "Invalid bcrypt compare"});
      }
      if (result) {

        jwt.sign({email:email},xyz,(err,token)=>{
          if (err) {
            return res.status(400).json({message: "Invalid jwt"});
          }
          if(result){
            jwt.sign({email:email},secret,(err,token)=>{
                if (err) {
                    return res.status(400).json({message:"Invalid bcrypt"})
                }
            })
          }
          res.setHeader
          console.log(token);
          res.status(200).json({token:token});
        })


      }
      else {
        return res.status(400).json({message: "Invalid password"});
      } 
    })

});


userrouter.post('/address', async (req, res) => {
    const { address, city, state, zip, country } = req.body;
    try {
        if (!address || !city || !state || !zip || !country) {
            return res.status(400).json({ message: "Fill all fields" });
        }
        const addressDetails = new userModel({ address, city, state, zip, country });
        await addressDetails.save();
        res.status(200).json({ message: "Address added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


userrouter.get('/get-address', auth, async (req, res) => {
  const{email}=req.user
  try {
  const user = await userModel.findOne({ email:email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({message:"Successfully received",user:user.address})
  } catch (error) {
    console.log("Error in get address",err)
  }
})

module.exports = userrouter;