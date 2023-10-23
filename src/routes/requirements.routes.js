const express = require('express');

const router = express.Router();

const controller = require("../controllers/requirements.controller");

router.post("/", controller.requirementsCompleted);

module.exports = router;