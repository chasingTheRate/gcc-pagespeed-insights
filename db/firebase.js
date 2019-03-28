var admin = require("firebase-admin");
var serviceAccount = require('../gcc-pagespeed-firebase-firebase-adminsdk-qovuf-16a7849b42.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gcc-pagespeed-firebase.firebaseio.com"
});

// Get a database reference to our blog
var db = admin.database();
var ref = db.ref('performance');
var scoresRef = ref.child('scores');

function writePageSpeedPerformance(score) {
  var newScoreRef = scoresRef.push();
  const data = {
    score,
    time: new Date().getTime(),
  }
  
  return new Promise((resolve, reject) => {
    newScoreRef.set(data)
    .then(() => {
      resolve(data);
    })
    .catch(err => {
      resolve(err);
    })
  });
}

module.exports = {
  writePageSpeedPerformance,
}