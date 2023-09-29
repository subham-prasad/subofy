// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARyxStb51eDo5Da1GenCgjsFpUEqArLTY",
  authDomain: "subofy-54000.firebaseapp.com",
  projectId: "subofy-54000",
  storageBucket: "subofy-54000.appspot.com",
  messagingSenderId: "366506757576",
  appId: "1:366506757576:web:c4cbb242f28eb1946404fd",
  measurementId: "G-3GWTCCFKZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();