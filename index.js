const { dbConnect } = require("./db/db.connect");
// const fs = require("fs");
const Movie = require("./models/movie.model");
const User = require("./models/userprofile.model");
const Book = require("./models/book.model");
const Restaurant = require("./models/restaurants.model");
const Hotel = require("./models/hotel.model");

dbConnect();

// const jsonData = fs.readFileSync("movies.json", "utf-8");
// const moviesData = JSON.parse(jsonData);

// const userJsonData = fs.readFileSync("users.json", "utf-8");
// const usersData = JSON.parse(userJsonData);

// const bookJsonData = fs.readFileSync("books.json", "utf-8");
// const booksData = JSON.parse(bookJsonData);

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
// bookDataSeed();

const newRestaurant = {
    name: 'Yo China',
    cuisine: ['Chinese', 'Italian'],
    location: 'MG Road, Bangalore',
    rating: 3.9,
    website: 'https://yo-example.com',
    phone: '+1288997392',
    openHours: 'Tue-Sun: 10:00 AM - 11:00 PM',
    priceRange: '$$$ (31-60)',
    reservationsNeeded: true,
    isDeliveryAvailable: false,
    menuUrl: 'https://yo-example.com/menu',
    photos: ['https://example.com/yo-photo1.jpg', 'https://example.com/yo-photo2.jpg', 'https://example.com/yo-photo3.jpg']

};

async function createRestaurant() {
    try {
        const restaurant = new Restaurant(newRestaurant);
        const savedRestaurant = await restaurant.save();
        console.log(savedRestaurant);
    } catch (error) {
        throw error;
    }
}
 // createRestaurant();

const newHotel = {
    name: 'New Hotel',
    category: 'Mid-Range',
    location: '123 Main Street, Frazer Town',
    rating: 4.0,
    website: 'https://hotel-example.com',
    phoneNumber: '+1234567890',
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    amenities: ['Laundry', 'Room Service'],
    priceRange: '$$$ (31-60)',
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: true,
    photos: ['https://example.com/hotel-photo1.jpg', 'https://example.com/hotel-photo2.jpg'],
  };
  async function createHotel() {
    try {
        const hotel = new Hotel(newHotel);
        const savedHotel = await hotel.save();
        console.log(savedHotel);

    } catch (error) {
        throw error;
    }
  }
  // createHotel();

  // get all restaurants data from database
  async function readAllRestaurantsData() {
    try {
        const allRestaurants = await Restaurant.find();
        console.log(allRestaurants);
    } catch (error) {
        console.error(error);
    }
  }
  // readAllRestaurantsData();

  async function  restaurantByName(restaurantName) {
    try {
        const restaurant = await Restaurant.find({ name: restaurantName});
        console.log(restaurant);
    } catch (error) {
        console.error(error);
    }
  }
  // restaurantByName("Yo China");

  async function restaurantByReservations(reservations) {
    try {
        const restaurant = await Restaurant.find({ reservationsNeeded: reservations });
        console.log(restaurant);
    } catch (error) {
        console.error(error);
    }
  }
 // restaurantByReservations("true");

 async function restaurantByDeliveryOffers(delivery) {
    try {
        const restaurant = await Restaurant.find({ isDeliveryAvailable: delivery });
        console.log(restaurant);
    } catch (error) {
        console.error(error);
    }
  }
 // restaurantByDeliveryOffers("true");

 async function restaurantByNumber(number) {
    try {
        const restaurant = await Restaurant.find({ phone: number });
        console.log(restaurant);
    } catch (error) {
        console.error(error);
    }
  }
  // restaurantByNumber("+1288997392");

  async function restaurantByCuisine(cuisineName) {
    try {
        const restaurant = await Restaurant.find({ cuisine: cuisineName });
        console.log(restaurant);
    } catch (error) {
        console.error(error);
    }
  }
  restaurantByCuisine("Italian");


