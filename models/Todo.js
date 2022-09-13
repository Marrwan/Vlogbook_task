const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo : {
        type : String,
        required : [true, "A todo must have a name"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'A Todo must belong to a user'],
    },
});

const Todo = mongoose.model('Todo', todoSchema);