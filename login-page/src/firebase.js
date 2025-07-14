// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAst5SbFxfzyKIYI3ovQgvfmxX_G-gJtq4",
  authDomain: "login-page-b17a1.firebaseapp.com",
  projectId: "login-page-b17a1",
  storageBucket: "login-page-b17a1.appspot.com",
  messagingSenderId: "1008165762066",
  appId: "1:1008165762066:web:45bf810a846829355a14cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct named export
export const auth = getAuth(app);
