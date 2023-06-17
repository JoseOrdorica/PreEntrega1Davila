import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAAxhZPiNZBhIUljlinJTDeQUaXn_Gon_E",
    authDomain: "pc-master-market.firebaseapp.com",
    projectId: "pc-master-market",
    storageBucket: "pc-master-market.appspot.com",
    messagingSenderId: "762509710136",
    appId: "1:762509710136:web:f954f513bec1412ecd27cd"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);