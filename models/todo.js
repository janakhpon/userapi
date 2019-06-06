const mongoose = require("mongoose");
const extodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required : "Name should be presented"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', extodoSchema);
module.exports = Todo;
