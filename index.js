const express = require("express");
const app = express();

const { dbConnect } = require("./db/db.connect");
// const fs = require("fs");
const Movie = require("./models/movie.model");
const User = require("./models/userprofile.model");
const Book = require("./models/book.model");
const Restaurant = require("./models/restaurants.model");
const Hotel = require("./models/hotel.model");

dbConnect();
app.use(express.json());
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

async function createRestaurant(newRestaurant) {
    try {
        const restaurant = new Restaurant(newRestaurant);
        const savedRestaurant = await restaurant.save();
        // console.log(savedRestaurant);
        return savedRestaurant;
    } catch (error) {
        throw error;
    }
}
 app.post("/restaurants", async (req, res) => {
    try {
        const newRestaurantData = req.body;
        const restaurant = await createRestaurant(newRestaurantData);
        return res.status(201).json({message: "New Restaurant Created.", restaurant: restaurant});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error.", error: error});
    }
 });

//  const newHotel = {
//       name: 'Sunset Resort',
//       category: 'Resort',
//       location: '12 Main Road, Anytown',
//       rating: 4.0,
//       website: 'https://sunset-example.com',
//       phoneNumber: '+1299655890',
//       checkInTime: '2:00 PM',
//       checkOutTime: '11:00 AM',
//       amenities: ['Room Service', 'Horse riding', 'Boating', 'Kids Play Area', 'Bar'],
//       priceRange: '$$$$ (61+)',
//       reservationsNeeded: true,
//       isParkingAvailable: true,
//       isWifiAvailable: true,
//       isPoolAvailable: true,
//       isSpaAvailable: true,
//       isRestaurantAvailable: true,
//       photos: ['https://example.com/hotel2-photo1.jpg', 'https://example.com/hotel2-photo2.jpg'],
//     };
  async function createHotel(newHotel) {
    try {
        const hotel = new Hotel(newHotel);
        const savedHotel = await hotel.save();
        // console.log(savedHotel);
        return savedHotel;

    } catch (error) {
        throw error;
    }
  }
  app.post("/hotels", async (req, res) => {
    try {
        const newHotelData = req.body;
        const hotel = await createHotel(newHotelData);
        return res.status(201).json({message: "New Hotel Created.", hotel: hotel});
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error.", error: error});
    }
 });

  // get all restaurants data from database
  async function readAllRestaurantsData() {
    try {
        const allRestaurants = await Restaurant.find();
        // console.log(allRestaurants);
        return allRestaurants;
    } catch (error) {
        console.error(error);
    }
  }
  app.get("/restaurants", async (req, res) => {
    try {
        const restaurants = await readAllRestaurantsData();
        if (!restaurants) {
            return res.status(404).json({ message: "restaurants not found."});
        }
        return res.status(200).json({ restaurants: restaurants });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  });

  async function  restaurantByName(restaurantName) {
    try {
        const restaurant = await Restaurant.find({ name: restaurantName});
        // console.log(restaurant);
        return restaurant;
    } catch (error) {
        console.error(error);
    }
  }
  app.get("/restaurants/:restaurantName", async (req, res) => {
    try {
        const restName = req.params.restaurantName;
        const result = await restaurantByName(restName);
        if (!result) {
            return res.status(404).json({ message: "restaurant not found by this name."});
        }
        return res.status(200).json({ restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

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
        // console.log(restaurant);
        return restaurant;
    } catch (error) {
        console.error(error);
    }
  }
  app.get("/restaurants/directory/:phoneNumber", async (req, res) => {
    try {
        const number = req.params.phoneNumber;
        const result = await restaurantByNumber(number);
        if (!result) {
            return res.status(404).json({ message: "restaurant not found by this number."});
        }
        return res.status(200).json({ restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

  async function restaurantByCuisine(cuisineName) {
    try {
        const restaurant = await Restaurant.find({ cuisine: cuisineName });
        // console.log(restaurant);
        return restaurant;
    } catch (error) {
        console.error(error);
    }
  }
  app.get("/restaurants/cuisine/:cuisineName", async (req, res) => {
    try {
        const cuisine = req.params.cuisineName;
        const result = await restaurantByCuisine(cuisine);
        if (!result) {
            return res.status(404).json({ message: "Restaurant not found by cuisine."});
        }
        return res.status(200).json({ restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  });

  async function restaurantByLocation(location) {
    try {
        const restaurant = await Restaurant.find( { location: location });
        return restaurant;
    } catch (error) {
        throw error;
    }
  }
  app.get("/restaurants/location/:restaurantLocation", async(req, res) => {
    try {
        const location = req.params.restaurantLocation;
        const result = await restaurantByLocation(location);
        if (!result) {
            return res.status(404).json({ message: "restaurant not found by this location."});
        }
        return res.status(200).json({ restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

  // hotel
  async function readAllHotels() {
    try {
        const hotels = await Hotel.find();
        return hotels;
    } catch (error) {
        console.error(error);
    }
  }
  app.get("/hotels", async (req, res) => {
    try {
        const hotels = await readAllHotels();
        if (!hotels) {
            return res.status(404).json({ message: "hotels not found."});
        }
        return res.status(200).json({ hotels: hotels });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  });

const hotelByName = async (hotelName) => {
    try {
        const hotel = await Hotel.find({ name: hotelName });
        return hotel
    } catch (error) {
        console.error(error);
    }
}
app.get("/hotels/:hotelName", async (req, res) => {
    try {
        const hotelName = req.params.hotelName;
        const result = await hotelByName(hotelName);
        if (!result) {
            return res.status(404).json({ message: "hotel not found by this name."});
        }
        return res.status(200).json({ hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })


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
        // console.log(hotel);
        return hotel;
    } catch (error) {
        console.error(error);
    }
}
app.get("/hotels/category/:hotelCategory", async (req, res) => {
    try {
        const category = req.params.hotelCategory;
        const result = await hotelByCategory(category);
        if (!result) {
            return res.status(404).json({ message: "hotel not found by this category."});
        }
        return res.status(200).json({ hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

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
        // console.log(hotel);
        return hotel;
    } catch (error) {
        console.error(error);
    }
}
app.get("/hotels/rating/:hotelRating", async (req, res) => {
    try {
        const rating = req.params.hotelRating;
        const result = await hotelByRating(rating);
        if (!result) {
            return res.status(404).json({ message: "hotel not found by this rating."});
        }
        return res.status(200).json({ hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

async function hotelByPhoneNumber(number) {
    try {
        const hotel = await Hotel.find({ phoneNumber: number });
        // console.log(hotel);
        return hotel;
    } catch (error) {
        console.error(error);
    }
}
app.get("/hotels/directory/:phoneNumber", async (req, res) => {
    try {
        const number = req.params.phoneNumber;
        const result = await hotelByPhoneNumber(number);
        if (!result) {
            return res.status(404).json({ message: "hotel not found by this number."});
        }
        return res.status(200).json({ hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
  })

// update data
// update resturant by its id and update the rating
async function upatedRestarantById(restId, dataToUpdate) {
    try {
        const updatedRestaurantDetails = await Restaurant.findByIdAndUpdate(restId, {cuisine: dataToUpdate }, { new: true });
        // console.log(updatedRestaurantDetails);
        return updatedRestaurantDetails;
    } catch (error) {
        console.log("Error in updating data");
    }
}
app.post("/restaurants/update-cuisine", async (req, res) => {
    try {
        const { id, cuisine } = req.body;
        const result = await upatedRestarantById(id, cuisine);
        if (!result) {
            return res.status(404).json({ message: "cuisine not updated."});
        }
        return res.status(200).json({ messgae: "cuisine updated successfully.", restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
})

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

async function upatedHotelRatingById(hotelId, dataToUpdate) {
    try {
        const updatedHotelDetails = await Hotel.findByIdAndUpdate(hotelId, {rating: dataToUpdate }, { new: true });
        // console.log(updatedRestaurantDetails);
        return updatedHotelDetails;
    } catch (error) {
        console.log("Error in updating data");
    }
}
app.post("/hotels/update-rating", async (req, res) => {
    try {
        const { id, rating } = req.body;
        const result = await upatedHotelRatingById(id, rating);
        if (!result) {
            return res.status(404).json({ message: "rating not updated."});
        }
        return res.status(200).json({ messgae: "rating updated successfully.", hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
})


// delete restaurant by id
async function deleteRestaurantById(restId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restId);
        // console.log("Restaurant was deleted.", deletedRestaurant);
        return deletedRestaurant;
    } catch (error) {
        console.log("Error in deleting data.", error);
    }
}
app.post("/restaurants/:restaurantId", async (req, res) => {
    try {
        const restId = req.params.restaurantId;
        const result = await deleteRestaurantById(restId);
        if (!result){
            return res.status(404).json({ message: "resturant could not deleted."});
        }
        return res.status(200).json({ message: "Restaurant deleted. successfully.", restaurant: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
})

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
        // console.log("Hotel was deleted.", deletedHotel);
        return deletedHotel;
    } catch (error) {
        console.log("Error in deleting hotel", error);
    }
}
app.post("/hotels/:hotelId", async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        const result = await deleteHotelById(hotelId);
        if (!result){
            return res.status(404).json({ message: "hotel could not deleted."});
        }
        return res.status(200).json({ message: "Hotel deleted. successfully.", hotel: result });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error.", error: error });
    }
})


// hotel delete by phoneNumber
async function deleteHotelByPhoneNumber(phoneNumber) {
    try {
        const deletedHotel = await Hotel.findOneAndDelete({ phoneNumber: phoneNumber });
        console.log("Hotel was deleted.", deletedHotel);
    } catch (error) {
        console.log("Error in deleting  hotel.", error);
    }
}
// deleteHotelByPhoneNumber("+1234555890");

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port is ${PORT}`);
});



