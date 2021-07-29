const mongoose = require("mongoose");

const categoryModel = new mongoose.Schema({
    categoryId:{
        type: String,
        required: true
    }, //Category ID
    categoryName:{
        type: String,
        required: true
    } //Category Name
});

module.exports = mongoose.model("category", categoryModel);