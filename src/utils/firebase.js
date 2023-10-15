// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHk8Inig0u4PA9Unpv2KRlAI9NY7VhRS4",
  authDomain: "netflixgpt-48f7e.firebaseapp.com",
  projectId: "netflixgpt-48f7e",
  storageBucket: "netflixgpt-48f7e.appspot.com",
  messagingSenderId: "910150413645",
  appId: "1:910150413645:web:8cc1f57efb30624d0c5b04",
  measurementId: "G-TGG340CD59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
