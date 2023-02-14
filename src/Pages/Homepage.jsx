import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import db from "../firebase";

const Homepage = () => {
  let navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const [showButton, setShowButton] = useState(false);
  let token = queryParameters.get("tokenID");

  // Remember, tokens can only be used 3 times, so a system needs to put in place for this.
  // Prefereably, we dont just hardcode a cap here and instead implement this when sharing the codes at the end
  let id = queryParameters.get("id");
  const codeValid = (async (passedToken) => {
  let validToken = false;
  const docRef = doc(db, "Codes", "Invitation_tokens");

    try {
      const snap = await getDoc(docRef);
      //console.log(snap.data());
      
      var i;
      

      for(i = 0; i < snap.data()['token'].length; i++) {
        
        var token = snap.data()['token'][i]['tokenID'];
        var tokenUses = snap.data()['token'][i]['tokenUses'];
        
        if(passedToken == token) {
          if(tokenUses > 0) {
            validToken = true;
            console.log("Token is valid");
            navigate(`/InformedConsent?parentID=${id}&tokenID=${passedToken}`);
            // Link to informed consent page 
          }

          else {
            navigate("/TokenAlreadyUsed");
          }

        }
      }





      } catch(error) {
        console.log(error)
        }

      if (!validToken) {
        navigate("/InvalidToken");
      }
      // Link to error page
  });

  // codeValid(token);

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
      <h1 className="text-4xl text-appPurple">Loading...</h1>
      <div className="rounded-full w-20 h-20 bg-white flex flex-col justify-center items-center"><div className="animate-spin rounded-full w-20 h-20 border-l-4 border-l-appBlue"></div></div>
      <h1 className="text-4xl text-appPurple">Have a Coffee on Us</h1>
      <p>Take our Women in Stem Survey and get rewarded!</p>
      <p>You'll receive a $5 gift card (Starbucks, Amazon, etc.). Refer up to 3 other women in STEM for an additional $5 each, for a total of up to $20</p>
      <button className="bg-appPink text-appPurple font-bold p-3 rounded-3xl hover:text-appPink hover:bg-appPurple transition-all" onClick={() => codeValid(token)}>Get Started</button>
      {/* <h1 className="text-green-500 text-4xl">Have a Coffee on Us</h1>
      <input
        id='form'
        className="border-2 border-red-500 p-1 rounded-md"
        placeholder="Please input your referal code here"
        required
      ></input>
      <Link to="/InformedConsent">
        <button className="bg-green-500 active:bg-green-800 rounded-md text-white p-3" onClick={() => codeValid(document.getElementById("form").value)}>
          Continue
        </button>
      </Link> */}
    </div>

  );
};

export default Homepage;
