import React, {useState} from "react";
import db from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Homepage = () => {
    const [users, setUser] = useState("");

    const submit = (e) => {
        e.preventDefault();
       
        try {
            addDoc(collection(db, "Main"), {
                ParentID: users,    
            });
            console.log("Document written with ID: ", users);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    };

    return(
        
          <div>
                <h1>Testing data input...</h1>
                <label>User Name:</label>
                
                <input
                  type='text'
                  name='uid'
                  value={users}
                  onChange={(e) => setUser(e.target.value)}
                />
               <button onClick={submit}>Submit</button>
              
            </div>
    );
        
};

export default Homepage;