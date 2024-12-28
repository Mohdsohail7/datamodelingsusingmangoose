const { dbConnect } = require("../db/db.connect");
const Author = require("./model/author.model");
const newBook = require("./model/book.model");
const Department = require("./model/department.model");

dbConnect();

const authorData = {
    name: "Mohd Sohail",
    email: "Sohail@gmail.com"
}

const bookData = {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    author: "676ff667688e3d2d84c2c719"
}

const addAuthor = async () => {
    try {
        const newAuthor = new Author(authorData);
        await newAuthor.save();
        console.log("New Auhtor Added Successfully.", newAuthor);
    } catch (error) {
        console.log("Error ", error);
    }
}
// addAuthor();

const addBook = async () => {
    try {
        const newBookAdd = new newBook(bookData);
        await newBookAdd.save();
        console.log("new Book added Successfully.", newBookAdd);
    } catch (error) {
        console.log("Error ", error);
    }
}
// addBook();

const getAllBooks = async () => {
    try {
        const result = await newBook.find().populate("author");
        console.log("New Books data with user", result);
    } catch (error) {
        console.log("Error fetching book data", error);
    }
}
// getAllBooks();

const addDeptData = {
    name: "backend developer",
    location: "Mumbai"
}

async function addDept() {
    try {
        const newDept = new Department(addDeptData);
        await newDept.save();
        console.log("New Department Added.", newDept);
    } catch (error) {
        console.log("Error in adding department.", error);
    }
}
// addDept();

const empData = {
    name: "Sohail",
    email: "sohail@gmail.com",
    department: "677002c27f7b0d3645ba1a8c"
}

async function addEmp() {
    try {
        const newEmp = new Employee(empData);
        await newEmp.save();
        console.log("New Employee Added.", newEmp);
    } catch (error) {
        console.log("Error in adding employee.", error);
    }
}
// addEmp();

// feth all emp
async function getAllEmp() {
    try {
        const result = await Employee.find().populate("department");
        console.log("Employee data with department.", result);
    } catch (error) {
        console.log("Error in fetching employee data.", error);
    }
}
// getAllEmp();