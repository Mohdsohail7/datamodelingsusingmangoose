const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect() {
    const mongoUri = process.env.MONGODBURL;
    await mongoose.connect(mongoUri).then(() => {
        console.log("Database Connected Successfully.");
    }).catch((error) => console.log("Database Connection failed.",error));
}

module.exports = { dbConnect };
