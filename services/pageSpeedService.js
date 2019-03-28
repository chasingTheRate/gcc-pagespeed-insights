const debug = require('debug')('pageSpeedService');
const pageSpeedController = require('../controllers/pageSpeedController');

const createPageSpeedPerformanceScore = (req, res) => {
  debug('getPerformanceScore');
  pageSpeedController.createPageSpeedPerformanceScore()
  .then((data) => {
    res.status(200).json(data);
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
}

module.exports = {
  createPageSpeedPerformanceScore,
}