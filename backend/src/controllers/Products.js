const { Router } = require("express");
const productmodel = require("../Model/ProductModel");
const { productupload } = require("../../multer");
const productrouter = Router();
const path = require("path");

productrouter.get("/get-router", async (req,res)=>{
    try {
        const productfind = await productmodel.find();
        console.log(productfind);

        if (!productfind) {
            return res.status(400).json({message: "No product found"});
        }

        const productimage = productfind.map((product) => {
            return {
                id: product._id,
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.image,
                category: product.category,
                stock: product.stock,
                tags: product.tags,
                email: product.email,
                createdAt: product.createdAt
            };
        });
        return products;
    }
    catch(err){
        console.log(err);
    }
});


productrouter.post('/cart',async,(req,res)=>{
    const{email,productid,productname,quantity}

    try{
        if(!email||productid||productname||quantity){
            return res.status(400).json({"Fill all input boxes"})
        }
        const findemail=await userModel.findone({email:email})
        if(!findemail){
            return res.status(400).json({message:'product not there'})
        }
        
        if(!mongoose.types.objectId.isValid(productid)){
            return res.status(400).json({message:'product does not exist'})
        }

        if(!quantity && quantity<0){
            return res.status(400).json({"You don't have enough product."})
        }

        const findproduct=await Productmodel.findById(productid)
        if(!findproduct){
            return res.status(400).json({message:"Product does not exist"})
        }

        const cartproduct=await findemail.cart.findIndex((i)=>{
            return i.productid===productid
        })
        if(cartproduct>-1){
            findemail.cart[cartproductid].quantity+=quantity
        }else{
            findemail.cart.push({productid,productname,quantity})
        }
    }
    catch(err){
        console.log("Error")
    }
})

productrouter.get('/getcart',async(req,res)=>{
    try{
    const{email}=req.body
    
    if(!email){
        return res.status(400).json({message:"user does not exist"})
    }
    const user = await userModel.findone({email:email}).populate({
        path:'cart.productid',
        model:Productmodel
    })

    if(!user){
        return res.status(400).json({message:"user does not exist"})
    }

    return res.status(400).json({message:"Cart is shown successfully"})
    }

    catch(err){
        console.log("error in cart for get req")
    }
})

productrouter.put('/edit-cart',async(req,res)=>{
    const {email,productid,quantity}=req.body
    try{
    
    if(!email||!productid||quantity==undefined){
     return res.status(404).json({message:"put all details"})
    }
    const finduser=await userModel.findOne({email:email})
    if(!finduser){
     return res.status(500).json({message:"user is not found"})
    }
 
    const findproduct=await Productmodel.findOne({_id:productid})
    if(!findproduct||findproduct.stock<=0){
     return res.status(404).json({message:"product not avzailable"})
    }
   
    const findcartproduct=finduser.cart.find(item=>item.productid===productid)
 
    if(!findcartproduct){
     return res.status(404).json({message:"can not find"}) 
    }
    findcartproduct.quantity=quantity
    await finduser.save()
    return res.status(200).json({message:"edited successfully"})
 }
 catch(err){
     console.log(err)
 }
 })

productrouter.post("/post-product",productupload.array('files'), async(req,res)=>{
    const {name, price, description, category, stock, tags, email} = req.body;
    const image = req.file.map(file => file.path);
    try{
        const seller = await productmodel.filename({email:email});
        if (!seller) {
            return res.status(400).json({message: "Seller not found"});
        }

        if (images.length === 0) {
            return res.status(400).json({message: "Please upload atleast one image"});
        }

        await productmodel.create({
            name:name,
            price:price,
            description:description,
            image:images,
            category:category,
            stock:stock,
            tags:tags,
            email:email
        });
    }
    catch(error){
        console.log(error);
    }
    res.status(200).json({message:"Product added successfully"});
});

productrouter.put("/edit-product/:id", productupload.array('files', 10), async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { name, description, category, tags, price, stock, email } = req.body;
        const existproduct = await productmodel.findById(id);

        if (!existproduct) {
            return res.status(400).json({ message: "Product does not exist" });
        }

        let updateimages = existproduct.image;
        if (req.files && req.files.length > 0) {
            updateimages = req.files.map((img) => {
                return `/product/${path.basename(img.path)}`;
            });
        }
        existproduct.name = name;
        existproduct.description = description;
        existproduct.category = category;
        existproduct.tags = tags;
        existproduct.price = price;
        existproduct.stock = stock;
        existproduct.email = email;
        existproduct.image = updateimages;

        await existproduct.save();

        res.status(200).json({ product: existproduct });
    } catch (err) {
        console.log('error in updating');
    }
});

productrouter.delete(`/delete-product`, async(req,res)=>{
    try{
        const {id} = req.params
        const existproduct = await productmodel.finalById(id)

        if(!existproduct){
            res.status(400).json({message:"product does not exist"})
        }

        await existproduct.deleteOne()

    }catch(err){
        console.log(`error in deleting`)
    }
})


module.exports = productrouter;