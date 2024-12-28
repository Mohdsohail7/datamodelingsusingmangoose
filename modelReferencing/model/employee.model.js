const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department"}
});
const Employee = mongoose.model("Employee", empSchema);
module.exports = Employee;