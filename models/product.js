const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
    productid:{
        type: String,
        required: true
    }, //Product ID
    productName:{
        type: String,
        required: true
    }, //Product Name
    qtyPerUnit:{
        type: Number,
        required: true
    }, //Quantity of the Product
    unitPrice:{
        type: Number,
        required: true
    }, //Unit Price of the Product
    unitInStock:{
        type: Number,
        required: true
    }, // Unit in Stock
    discontinued:{
        type: Boolean,
        required: true,
        default: false
    }, // Boolean(Yes/No)
    categoryId:{
        type: String,
        required: true
    } //Category ID
});

module.exports = mongoose.model("product", productModel);