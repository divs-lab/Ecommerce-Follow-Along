const rolemiddleware =(role)=>(req,res,next)=>{
    if(role.includes(req.user.role)){
        next();
    }else{
        res.status(403).json({message:"Unauthorized access"});
    }
}
module.exports = rolemiddleware