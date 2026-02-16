const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name : { type: String, required: true, trim: true },
    price :{type : Number , required :true  , min : 0 } ,
    stockQuantity : { type: Number, required: true, min: 0 } ,
    userId : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
} , { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);


