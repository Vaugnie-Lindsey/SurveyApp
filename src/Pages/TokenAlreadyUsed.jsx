import React from "react";
import { Link } from "react-router-dom";

const TokenAlreadyUsed = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-16 gap-10">
      <h1 className="text-3xl text-green-500">
        This survey is closed.
      </h1>
      <p>
        Thank you for your interest in taking this survey. At this time this survey is closed. We apologize for any inconvenience this has caused.
      </p>
      <Link to="/ReturningUser">
        <p className="text-green-500 underline">
          Already Completed the Survey?
        </p>
      </Link>
    </div>
  );
};

export default TokenAlreadyUsed;
