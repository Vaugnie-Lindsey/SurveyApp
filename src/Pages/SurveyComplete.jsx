import React from "react";
import { useSearchParams } from "react-router-dom";

const SurveyComplete = () => {
  const [queryParameters] = useSearchParams();
  const url = `http://localhost:3000/?code=${queryParameters.get("code")}`;
  const shareData = {
    title: "Women In STEM Study",
    text: "Earn up to $10!",
    url: url,
  };

  const openShare = () => {
    navigator.share(shareData);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 dark:bg-slate-900 dark:text-white min-h-screen p-16">
      <h1 className="dark:text-green-500 text-4xl">
        The survey is now complete!
      </h1>
      <p>
        Thank you for participating in our survey. We ask that you use one if
        the methods below to share the link with a friend or family member. For
        each person that you share it to (up to three) you recieve and
        additional payout.
      </p>
      <button
        onClick={() => openShare()}
        className="bg-green-500 pl-1 pr-1 rounded-sm"
      >
        Share Link
      </button>
      <h3>If the button above doesnt work copy this link:</h3>
      <div className="pl-2 pr-2 pt-1 pb-1 border-2 border-blue-400 rounded-md">
        <p>{url}</p>
      </div>
      <p>...And send it through text, email, or social media!</p>
    </div>
  );
};

export default SurveyComplete;
