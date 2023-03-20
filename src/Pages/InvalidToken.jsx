import React from "react";
import { Link } from "react-router-dom";

const InvalidToken = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-16 gap-10 signika">
      <h1 className="text-3xl text-appPurple">
        Hmm... Looks like something went wrong
      </h1>
      <p>
        The Link provided contains an invalid authentication code. Please
        contact the person who referred you and confirm you have the correct
        link
      </p>
      <Link to="/ReturningUser">
        <button className="bg-appPink text-appPurple font-bold p-3 rounded-3xl hover:text-appPink hover:bg-appPurple active:translate-y-3 transition-all text-center flex flex-row items-center justify-center">
          Already Completed the Survey?
        </button>
      </Link>
    </div>
  );
};

export default InvalidToken;
