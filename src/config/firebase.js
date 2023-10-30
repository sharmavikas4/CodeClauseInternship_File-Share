// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getStorage} from "firebase/storage";
import {getAuth,GoogleAuthProvider,GithubAuthProvider,FacebookAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk48pe2ULLuZQVzF2TT4GdItm5A3gutF0",
  authDomain: "file-sharing-cf3f8.firebaseapp.com",
  projectId: "file-sharing-cf3f8",
  storageBucket: "file-sharing-cf3f8.appspot.com",
  messagingSenderId: "106825358656",
  appId: "1:106825358656:web:189852879727a380fbaea5",
  measurementId: "G-WS5FJ9EEE3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
