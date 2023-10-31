//create mongoose schema for comments
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    commentId: {
        type: Number,
        required: true,
    },
});
//export model to use in index.js
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;