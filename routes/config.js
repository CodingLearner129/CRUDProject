const express = require("express");
const router = express.Router();
const modelProduct = require("../models/product");
const modelCategory = require("../models/category");

//END Points
router.get("/product", async(req, res)=>{
    try {
        const product = await modelProduct.find();
        res.json(product);
    } catch (error) {
        res.send("Error" + error);
    }
});
router.get("/product/:productId", async(req, res)=>{
    try {
        const product = await modelProduct.findById(req.params.productId);
        res.json(product);
    } catch (error) {
        res.send("Error" + error);
    }
});
router.get("/category", async(req, res)=>{
    try {
        const category = await modelCategory.find();
        res.json(category);
    } catch (error) {
        res.send("Error" + error);
    }
});
router.get("/category/:categoryId", async(req, res)=>{
    try {
        const category = await modelCategory.findById(req.params.categoryId);;
        res.json(category);
    } catch (error) {
        res.send("Error" + error);
    }
});

router.post("/product", async(req, res)=>{
    const product = new modelProduct({
        productId: req.body.productId,
        productName: req.body.productName,
        qtyPerUnit: req.body.qtyPerUnit,
        unitPrice: req.body.unitPrice,
        unitInStock: req.body.unitInStock,
        discontinued: req.body.discontinued,
        categoryId: req.body.categoryId,
    });
    try {
        const productRes= await product.save();
        res.jason(productRes);        
    } catch (error) {
        res.send("Error" + error);
    }
});
router.post("/category", async(req, res)=>{
    const category = new modelCategory({
        categoryId: req.body.categoryId,
        categoryName: req.body.categoryName,
        
    });
    try {
        const categoryRes= await category.save();
        res.jason(categoryRes);        
    } catch (error) {
        res.send("Error" + error);
    }
});

router.patch("/product/:productId", async(req, res)=>{
    try {
        const product = await modelProduct.findById(req.params.productId);
        product.productId= req.body.productId;
        product.productName= req.body.productName;
        product.qtyPerUnit= req.body.qtyPerUnit;
        product.unitPrice= req.body.unitPrice;
        product.unitInStock= req.body.unitInStock;
        product.discontinued= req.body.discontinued;
        product.categoryId= req.body.categoryId;
        const productRes= await product.save();
        res.jason(productRes);        
    } catch (error) {
        res.send("Error" + error);
    }
});
router.patch("/category/:categoryId", async(req, res)=>{
    try {
        const category = await modelCategory.findById(req.params.categoryId);
        category.categoryId= req.body.categoryId;
        category.categoryName= req.body.categoryName;
        const categoryRes= await category.save();
        res.jason(categoryRes);       
    } catch (error) {
        res.send("Error" + error);
    }
});

// Export  
module.exports = router; 