//create mongoose schema for messages
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    message: {
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
});
//export model to use in index.js
const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;