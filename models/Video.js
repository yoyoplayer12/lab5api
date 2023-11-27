//create mongoose schema for comments
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
const Video = mongoose.model("Video", VideoSchema, "videos");
module.exports = Video;