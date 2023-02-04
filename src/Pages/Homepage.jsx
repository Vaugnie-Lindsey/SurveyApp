import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc, arrayRemove, arrayUnion } from "firebase/firestore";
import db from "../firebase";

const Homepage = () => {
  let navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  let token = queryParameters.get("tokenID");

  // Remember, tokens can only be used 3 times, so a system needs to put in place for this.
  // Prefereably, we dont just hardcode a cap here and instead implement this when sharing the codes at the end
  let id = queryParameters.get("id");
  const codeValid = (async (passedToken) => {

    const docRef = doc(db, "Codes", "Invitation_tokens");

    try {
      const snap = await getDoc(docRef);
      console.log(snap.data());
      
      var i;
      let validToken = false;

      for(i = 0; i < snap.data()['token'].length; i++) {
        
        var token = snap.data()['token'][i]['tokenID'];
        var tokenUses = snap.data()['token'][i]['tokenUses'];
        
        if(passedToken == token) {

          if(tokenUses > 0) {
            //Add anonymous sign in
            var dataUpdate = snap.data();
            
            console.log(dataUpdate)
            var seed = dataUpdate['token'][i]['seed'];
            var tokenID = dataUpdate['token'][i]['tokenID'];
            var tokenUses1 = dataUpdate['token'][i]['tokenUses']--;
            var tokenUses2 = dataUpdate['token'][i]['tokenUses']--;
            // This needs to be fixed
            await updateDoc(docRef, {
              token: arrayRemove(
                {
                  seed: seed,
                  tokenID: tokenID,
                  tokenUses: tokenUses1
                }
              )
            });
            await updateDoc(docRef, {
              token: arrayUnion(
                {
                  seed: seed,
                  tokenID: tokenID,
                  tokenUses: tokenUses2
                }
              )
            });

            validToken = true;
            console.log("Token is valid");
            navigate(`/InformedConsent?parentID=${id}&tokenID=${passedToken}`);
            // Link to informed consent page 
          }

          else {
            navigate("/TokenAlreadyUsed")
          }

        }
      }
      if (!validToken) {
        navigate("/InvalidToken");
      }
      // Link to error page



      } catch(error) {
        console.log(error)
        }
  });

  codeValid(token);

  return (
    <div className="flex flex-col justify-center items-center gap-5 dark:bg-slate-900 dark:text-white min-h-screen">
      <h1 className="text-4xl text-green-500">Loading...</h1>
      <div className="rounded-full w-20 h-20 bg-slate-900 flex flex-col justify-center items-center"><div className="animate-spin rounded-full w-20 h-20 border-l-4 border-l-green-500"></div></div>
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
