const mongoose  = require("mongoose");

const productItem = new mongoose.Schema({
    productItem : {
        type : mongoose.Schema.Types.ObjectId ,
        ref: 'Product',
        required: true
    },
    quantity : {
        type : Number,
        required: true,
        min: 1
    }
})

const CartSchema  = new mongoose.Schema({
    user : {
        type :mongoose.Schema.Types.ObjectId ,
        ref: 'User',
        required: true
    },
    items : [productItem],
    totalAmount: {
        type: Number,
        required: true,
        min: 0
    },
    products: [productItem]
},{timestamps: true});


module.exports = mongoose.model('Cart', CartSchema);