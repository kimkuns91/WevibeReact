const express = require('express');

const router = express.Router();

const requirementsRouter = require('./requirements.routes');

router.use('/requirements', requirementsRouter);

module.exports = router;