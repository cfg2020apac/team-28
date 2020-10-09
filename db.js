const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '',
    authDomain: 'cfg-team28.firebaseapp.com',
    projectId: 'cfg-team28'
});

module.exports = {
    db: firebase.firestore()
};
