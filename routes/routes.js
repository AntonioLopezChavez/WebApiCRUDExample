const express = require('express');
const router = express.Router()

router.use('/entregables', require('./entregables.js'));

module.exports = router;