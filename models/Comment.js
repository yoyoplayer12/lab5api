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
    videoUrl: {
        type: String,
        required: true,
    },
});
const VideoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
//export model to use in index.js
const Comment = mongoose.model("Comment", CommentSchema);
const Video = mongoose.model("Video", VideoSchema);
module.exports = Comment;
module.exports = Video;