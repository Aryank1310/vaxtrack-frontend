// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDMtdnyuv-WRTWtKv2_l7pj6mzoF5EQGcQ",
    authDomain: "vaxtrack-fceef.firebaseapp.com",
    projectId: "vaxtrack-fceef",
    storageBucket: "vaxtrack-fceef.appspot.com",
    messagingSenderId: "817949917672",
    appId: "1:817949917672:web:afe4ae25f37f5caa17a45d",
    measurementId: "G-MEFWK6Q7DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
