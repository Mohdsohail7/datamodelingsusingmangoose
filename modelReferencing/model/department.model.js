const mongoose = require("mongoose");

const depSchema = new mongoose.Schema({
    name: String,
    location: String
});
const Department = mongoose.model("Department", depSchema);
module.exports = Department;