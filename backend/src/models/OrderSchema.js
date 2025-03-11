const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true, 
    },
    orderItems:[
        {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true,
        },
        name:{
            type:String,
            reuired:true,
        },
        quantity:{
            type:Number,
            required:true,
            min:[1,'Qunatity cannot be less than 1'],
        },
        price:{
            type:Number,
            required:true,
            min:[0,'Price cannot be negative']
        },
        image:{
            type:String,
            required:true
        }
    }
],
    shippingAddress:{
        country:{type: String, required:true},
        city:{type:String, required:true},
        address1:{type:String, required:true},
        address2:{type:String, required:true},
        zipCode:{type:String, required:true},
        addressType:{type:String, required:true}
    },
    totalAmount:{
        type:Number,
        required:true,
        default:0
    },
    orderStatus:{
        type:String,
        enum:['Processing','Shipped','Deliverd','Cancelled'],
        default: 'Processing'
    },
    deliverdAt: {
        type: Date,
    },
},{timestamps:true});

const orders = mongoose.model('Order', orderSchema);
module.exports orders;