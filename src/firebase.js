import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAgrP-7gwQBGV51hOlomU6SC1KyP2j0",
    authDomain: "vaugnie-lindsey-database.firebaseapp.com",
    databaseURL: "https://vaugnie-lindsey-database-default-rtdb.firebaseio.com",
    projectId: "vaugnie-lindsey-database",
    storageBucket: "vaugnie-lindsey-database.appspot.com",
    messagingSenderId: "35705651164",
    appId: "1:35705651164:web:76ca56bb969eed3b9ed919"

};
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

export default db

/*
import firebase from "./firebase";
  
const firebaseConfig = {
    apiKey: "AIzaSyAgrP-7gwQBGV51hOlomU6SC1KyP2j0",
    authDomain: "vaugnie-lindsey-database.firebaseapp.com",
    databaseURL: "https://vaugnie-lindsey-database-default-rtdb.firebaseio.com",
    projectId: "vaugnie-lindsey-database",
    storageBucket: "vaugnie-lindsey-database.appspot.com",
    messagingSenderId: "35705651164",
    appId: "1:35705651164:web:76ca56bb969eed3b9ed919"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;

*/