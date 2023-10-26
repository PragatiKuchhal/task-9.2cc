import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5b_ojO_feJSxSqr0gln9SUZ-LiqLJmsA",
  authDomain: "sit313-task7p-b578e.firebaseapp.com",
  projectId: "sit313-task7p-b578e",
  storageBucket: "sit313-task7p-b578e.appspot.com",
  messagingSenderId: "966119939608",
  appId: "1:966119939608:web:ca1d860c0b02ded802ed6d",
  measurementId: "G-KCX55JQJVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore(app);