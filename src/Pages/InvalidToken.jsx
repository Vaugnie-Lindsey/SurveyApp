import React from "react";
import { Link } from "react-router-dom";

const InvalidToken = () => {
    return(
        <div className="flex flex-col items-center min-h-screen dark:bg-slate-900 dark:text-white p-16 gap-10">
            <h1 className="text-3xl text-green-500">Hmm... Looks like something went wrong</h1>
            <p>The Link provided contains an invalid authentication code. Please contact the person who referred you and confirm you have the correct link</p>
            <Link to="/ReturningUser">
                <p className="text-green-500 underline">Already Completed the Survey?</p>
            </Link>
        </div>
    );
};

export default InvalidToken;