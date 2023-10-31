//require the messages model
const Message = require("../../../models/Message");

const index = async (req, res) => {
    let messages;
    if(req.query.user) {
        try {
            let messages = await Message.find({ username: req.query.user });
            if (messages.length > 0) {
                res.json({
                    "status": "success",
                    "message": "GETTING messages for user " + req.query.user,
                    "data": {
                        "messages": messages
                    }
                });
            } else {
                res.json({
                    "status": "error",
                    "message": "No messages found for user " + req.query.user
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                "status": "error",
                "message": "An error occurred while getting the messages."
            });
        }
    }
    else {
        try{
            messages = await Message.find({});
            res.json({
                status: "success",
                message: "GETTING messages",
                data: [{
                    messages: messages
                }],
            });
        }
        catch(err){
            console.error(err);
            res.json({
                status: "error",
                message: "An error occurred while getting the messages.",
            });
        }
    }
    
};

const create = async(req, res) => {
    let m = new Message();
    m.message = req.body.message;
    m.username = req.body.username;
     try {
        let doc = await m.save();
        res.json({
            "status": "success",
            "message": "Message sent",
            "data": {
                "message": doc
            }
        });
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "Could not save message"
        });
    }

};
const show = async (req, res) => {
    try {
        let message = await Message.findById(req.params.id);
        if (message) {
            res.json({
                "status": "success",
                "message": "GETTING message with ID " + req.params.id,
                "data": {
                    "message": message
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Message with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while retrieving the message."
        });
    };
}
const update = async (req, res) => {
    try {
        let message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (message) {
            res.json({
                "status": "success",
                "message": "UPDATED message with ID " + req.params.id,
                "data": {
                    "message": message
                }
            });
        } else {
            res.json({
                "status": "error",
                "message": "Message with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while updating the message."
        });
    }
};
const destroy = async (req, res) => {
    try {
        let message = await Message.findByIdAndDelete(req.params.id);
        console.log(message);
        if (message) {
            res.json({
                "status": "success",
                "message": "DELETED message with ID " + req.params.id
            });
        } else {
            res.json({
                "status": "error",
                "message": "Message with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "message": "An error occurred while deleting the message."
        });
    }
};


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.update = update;
module.exports.destroy = destroy;