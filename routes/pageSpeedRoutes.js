const express = require('express');
const router = express.Router();
const pageSpeedService = require('../services/pageSpeedService'); 

router.post('/createPageSpeedPerformanceScore', pageSpeedService.createPageSpeedPerformanceScore);

module.exports = router;