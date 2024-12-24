const mongoose = require("mongoose");

// 5. Create a model for a book. The model includes the following fields:
const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishedYear: {
        type: Number,
        required: true
    },
    genre: [{
        type: String,
        enum: ["Fiction", "Fiction", "Mystery", "Thriller", "Science Fiction", "Fantasy", "Romance", "Historical", "Biography", "Self-help", "Other"]
    }],
    language: {
        type: String,
        required: true
    },
    country: {
        type: String,
        default: "United States",
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    summary: String,
    awards: [{type: String}],
    coverImageUrl: String,
    purchaseUrl: String,
},
{
    timestamps: true
}
);
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;