const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    releaseYear: {
      type: Number,
      required: true,
    },
    genre: [{
        type: String,
        enum: [
        "Action",
        "Comedy",
        "Drama",
        "Romance",
        "Thriller",
        "Horror",
        "Sci-Fi",
        "Fantasy",
        "Adventure",
        "Documentary",
        "Mystery",
        "Animation",
        "Crime",
        "Family",
        "Sports",
        "Musical"
      ]
    }],
    director: {
      type: String,
      required: true,
    },
    actors: [{
        type: String
    }],
    language: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
      required: true,
    },
    plot: {
      type: String,
      required: true,
    },
    awards: {
      type: String,
    },
    posterUrl: {
      type: String, 
    },
    trailerUrl: {
      type: String, 
    },
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
