const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: {type: Number, required: true},
    title: String,
    content: String,
    author: String,
    dateCreated: Date,
    comments: [{
        type: String
    }]
})

mongoose.model('Post', PostSchema);