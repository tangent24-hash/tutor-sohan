// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB_xDLgPW9UIYerxyJrQgbuR4bOM-_bs_c",

  authDomain: "tutor-sohan.firebaseapp.com",

  projectId: "tutor-sohan",

  storageBucket: "tutor-sohan.appspot.com",

  messagingSenderId: "882909356347",

  appId: "1:882909356347:web:3b96d845c5ff26927ad71e",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
