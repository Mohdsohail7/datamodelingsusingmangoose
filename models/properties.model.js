const mongoose = require("mongoose");

// 6. Create a Mongoose schema for stay properties with the following attributes:
const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    location: String,
    pricePerNight: Number,
    capacity: Number,
    isPetFriendly: {
        type: Boolean,
        default: false
    },
    hasWiFi: {
        type: Boolean,
        default: false
    },
    hasParking: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },

},
{
    timestamps: true
});
const Property = mongoose.model("Property", propertySchema);
module.exports = Property;