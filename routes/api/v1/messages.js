//require express
const express = require("express");
//create new router
const router = express.Router();

//import controller
const messagesController = require("../../../controllers/api/v1/messages");


router.get("/", messagesController.index);
router.get("/:id", messagesController.show);
router.post("/", messagesController.create);
router.put("/:id", messagesController.update);
router.delete("/:id", messagesController.destroy);

module.exports = router;