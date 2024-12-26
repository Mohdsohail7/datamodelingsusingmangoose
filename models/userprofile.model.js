const mongoose = require("mongoose");

// 3. Create a Mongoose schema for a User Profile with the following attributes:
const userSchema = new mongoose.Schema({
    fullName: String,
    username: {
        type: String,
        required: true
    },
    bio: String,
    profilePicUrl: String,
    followingCount: Number,
    followerCount: Number,
    companyName: String,
    location: String,
    portfolioUrl: String

},
{
    timestamps: true
}
);
const User = mongoose.model("User", userSchema);
module.exports = User;
