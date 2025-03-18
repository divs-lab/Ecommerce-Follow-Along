const {Router} = require('express');
const orderRouter = Router()

orderRouter.post('/place',auth, async(req,res)=>{
    try{
        const email = req.user;
        const { orderItems,shippingAddress } = req.body;

        if(!email){
            return res.status(400).json({message: "user not found."});
        }
        
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0){
            return res.status(400).send({ message: "Order Items are required." });
        }

        if(!shippingAddress){
            return res.status(400).json({message: "shipping address is required."});
        }

        const user= await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "user not found."});
        }

        const orderPromises = orderItems.map(async (item) => {
            const totalAmount = item.price * item.quantity;
            const order = new order({
                user: user._id,
                orderItems: [item],  
                shippingAddress,
                totalAmount,
            });
            return order.save();
        });

        const orders = await Promise.all(orderPromises);


        const arr = user.cart
        arr.splice(0,arr.length)

        res.status(201).json({message: "orders palced and cart cleared succssfully.", orders});
    }
    catch(err){
        console.log("error placing the order.",err);
    }
})

orderRouter.get('/getorder',auth,async(req,res)=>{
    try{
        const email = req.user
        if(!email){
            return res.status(400).json({message:'Invalid email'})
        }
        const orderhistory = await orders.findOne({email})

        console.log(orderhistory)
        res.status(200).json({message:"Order placed successfully",orderhistory})
    }catch(err){
        console.log(err)
    }
})

orderRouter.patch('/orders/cancel-order/:orderId',async(req,res)=>{
    try{
        const orderId = req.params.orderId

        const order = await orders.findById(orderId)
        if(!order){
            return res.status(404).json({message:'Order not found'})
        }

        if(order.user.toString()==['Delivered']){
            return res.status(404).json({message:'Order already delivered'})
        }

        await orderStatus == ['Cancelled']
        await order.save()

        res.status(200).json({message:'Order cancelled successfully'})
    }catch(err){
        console.log(err)
        res.status(500).json({message:'Server Error'})
    }
}
)



module.exports = orderRouter