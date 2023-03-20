import { useNavigate, useSearchParams } from "react-router-dom";
import db from "../firebase";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  query,
  collection,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import React, { useState } from "react";
import { assignTokenId } from "../DataFunctions";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const ReturningUser = () => {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const [check, setCheck] = useState(false);
  const [mobile, setMobile] = useState();

  const generateUser = async (phoneNumber) => {
    // check the phone number to see if it already exists
    const snapshot = query(collection(db, "Main"));
    const snap = await getDocs(snapshot);
    snap.forEach((doc) => {

      var docName = doc.id;

      if (doc.data()["phone"] == phoneNumber) {
        // if pre-existing user found, then get their user info
        console.log(docName)
        navigate(`/SurveyComplete?id=${docName}`);
      }
    });

  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-16 gap-10">
        <h1 className="text-3xl md:text-5xl text-appPurple text-center signika">Welcome Back</h1>
        {
        <>
          <div className="flex flex-col gap-3 justify-center">
            <label className="font-bold">
              {" "}
              Please Enter Your Phone Number Below:{" "}
            </label>
            <PhoneInput
              country="us"
              value={mobile}
              onChange={setMobile}
              //error={mobile && isPossiblePhoneNumber(mobile) ? 'true' : 'false'}
            />
          </div>
          <button
            className="bg-appPink rounded-3xl text-appPurple p-3 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-black transition-all md:w-1/5 font-bold hover:text-appPink hover:bg-appPurple active:translate-y-3"
            onClick={() => generateUser(mobile)}
          >
            Continue
          </button>
        </>
        /* </Link> */
      }
      </div>
    </>
  );
};

export default ReturningUser;
