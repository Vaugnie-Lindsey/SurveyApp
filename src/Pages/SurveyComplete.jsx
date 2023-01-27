import React from "react";
import { useState } from "react";
import { assignTokenId } from "../DataFunctions";
import { useSearchParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const SurveyComplete = () => {
  // const [queryParameters] = useSearchParams();
  const [copyLabel, setCopyLabel] = useState("Copy");
  //Need logic to check if this link has already been generated so that we don't regenerate the link if the user wants to revisit this page
  const url = `http://localhost:3000/InformedConsent?tokenID=${assignTokenId()}`;
  const shareData = {
    title: "Women In STEM Study",
    text: "Earn up to $10!",
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
    }, 2000)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 dark:bg-slate-900 dark:text-white min-h-screen p-16">
      <h1 className="dark:text-green-500 text-4xl">
        The survey is now complete!
      </h1>
      <h2 className="dark:text-green-500 text-2xl">Have a coffee on us.</h2>
      <p>
        Thank you for participating in our survey. We ask that you use one if
        the methods below to share the link with a friend or family member. For
        each person that you share it to (up to three) you can recieve an
        additional payout.
      </p>
      <h3>Use this link to share with your friends and family!</h3>
      <div className="flex flex-col sm:flex-row gap-2 p-2">
        <div className="pl-2 pr-2 pt-1 pb-1 border-2 border-blue-400 rounded-md min-w-prose">
          <p>{url}</p>
        </div>
        <button className="border-2 border-green-500 pl-2 pr-2 pt-1 pb-1 rounded-md" onClick={() => copyLink()}>{copyLabel}</button>
      </div>
      {navigator.share &&
      <button
        onClick={() => openShare()}
        className="bg-green-500 p-3 rounded-sm active:bg-green-800"
      >
        Share Link
      </button>}
    </div>
  );
};

export default SurveyComplete;
