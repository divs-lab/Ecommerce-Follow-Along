const userModel = require("../Model/userModel");

const router = Router();

router.get('/profile',async (req, res) => {
    const {email} = req.query
    if(!email){
        return res.status(400).json({message: "Email is required"})
    }
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    res.status(200).json({message:success})  
}  
)