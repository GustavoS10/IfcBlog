// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSHcRCFSkz6yysM8ZBGrokDibmViBC-40",
  authDomain: "instaclone-65725.firebaseapp.com",
  projectId: "instaclone-65725",
  storageBucket: "instaclone-65725.appspot.com",
  messagingSenderId: "813863575893",
  appId: "1:813863575893:web:74e5b5c383f6b48cc2cfdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};