// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7bz4vfqfAU9dxICXRjR3XNqedMjvLvo8",
    authDomain: "frontend-assignment-3f02c.firebaseapp.com",
    projectId: "frontend-assignment-3f02c",
    storageBucket: "frontend-assignment-3f02c.appspot.com",
    messagingSenderId: "684620640243",
    appId: "1:684620640243:web:f4d4155c6ee21905632c86",
    measurementId: "G-GP6XRNX12Z"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
