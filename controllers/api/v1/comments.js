//require the comments model
const Comment = require("../../../models/Comment");

const index = async (req, res) => {
    let comments;
    if(req.query.user) {
        try {
            let comments = await Comment.find({ username: req.query.user });
            if (comments.length > 0) {
                res.json({
                    "status": "success",
                    "comment": "GETTING comments for user " + req.query.user,
                    "data": {
                        "comment": comments
                    }
                });
            } else {
                res.json({
                    "status": "error",
                    "comment": "No comments found for user " + req.query.user
                });
            }
        } catch (err) {
            console.error(err);
            res.json({
                "status": "error",
                "comment": "An error occurred while getting the comments."
            });
        }
    }
    else {
        try{
            comments = await Comment.find({});
            res.json({
                status: "success",
                comment: "GETTING comments",
                data: [{
                    comments: comments
                }],
            });
        }
        catch(err){
            console.error(err);
            res.json({
                status: "error",
                comment: "An error occurred while getting the comments.",
            });
        }
    }
    
};

const create = async(req, res) => {
    let m = new Comment();
    m.text = req.body.text;
    m.username = req.body.username;
    m.videoUrl = req.body.videoUrl;
     try {
        let doc = await m.save();
        res.json({
            "status": "success",
            "comment": "comment sent",
            "data": {
                "comment": doc
            }
        });
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "Could not save comment"
        });
    }

};
const createVideo = async (req, res) => {
    let m = new Video();
    m.title = req.body.title;
    m.username = req.body.username;
    m.videoUrl = req.body.videoUrl;
    try {
        let doc = await m.save();
        res.json({
            "status": "success",
            "comment": "video posted",
            "data": {
                "comment": doc
            }
        });
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "Could not save video"
        });
    }
};
const show = async (req, res) => {
    try {
        let comment = await Comment.findById(req.params.id);
        if (comment) {
            res.json({
                "status": "success",
                "comment": "GETTING comment with ID " + req.params.id,
                "data": {
                    "comment": comment
                }
            });
        } else {
            res.json({
                "status": "error",
                "comment": "Comment with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "An error occurred while retrieving the comment."
        });
    };
}

const showByVideo = async (req, res) => {
    try {
        let comments = await Comment.find({ videoUrl: req.params.url });
        if (comments.length > 0) {
            res.json({
                "status": "success",
                "comment": "GETTING comments for video " + req.params.url,
                "data": {
                    "comment": comments
                }
            });
        }
        else {
            res.json({
                "status": "success",
                "comment": "No comments found for video " + req.params.url,
                "data": {
                    "comment": "There are no comments yet."
                }
            });
        }
    }
    catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "An error occurred while retrieving the comments."
        });
    };
}
const update = async (req, res) => {
    try {
        let comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (comments) {
            res.json({
                "status": "success",
                "comment": "UPDATED comment with ID " + req.params.id,
                "data": {
                    "comment": comment
                }
            });
        } else {
            res.json({
                "status": "error",
                "comment": "Comment with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "An error occurred while updating the comment."
        });
    }
};
const destroy = async (req, res) => {
    try {
        let comment = await Comment.findByIdAndDelete(req.params.id);
        console.log(comment);
        if (comment) {
            res.json({
                "status": "success",
                "comment": "DELETED comment with ID " + req.params.id
            });
        } else {
            res.json({
                "status": "error",
                "comment": "Comment with ID " + req.params.id + " not found."
            });
        }
    } catch (err) {
        console.error(err);
        res.json({
            "status": "error",
            "comment": "An error occurred while deleting the comment."
        });
    }
};


module.exports.index = index;
module.exports.create = create;
module.exports.show = show;
module.exports.showByVideo = showByVideo;
module.exports.update = update;
module.exports.destroy = destroy;
module.exports.createVideo = createVideo;