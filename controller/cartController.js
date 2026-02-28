const Cart = require("../models/Cart");
const  Product = require("../models/Product");
const User = require("../models/User");

const addCart = async (req , res) => {
    try {

        //get data from request body
        const {userId , productId , quantity} = req.body;
        //validation 
        if (!userId || !productId || !quantity) return res.status(400).json({ message: 'All fields are required' });
        
        const checkUser = await User.findById(userId);
        if (!checkUser) return res.status(404).json({ message: 'User not found' });
        
        const checkProduct = await Product.findById(productId);
        if(!checkProduct) return res.status(404).json({msg : 'Product not found'});
        
        if(quantity > checkProduct.stockQuantity) return res.status(400).json({msg : 'Quantity exceeds stock'});
        
        let cart = await Cart.findOne({user : userId});
        if(!cart) {
            cart = await Cart.create({
                user : userId,
                items : []
            });
        }
        
        // add product or update quantity
        const itemsIndex = cart.items.findIndex(item => {
            return item.Product.equals(productId);
        });
        
        if(itemsIndex > -1) {
            cart.items[itemsIndex].quantity += quantity;
        } else {
            cart.items.push({Product : productId, quantity : quantity});
        }
        
        await cart.save();
        productId.stockQuantity -= quantity ;
        return res.status(201).json({message : 'Product added to cart', data : cart});
        
    } catch(error) {
        return res.status(500).json({message : error.message});
    }
};

const getCart = async (req , res) => {

};

const removeCart = async (req , res) => {

};

module.exports = {addCart , getCart , removeCart};