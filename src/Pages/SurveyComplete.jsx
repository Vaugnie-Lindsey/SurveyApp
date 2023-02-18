import React from "react";
import { useState } from "react";
import { assignTokenId } from "../DataFunctions";
import { useSearchParams } from "react-router-dom";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import db from "../firebase";
import { async } from "@firebase/util";
import { useEffect } from "react";

const SurveyComplete = () => {
  const [url, setUrl] = useState("");
  const [queryParameters] = useSearchParams();
  let id = queryParameters.get("id");
  let token = assignTokenId();
  let tokenAssigned = false;

  useEffect(() => {
    const getData = async () => {
      const codes = await doc(db, "Codes", "Invitation_tokens");

      // updateDoc(codes, {
      //   token: arrayUnion(tokenID)
      // })
      const user = await doc(db, "Main", id);
      const finalData = await getDoc(user);
      const moreData = finalData.data();
      if (moreData.child_token === " ") {
        console.log("New person");
        await updateDoc(codes, {
          token: arrayUnion({
            seed: false,
            tokenID: token,
            tokenUses: 3,
          }),
        });

        await updateDoc(user, {
          child_token: token,
        });
        setUrl(`${window.location.origin}?id=${id}&tokenID=${token}`);
      } else {
        let existingToken = moreData.child_token;
        console.log("old person");
        setUrl(`${window.location.origin}/?id=${id}&tokenID=${existingToken}`);
      }
      console.log(getDoc(user));
      console.log(moreData);
    };
    getData();
  }, []);
  const [copyLabel, setCopyLabel] = useState("Copy");
  //Need logic to check if this link has already been generated so that we don't regenerate the link if the user wants to revisit this page
  //Also save tokenID to user
  // const url = `http://localhost:3000/Homepage?tokenID=${tokenID}`;
  const shareData = {
    title: "Women In STEM Study",
    text: "Earn up to $20!",
    url: url,
  };

  const openShare = () => {
    navigator.share(shareData);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopyLabel("Copied!");
    setTimeout(() => {
      setCopyLabel("Copy");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen pt-16 pb-16 pr-16 pl-16 md:pr-56 md:pl-56">
      <h1 className="text-appPurple text-4xl text-center">The survey is now complete!</h1>
      <h2 className="items-center text-appPurple text-2xl">
        Have a coffee on us.
      </h2>
      <p>
        Thank you for participating in our survey. You will be sent your $5 
        gift code via text message soon. We ask that you
        please use the link below to invite other Women in STEM to take this
        survey as well. For each person that you share it to (up to three) you
        can recieve an addition $5 Starbucks gift code per person. All gift
        codes will be sent seperately.
      </p>

      <div className="flex flex-col sm:flex-row gap-2 p-2">
        <div className="pl-2 pr-2 pt-1 pb-1 border-2 border-appPink rounded-md min-w-prose flex flex-row gap-3 items-center">
          <p>{url}</p>
          <button
            className="border-2 border-appPurple pl-2 pr-2 pt-1 pb-1 rounded-md"
            onClick={() => copyLink()}
          >
            {copyLabel}
          </button>
        </div>
      </div>
      {navigator.share && (
        <button
          onClick={() => openShare()}
          className="bg-appPurple rounded-3xl p-2 sm:w-3/5 md:w-1/5 text-appPink hover:bg-appPink hover:text-appPurple font-bold transition-all"
        >
          Share Link
        </button>
      )}
    </div>
  );
};

export default SurveyComplete;
