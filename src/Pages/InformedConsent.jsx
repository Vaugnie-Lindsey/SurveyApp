import React from "react";
import { Link } from "react-router-dom";

const InformedConsent = () => {
  const AssignId = () => {
    //Generates random hex code to create unique ID
    const genRanHex = (size) =>
      [...Array(size)]
        .map(() => Math.floor(Math.random() * 16).toString(16))
        .join("");

    console.log(genRanHex(6));
    console.log(genRanHex(8));
  };

  // console.log(document.getElementById("consent").checked);
  AssignId();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900 dark:text-white p-16">
      <h1 className="text-green-500 text-4xl">Informed Consent</h1>
      <ol className="list-decimal flex flex-col gap-2">
        <li>
          The title of this study is “Increasing the Effectiveness of
          Respondent-Driven Sampling by Surveying the Experiences of Women in
          STEM”. The purpose of this study is to gain knowledge of experiences
          of women in stem and to examine different strategies for increasing
          the length of referral chains, improving the effectiveness of
          respondent-driven sampling, and to test a mobile app for taking
          surveys.
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
          className="accent-green-500"
        ></input>
      </div>
      {/* {document.getElementById("consent").checked && */}
      <Link to="/SurveyPage">
        <button className="bg-green-500 text-white rounded-sm pl-1 pr-1">
          Continue
        </button>
      </Link>
    </div>
  );
};

export default InformedConsent;
