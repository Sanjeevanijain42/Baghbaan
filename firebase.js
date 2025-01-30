// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBebUbxST4r2oa2mMfHXsC7l5T8oY4unfw",
    authDomain: "baghbaan-4aad6.firebaseapp.com",
    projectId: "baghbaan-4aad6",
    storageBucket: "baghbaan-4aad6.firebasestorage.app",
    messagingSenderId: "466727671523",
    appId: "1:466727671523:web:5ee8a54eba240528d8d7d6",
    measurementId: "G-CMB93EZ23K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);