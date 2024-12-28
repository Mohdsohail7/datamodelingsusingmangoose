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
      name: 'Sunset Resort',
      category: 'Resort',
      location: '12 Main Road, Anytown',
      rating: 4.0,
      website: 'https://sunset-example.com',
      phoneNumber: '+1299655890',
      checkInTime: '2:00 PM',
      checkOutTime: '11:00 AM',
      amenities: ['Room Service', 'Horse riding', 'Boating', 'Kids Play Area', 'Bar'],
      priceRange: '$$$$ (61+)',
      reservationsNeeded: true,
      isParkingAvailable: true,
      isWifiAvailable: true,
      isPoolAvailable: true,
      isSpaAvailable: true,
      isRestaurantAvailable: true,
      photos: ['https://example.com/hotel2-photo1.jpg', 'https://example.com/hotel2-photo2.jpg'],
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
 //  createHotel();

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
  // restaurantByCuisine("Italian");

  // hotel
  async function readAllHotels() {
    try {
        const hotels = await Hotel.find();
        console.log(hotels);
    } catch (error) {
        console.error(error);
    }
  }
// readAllHotels();

const hotelByName = async (hotelName) => {
    try {
        const hotel = await Hotel.find({ name: hotelName });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByName("Lake View");


const hotelByParkingSpace = async (parking) => {
    try {
        const hotel = await Hotel.find({ isParkingAvailable: parking });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByParkingSpace("true");

async function hotelWithRestaurants(rest) {
    try {
        const hotel = await Hotel.find({ isRestaurantAvailable: rest});
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelWithRestaurants("true");

async function hotelByCategory(category) {
    try {
        const hotel = await Hotel.find({ category: category });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByCategory("Mid-Range");

async function hotelByPrice(priceRange) {
    try {
        const hotel = await Hotel.find({ priceRange: priceRange });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByPrice('$$$$ (61+)');


async function hotelByRating(rating) {
    try {
        const hotel = await Hotel.find({ rating: rating });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByRating("4.0");

async function hotelByPhoneNumber(number) {
    try {
        const hotel = await Hotel.find({ phoneNumber: number });
        console.log(hotel);
    } catch (error) {
        console.error(error);
    }
}
// hotelByPhoneNumber('+1299655890');

// update data
// update resturant by its id and update the rating
async function upatedRestarantRating(restId, dataToUpdate) {
    try {
        const updatedRestaurantDetails = await Restaurant.findByIdAndUpdate(restId, dataToUpdate, { new: true });
        console.log(updatedRestaurantDetails);
    } catch (error) {
        console.log("Error in updating data");
    }
}
// upatedRestarantRating("676ea07eff82fdef11ee5bcc", { rating: "4.1"});

async function updateRestaurantName(restName, dataToUpdate) {
    try {
        const updateRestaurantDetail = await Restaurant.findOneAndUpdate({ name: restName }, dataToUpdate, { new: true });
        console.log(updateRestaurantDetail);
    } catch (error) {
        console.log("Error in updating data");
    }
}
// updateRestaurantName("Somi", { name: "Som Sarovar" });


async function updateRestaurantDelivery(phoneNumber, dataToUpdate) {
    try {
        const updateRestaurantDetail = await Restaurant.findOneAndUpdate({ phone: phoneNumber }, dataToUpdate, { new: true });
        console.log(updateRestaurantDetail)
    } catch (error) {
        console.log("Error in updating data");
    }
}
// updateRestaurantDelivery("+1288997392", { isDeliveryAvailable: true });


async function hotelCheckOutTimeUpdate(hotelId, dataToUpdate) {
    try {
        const updateHotelDetail = await Hotel.findByIdAndUpdate(hotelId, dataToUpdate, { new: true });
        console.log(updateHotelDetail);
    } catch (error) {
        console.log("Error in updating data");
    }
}
// hotelCheckOutTimeUpdate("676eb009600db6696123ce5f", { checkOutTime: "11 AM"});


async function updateHotelRating(hotelName, dataToUpdate) {
    try {
        const updateHotelDetail = await Hotel.findOneAndUpdate({ name: hotelName }, dataToUpdate, { new: true})
        console.log(updateHotelDetail);
    } catch (error) {
        console.log("Error in updating data");
    }
}
// updateHotelRating("Sunset Resort", { rating: "4.2" });

async function updateHotelNumber(hotelNumber, dataToUpdate) {
    try {
        const updateHotelDetail = await Hotel.findOneAndUpdate({ phoneNumber: hotelNumber }, dataToUpdate, { new: true });
        console.log(updateHotelDetail);
    } catch (error) {
        console.log("Error in updating data");
    }
}
// updateHotelNumber("+1299655890", { phoneNumber: "+1997687392" });


// delete restaurant by id
async function deleteRestaurantById(restId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restId);
        console.log("Restaurant was deleted.", deletedRestaurant);
    } catch (error) {
        console.log("Error in deleting data.", error);
    }
}
// deleteRestaurantById("676d802998359c2cc0b43149");

// restaurant delete by name
async function deleteRestaurantByName(restName) {
    try {
        const deletedRestaurant = await Restaurant.findOneAndDelete({ name: restName });
        console.log("Restaurant was deleted.", deletedRestaurant);
    } catch (error) {
        console.log("Error in deleting restaurant.", error);
    }
}
// deleteRestaurantByName("Yo China");


// hotel delete by id
async function deleteHotelById(hotelId) {
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(hotelId);
        console.log("Hotel was deleted.", deletedHotel);
    } catch (error) {
        console.log("Error in deleting hotel", error);
    }
}
// deleteHotelById("676d874b92a3e9ab47400a92");


// hotel delete by phoneNumber
async function deleteHotelByPhoneNumber(phoneNumber) {
    try {
        const deletedHotel = await Hotel.findOneAndDelete({ phoneNumber: phoneNumber });
        console.log("Hotel was deleted.", deletedHotel);
    } catch (error) {
        console.log("Error in deleting  hotel.", error);
    }
}
deleteHotelByPhoneNumber("+1234555890");



