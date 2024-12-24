const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    operatingSystem: {
        type: String,
        enum: ["iOS", "Android", "Windows", "Other"]
    },
    displaySize: String,
    storage: String,
    ram: String,
    cameraSpecs: {
        megapixelCount: Number,
        lensType: String,
        otherFeatures: [{ type: String }]
    },
    batteryCapacity: String,
    connectivity: [{
        type: String
    }],
    price: Number,
    colorsAvailable: [{
        type: String
    }],
    features: [{
        type: String
    }]
},
{
    timestamps: true
}
);
const SmartPhone = mongoose.model("SmartPhone", smartphoneSchema);
module.exports = SmartPhone;