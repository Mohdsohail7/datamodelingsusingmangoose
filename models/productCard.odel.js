const mongoose = require("mongoose");

// 2. Create a mongoose model for the following product card.

const productSchema = new mongoose.Schema({
    productName: String,
    short_description: String,
    description: String,
    color: [{
        type: String
    }],
    size: [{
        String
    }],
    price: Number,
    productImage: String
});

// 3. Create a mongoose model for the following product card.
const cameraProductSchema = new mongoose.Schema({
    productName: String,
    ratings: Number,
    reviewsCount: Number,
    description: String,
    actualPrice: Number,
    afterDiscountPrice: Number,
    discountPercantage: Number,
    deliveryType: String,
    stockAvailable: Number,
    productImage: String

});


const Product = mongoose.model("Product", productSchema);
const DigitalProduct = mongoose.model("DigitalProduct", cameraProductSchema);
module.exports = { Product, DigitalProduct }; 