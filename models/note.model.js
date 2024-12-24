const mongoose = require("mongoose");

// 4. Create a Mongoose model for a Note with the following attributes.

const noteSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: {
        type: String,
        enum: ["Personal", "Work", "Study", "Ideas", "Journal", "Other"],
    },
    tags: [{
        type: String
    }]
},
{
    timestamps: true
}
);
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
