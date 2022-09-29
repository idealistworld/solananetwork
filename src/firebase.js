// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhkGzwmbntbThiUOat30NZIhFGa-pHvfs",
    authDomain: "decentralizedads-239e3.firebaseapp.com",
    databaseURL: "https://decentralizedads-239e3-default-rtdb.firebaseio.com",
    projectId: "decentralizedads-239e3",
    storageBucket: "decentralizedads-239e3.appspot.com",
    messagingSenderId: "440248585536",
    appId: "1:440248585536:web:11ece8e3cd9dce64c43ea5",
    measurementId: "G-9EPD5FTR5R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);