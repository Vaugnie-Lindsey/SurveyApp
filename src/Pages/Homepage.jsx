import React, { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import db from "../firebase";
import Loading from "../Components/Loading";
import werk from "../coffeePic.svg";

const Homepage = () => {
  let navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const [showLoading, setLoading] = useState(false);
  let token = queryParameters.get("tokenID");

  // Remember, tokens can only be used 3 times, so a system needs to put in place for this.
  // Prefereably, we dont just hardcode a cap here and instead implement this when sharing the codes at the end
  let id = queryParameters.get("id");
  const codeValid = async (passedToken) => {
    let validToken = false;
    setLoading(true);
    const docRef = doc(db, "Codes", "Invitation_tokens");

    try {
      const snap = await getDoc(docRef);
      //console.log(snap.data());

      var i;

      for (i = 0; i < snap.data()["token"].length; i++) {
        var token = snap.data()["token"][i]["tokenID"];
        var tokenUses = snap.data()["token"][i]["tokenUses"];

        if (passedToken == token) {
          if (tokenUses > 0) {
            validToken = true;
            console.log("Token is valid");
            navigate(`/InformedConsent?parentID=${id}&tokenID=${passedToken}`);
            // Link to informed consent page
          } else {
            navigate("/TokenAlreadyUsed");
          }
        }
      }
    } catch (error) {
      console.log(error);
    }

    if (!validToken) {
      navigate("/InvalidToken");
    }
    // Link to error page
  };

  // codeValid(token);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:justify-around signika h-screen">
<div className="flex flex-col md:justify-center items-center gap-5 md:min-h-screen mx-3 md:w-1/2">
      <h1 className="text-3xl md:text-6xl text-appPurple text-center signika">Have a Coffee on Us</h1>
      <p className="w-9/12 text-black">Take our Women in Stem Survey and recieve a $5 gift card. Additionally, you can refer up to 3 other women in STEM for an additional $5 each, for a total of up to $20.</p>
      {/* <p>Take our Women in Stem Survey and get rewarded!</p>
      <p>
        You'll receive a $5 gift card (Starbucks, Amazon, etc.). Refer up to 3
        other women in STEM for an additional $5 each, for a total of up to $20
      </p> */}
      <button
        className="bg-appPink text-appPurple font-bold p-3 rounded-3xl hover:text-appPink hover:bg-appPurple active:translate-y-3 transition-all md:w-1/4 text-center flex flex-row items-center justify-center"
        onClick={() => codeValid(token)}
      >
        {showLoading ? <Loading /> : "Get Started"}
      </button>
    </div>
    <div className="w-full md:w-1/2">
    <img src={werk} className="w-full md:h-screen object-contain"/>
    </div>
    </div>
  );
};

export default Homepage;
