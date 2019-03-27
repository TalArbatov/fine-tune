const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const PostSchema = mongoose.Schema({
    id: {type: Number, required: false},
    title: String,
    content: String,
    author: String,
    dateCreated: Date,
    comments: [{
        type: String
    }]
})

autoIncrement.initialize(mongoose.connection);
PostSchema.plugin(autoIncrement.plugin, 'id');

mongoose.model('Post', PostSchema);