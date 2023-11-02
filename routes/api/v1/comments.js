//require express
const express = require("express");
//create new router
const router = express.Router();

//import controller
const commentsController = require("../../../controllers/api/v1/comments");


router.get("/", commentsController.index);
router.get("/:id", commentsController.show);
router.get("/video/:url", commentsController.showByVideo);
router.post("/", commentsController.create);
router.put("/:id", commentsController.update);
router.delete("/:id", commentsController.destroy);

module.exports = router;