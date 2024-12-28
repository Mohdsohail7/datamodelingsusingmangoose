const mongoose = require("mongoose");

const newbookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" }, // Refers to the Author model
});

const newBook = mongoose.model("newBook", newbookSchema);

module.exports = newBook;
