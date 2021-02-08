
const dotenv = require('dotenv')

dotenv.config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "netflix-build-a0a0a.firebaseapp.com",
    projectId: "netflix-build-a0a0a",
    storageBucket: "netflix-build-a0a0a.appspot.com",
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };