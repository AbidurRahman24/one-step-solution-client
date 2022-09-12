// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7KPG5O5P95uev0mRWn8IYrBTYw0Siokw",
  authDomain: "one-step-solution-e1d86.firebaseapp.com",
  projectId: "one-step-solution-e1d86",
  storageBucket: "one-step-solution-e1d86.appspot.com",
  messagingSenderId: "744099451621",
  appId: "1:744099451621:web:5539f66cccb1411f6a3a0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;