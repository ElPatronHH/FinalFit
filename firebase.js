// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpL7n22XbxH2GiAT3jPQCPrL8Ov5hjKzE",
  authDomain: "proyecto-final-moviles-7d749.firebaseapp.com",
  projectId: "proyecto-final-moviles-7d749",
  storageBucket: "proyecto-final-moviles-7d749.appspot.com",
  messagingSenderId: "266199863659",
  appId: "1:266199863659:web:21bea28e4acd0fc5a87c2e"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };