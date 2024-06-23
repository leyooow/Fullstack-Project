import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlACX6eJNPkqmi9gHl36eQq6KA7lkjJcs",
  authDomain: "faculty-management-syste-20498.firebaseapp.com",
  projectId: "faculty-management-syste-20498",
  storageBucket: "faculty-management-syste-20498.appspot.com",
  messagingSenderId: "147992354550",
  appId: "1:147992354550:web:dea6e490d37d4f151916d7",
  measurementId: "G-87J6HW5VV8"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);

export { appFirebase, analytics };
