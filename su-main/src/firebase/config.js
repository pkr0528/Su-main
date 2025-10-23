// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7SRSK-zU-V5IGnCrh0za2KxNhqtMxyqc",
  authDomain: "app-landing-config.firebaseapp.com",
  projectId: "app-landing-config",
  storageBucket: "app-landing-config.firebasestorage.app",
  messagingSenderId: "794082756689",
  appId: "1:794082756689:web:246c2f98e4d6fc0c7ad070",
  measurementId: "G-K841XMR6EP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

export default app;