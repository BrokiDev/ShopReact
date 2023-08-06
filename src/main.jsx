import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEb-WA3U4BHNvJgARzxwXIBs8QEdpohbA",
  authDomain: "shopreact-a78fc.firebaseapp.com",
  projectId: "shopreact-a78fc",
  storageBucket: "shopreact-a78fc.appspot.com",
  messagingSenderId: "265718521525",
  appId: "1:265718521525:web:7b9c67716f1830bb88e8fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
