const { dbConnect } = require("./db/db.connect");
const fs = require("fs");
const Movie = require("./models/movie.model");
const User = require("./models/userprofile.model");
const Book = require("./models/book.model");

dbConnect();

const jsonData = fs.readFileSync("movies.json", "utf-8");
const moviesData = JSON.parse(jsonData);

const userJsonData = fs.readFileSync("users.json", "utf-8");
const usersData = JSON.parse(userJsonData);

const bookJsonData = fs.readFileSync("books.json", "utf-8");
const booksData = JSON.parse(bookJsonData);

async function seedData() {
    try {
        for (const movieData of moviesData) {
            const newMovie = new Movie({
                title: movieData.title,
                releaseYear: movieData.releaseYear,
                genre: movieData.genre,
                director: movieData.director,
                actors: movieData.actors,
                language: movieData.language,
                country: movieData.country,
                rating: movieData.rating,
                plot: movieData.plot,
                awards: movieData.awards,
                posterUrl: movieData.posterUrl,
                trailerUrl: movieData.trailerUrl,

            });
            await newMovie.save();
        }
    } catch (error) {
        console.log("Error from seeding data in database", error);
    }
}

// seedData();

async function userProfileDataSeed() {
    try {
        for (const userData of usersData) {
            const newUser = new User({
                fullName: userData.fullName,
                username: userData.username,
                bio: userData.bio,
                profilePicUrl: userData.profilePicUrl,
                followingCount: userData.followingCount,
                followerCount: userData.followerCount,
                companyName: userData.companyName,
                location: userData.location,
                portfolioUrl: userData.portfolioUrl

            });
            await newUser.save();
            
        }
    } catch (error) {
        console.log("Error from seeding data in database", error);
    }
}
// userProfileDataSeed();


async function bookDataSeed() {
    try {
        for (const bookData of booksData) {
            const newBook = new Book({
                title: bookData.title,
                author: bookData.author,
                publishedYear: bookData.publishedYear,
                genre: bookData.genre,
                language: bookData.language,
                country: bookData.country,
                rating: bookData.rating,
                summary: bookData.summary,
                coverImageUrl: bookData.coverImageUrl

            });
            // console.log(newBook.title);
            await newBook.save();
            
        }
    } catch (error) {
        console.log("Error from seeding data in database", error);
    }
}
bookDataSeed();
