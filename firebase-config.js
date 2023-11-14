import {getFirestore} from "@firebase/firestore";
import { initializeApp } from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyDpL7n22XbxH2GiAT3jPQCPrL8Ov5hjKzE",
  authDomain: "proyecto-final-moviles-7d749.firebaseapp.com",
  projectId: "proyecto-final-moviles-7d749",
  storageBucket: "proyecto-final-moviles-7d749.appspot.com",
  messagingSenderId: "266199863659",
  appId: "1:266199863659:web:21bea28e4acd0fc5a87c2e"
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);