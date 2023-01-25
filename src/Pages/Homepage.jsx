import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Homepage = () => {
  const codeValid = (async () => {
    const docRef = doc(db, "Codes", "invitation_tokens");

    try {
      const snap = await getDoc(docRef)
      
      console.log(snap.data());
      } catch(error) {
        console.log(error)
        }
  });

  const [queryParameters] = useSearchParams();
  console.log(queryParameters.get("code"));

  return (
    <div className="flex flex-col justify-center items-center gap-5 dark:bg-slate-900 dark:text-white min-h-screen">
      <h1 className="text-green-500 text-4xl">Have a Coffee on Us</h1>
      <input
        className="border-2 border-red-500 p-1 rounded-md"
        placeholder="Please input your referal code here"
      ></input>
      <Link to="/InformedConsent">
        <button className="bg-green-500 rounded-md text-white p-3" onClick={() => codeValid()}>
          Continue
        </button>
      </Link>
    </div>
  );
};

export default Homepage;
