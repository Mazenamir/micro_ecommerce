const product = require('../models/Product');


const createProduct = async (req, res) => {
    try {
        const { name, price, stockQuantity } = req.body;
        if (!name || !price || !stockQuantity) return res.status(400).json({ message: 'All fields are required' });
        // check user role is admin
        // if (req.userId && req.userId.role !== 'admin') {
        //     return res.status(400).json({ message: 'You do not have permission' });
        // }
        
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        const token = authHeader && authHeader.split(' ')[1];
        // return res.status(200).json({ token });

        let decodedtoken = JWT.verify(token, JWT_SECRET);
        console.log(decodedtoken); 
        
        const newProduct = await product.create({ name, price, stockQuantity });
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { createProduct };