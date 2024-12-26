const mongoose = require("mongoose");

// 6. Create a model for restaurants. Design the model with the following fields.
const restaurantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: [{
        type: String,
        enum: ["Italian", "Spanish", "Mexican", "Chinese", "Indian", "American", "French","Japanese", "Mediterranean", "Thai", "Vegetarian", "Vegan", "Other"]
    }],
    location: {
        type: String,
        required: true
    },
    phone: String,
    website: String,
    openHours : String,
    priceRange: {
        type: String,
        enum: ['$ (0-10)', '$$ (11-30)', '$$$ (31-60)', '$$$$ (61+)', 'Other']
    },
    reservationsNeeded: {
        type: Boolean,
        default: false
    },
    isDeliveryAvailable: {
        type: Boolean,
        default: false
    },
    menuUrl: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    photoUrls: [{
        type: String
    }],

},
{
    timestamps: true
}
);
const Restaurant = mongoose.model("Restaurant", restaurantsSchema);
module.exports = Restaurant;