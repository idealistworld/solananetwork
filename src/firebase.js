import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore(app);