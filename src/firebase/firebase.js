import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp-jCcnh2sf2VnvA7art8TJgICDT2q5CQ",
  authDomain: "portfolio-entertainment-app.firebaseapp.com",
  projectId: "portfolio-entertainment-app",
  storageBucket: "portfolio-entertainment-app.appspot.com",
  messagingSenderId: "361354408301",
  appId: "1:361354408301:web:517d34c65e965b1e622a64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export {
  auth, db
}