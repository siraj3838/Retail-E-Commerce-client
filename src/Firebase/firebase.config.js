// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuUD8HohnUWLP6bagvJZsMceyZ7QXUoaM",
  authDomain: "retail-e-commerce-based.firebaseapp.com",
  projectId: "retail-e-commerce-based",
  storageBucket: "retail-e-commerce-based.appspot.com",
  messagingSenderId: "307464145822",
  appId: "1:307464145822:web:a03c4ab4d4ab38a95c248f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;