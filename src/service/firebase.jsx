// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9osb27mIFgWg9ikIu6gH1YnmYtWQrEtg",
  authDomain: "amatistastore-f5214.firebaseapp.com",
  projectId: "amatistastore-f5214",
  storageBucket: "amatistastore-f5214.firebasestorage.app",
  messagingSenderId: "710860951715",
  appId: "1:710860951715:web:ad43883b1d8e13d5e92f16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)