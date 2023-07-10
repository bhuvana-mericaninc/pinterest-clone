// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIsae4QBvpaCJu3nkT-Vl26XGpgBtmjbU",
  authDomain: "pinterest-clone-df17c.firebaseapp.com",
  projectId: "pinterest-clone-df17c",
  storageBucket: "pinterest-clone-df17c.appspot.com",
  messagingSenderId: "795191729234",
  appId: "1:795191729234:web:1950420e636cf60d16138b"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 
export default app;