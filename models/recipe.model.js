const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    recipeName: String,
    serving: Number,
    makingTime: Number,
    cookingTime: Number,
    ingredients: [{
        type: String
    }],
    directions: [{
        type: String
    }],

},
{
    timestamps: true
});
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;