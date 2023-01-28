import {useNavigate, useSearchParams } from "react-router-dom";
import db from "../firebase";
import { getFirestore, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { assignTokenId } from "../DataFunctions";


const InformedConsent = () => {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const [check, setCheck] = useState(false);


  const generateUser = async () => {
    queryParameters.get("tokenID");
    //Generates random hex code to create unique ID
    const genRanHex = (size) =>
    [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

    // id should be generated
    const aDocRef = await doc(db, "Main", "ID");
    const idNumDoc = await getDoc(aDocRef);
    const idNum = idNumDoc.data();
    console.log(idNum);
    const id = idNum + 1;
    await updateDoc(aDocRef, {
      id: idNum + 1
    })
    const docRef = await doc(db, "Main", id);
    

    let genCode = genRanHex(6);

    const data = {
      id: idNum + 1,
      invitation_token: queryParameters.get("tokenID"),
      invited_by: " ",
      child_token: " ",
      parentID: queryParameters.get("parentID"),
      phone: 0,
      survey_completed: false,
      response: {},
      consent: true
    };
    setDoc(docRef, data)
    .then(() => {
      console.log("New user added successfully");
    })
    .catch(error => {
      console.log(error);
    })

    
    let url = `/SurveyPage?id=${id}`;
    navigate(url);

  };

  const checkItem = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900 dark:text-white pt-16 pb-16 pr-16 pl-16 md:pr-56 md:pl-56 gap-10">
      <h1 className="text-green-500 text-4xl">
        Increasing the Effectiveness of Respondent-Driven Sampling by Surveying
        the Experiences of Women in STEM
      </h1>
      <ol className="list-decimal flex flex-col gap-2">
        <li>
          The purpose of this study is to gain knowledge of experiences of women
          in stem and to examine different strategies for increasing the length
          of referral chains, improving the effectiveness of respondent-driven
          sampling, and to test a mobile app for taking surveys.
        </li>
        <li>
          Your participation in this study will involve taking a survey, and,
          optionally, inviting your friends and acquaintances to take part in
          the survey. The survey should take approximately 10 to 15 minutes to
          complete.
        </li>
        <li>
          The risks to you as a participant are minimal. These include stress
          from taking a survey, although help is available if you need it.
        </li>
        <li>
          The results of this study may be published in scientific research
          journals or presented at professional conferences. However, your name
          and identity will not be revealed and your record will remain
          confidential. At the end of the survey, identifying information
          gathered electronically will be destroyed and replaced with numerical
          IDs.
        </li>
        <li>
          Participation in this study will not benefit you directly. Your
          participation may benefit others by improving the development of
          software.
        </li>
        <li>
          You can choose not to participate. If you decide not to participate,
          there will not be a penalty to you or loss of any benefits to which
          you are otherwise entitled. You may withdraw from this study at any
          time.
        </li>
      </ol>
      <div>
        <label>Check to confirm that you consent</label>
        <input
          id="consent"
          type="checkbox"
          className="accent-green-500 ml-3"
          required
          onChange={(e) => checkItem(e)}
          defaultChecked={check}
        ></input>
      </div>
      {
        check && (
          <button
            className="bg-green-500 active:bg-green-800 rounded-md text-white p-3"
            onClick={() => generateUser()}
          >
            Continue
          </button>
        )
        /* </Link> */
      }
    </div>
  );
};

export default InformedConsent;
