// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQRkPTw1lEDRJw5yldreX8r4sNf5xPwfY",
  authDomain: "cria-api.firebaseapp.com",
  projectId: "cria-api",
  storageBucket: "cria-api.appspot.com",
  messagingSenderId: "918069388827",
  appId: "1:918069388827:web:9b4a89bd149d0dda97fabe",
  measurementId: "G-89MD17050H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)