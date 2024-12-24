const mongoose = require("mongoose");

// 1. Create a mongoose model for the following employee card.

const employeesPassCardSchema = new mongoose.Schema({
    employeeId: String,
    profilePic: String,
    employeeName: String,
    department: String,
    date_of_birth: String,
    mail: String,
    tell_No: Number,
    address: String

});
const EmployeeCard = mongoose.model("EmployeeCard", employeesPassCardSchema);
module.exports = EmployeeCard;