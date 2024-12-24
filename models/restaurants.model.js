const mongoose = require("mongoose");

// 6. Create a model for restaurants. Design the model with the following fields.
const restaurantsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cuisine: [{
        type: String,
        enum: ["Italian", "Mexican", "Chinese", "Indian", "American", "French","Japanese", "Mediterranean", "Thai", "Vegetarian", "Vegan", "Other"]
    }],
    location: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    phone: String,
    website: String,
    openingYear: Number,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    specialDishes: [{
        type: String
    }],
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