// Import the functions you need from the SDKs you need

import app from "firebase/compat/app";
import 'firebase/database';

const config = {

  apiKey: "AIzaSyAgrP-7gwQBGV51hOKloy_mU6SC1KyP2j0",

  authDomain: "vaugnie-lindsey-database.firebaseapp.com",

  databaseURL: "https://vaugnie-lindsey-database-default-rtdb.firebaseio.com",

  projectId: "vaugnie-lindsey-database",

  storageBucket: "vaugnie-lindsey-database.appspot.com",

  messagingSenderId: "35705651164",

  appId: "1:35705651164:web:76ca56bb969eed3b9ed919"

};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
  }
  
  //API routes
  users = () => this.db.ref('users');
 }
  
 export default Firebase;



// Initialize Firebase

//const app = initializeApp(firebaseConfig);

