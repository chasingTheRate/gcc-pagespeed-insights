require('dotenv').config();
const axios = require('axios');
const db = require('../db/firebase');

const key = process.env.PAGESPEED_API_KEY;
const targetUrl = 'https://www.blinds.com/?usedtm=false';
const baseUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';
const url = `${baseUrl}?strategy=mobile&url=${targetUrl}&key=${key}`;

const createPageSpeedPerformanceScore = async function() {
  return axios.get(url)
  .then(res => {
    return db.writePageSpeedPerformance(res.data.lighthouseResult.categories.performance.score)
  })
  .catch(err => {
    return err;
  });
}

module.exports = {
  createPageSpeedPerformanceScore,
}