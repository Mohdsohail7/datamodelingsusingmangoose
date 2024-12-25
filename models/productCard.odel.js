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

// BD7.1-hw2
// 1. Create a mongoose model for the following product card.
const refrigeratorSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    review: Number,
    price: Number,
    priceAfterDiscont: Number,
    discount: Number,
    bankOffer: Number,
    bankOfferCards: Number,
    rankOffer: Number,
    extraDiscount: Number,
    model: String,
    make: String,
    releaseYear: Date,
    warrantyProduct: Number,
    warrantyCompressor: Number,
    warrantyPCB: Number,
    productImage: String

},{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
const DigitalProduct = mongoose.model("DigitalProduct", cameraProductSchema);
const Refrigerator = mongoose.model("Refrigerator", refrigeratorSchema);
module.exports = { Product, DigitalProduct, Refrigerator }; 