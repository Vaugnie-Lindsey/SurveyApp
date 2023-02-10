import React from "react";
import { Link } from "react-router-dom";

const TokenAlreadyUsed = () => {
    return(
        <div className="flex flex-col items-center min-h-screen p-16 gap-10">
            <h1 className="text-3xl text-green-500">Hmm... Looks like something went wrong</h1>
            <p>The Link provided contains an authentification code that has already been used</p>
            <Link to="/ReturningUser">
                <p className="text-green-500 underline">Already Completed the Survey?</p>
            </Link>
        </div>
    );
};

export default TokenAlreadyUsed;