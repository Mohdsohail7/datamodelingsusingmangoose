const mongoose = require("mongoose");

// 3. Create a Mongoose schema for a User Profile with the following attributes:
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: String,
    lastName: String,
    birthdate: Date,
    isActive: {
        type:Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    profilePictureUrl: String,

},
{
    timestamps: true
}
);
const User = mongoose.model("User", userSchema);
module.exports = User;
