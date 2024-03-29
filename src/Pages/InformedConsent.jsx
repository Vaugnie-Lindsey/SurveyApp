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

const InformedConsent = () => {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const [check, setCheck] = useState(false);
  const [mobile, setMobile] = useState();

  const generateUser = async (phoneNumber) => {
    // check the phone number to see if it already exists
    const snapshot = query(collection(db, "Main"));
    const snap = await getDocs(snapshot);
    snap.forEach((doc) => {
      if (doc.data()["phone"] == phoneNumber) {
        // if pre-existing user has finished survey, skip creating new user and take them to the end
        if (doc.data()["survey_completed"] == true) {
          navigate(`/SurveyComplete?id=${doc.data()["id"]}`);
        }
        // if pre-existing user has not finished survey, skip creating new user and take them back to survey
        else {
          let url = `/SurveyPage?id=${doc.data()["id"]}`;
          navigate(url);
        }
      }
    });
    queryParameters.get("tokenID");
    //Generates random hex code to create unique ID
    const genRanHex = (size) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");

    // Here the ids in the db are checked an the new id is set to the max+1. Idk, there is prob a better way to do this....
    const q = query(collection(db, "Main"));
    let max = Number.MIN_SAFE_INTEGER;
    try {
      const snap = await getDocs(q);

      snap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const docName = doc.id;
        //console.log(docName);
        if (parseInt(docName) > parseInt(max)) {
          max = doc.id;
        }
      });
      max = parseInt(max) + 1;
    } catch (error) {
      console.log(error);
    }

    const id = "" + max;

    const docRef = doc(db, "Main", id);
    let genCode = genRanHex(6);

    // Here, we will look in the db to find the parentId by matching invitation_token with the child_token of the parent (There will be 1 and only 1)
    const data = {
      id: max,
      invitation_token: queryParameters.get("tokenID"),
      invited_by: " ",
      child_token: " ",
      parentID: queryParameters.get("parentID"),
      phone: mobile,
      survey_completed: false,
      response: {},
      consent: true,
    };
    setDoc(docRef, data)
      .then(() => {
        console.log("New user added successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    // make sure users cant go back to the previous page and/or add more than one user to db.
    let url = `/SurveyPage?id=${id}`;
    navigate(url);
  };

  const checkItem = (e) => {
    console.log(e.target.checked);
    setCheck(e.target.checked);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-16 pb-16 pr-16 pl-16 md:pr-56 md:pl-56 gap-10 signika">
      <h1 className="text-appPurple text-2xl md:text-4xl">
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
        <li>This survey was approved by SIUE IRB; Protocol 1755</li>
      </ol>

      <div className="bg-appPurple p-3 rounded-md text-appPink font-bold">
        <label>Check to confirm that you consent</label>
        <input
          id="consent"
          type="checkbox"
          className="accent-appPink ml-3"
          required
          onChange={(e) => checkItem(e)}
          defaultChecked={check}
        ></input>
      </div>

      {
        <>
          <div className="flex flex-col gap-3 justify-center">
            <label className="font-bold">
              {" "}
              Please enter your phone number (US Numbers Only) before continuing if you wish to
              receive participation rewards for completing the survey. Your
              phone number will exclusively be used for receiving gift codes:{" "}
            </label>
            <PhoneInput
              country="us"
              value={mobile}
              onChange={setMobile}
              disabled={!check}
              //error={mobile && isPossiblePhoneNumber(mobile) ? 'true' : 'false'}
            />
          </div>
          <button
            className="bg-appPink rounded-3xl text-appPurple p-3 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-black transition-all md:w-1/5 font-bold hover:text-appPink hover:bg-appPurple active:translate-y-3"
            onClick={() => generateUser(mobile)}
            disabled={!check}
          >
            Continue
          </button>
        </>
        /* </Link> */
      }
    </div>
  );
};

export default InformedConsent;
