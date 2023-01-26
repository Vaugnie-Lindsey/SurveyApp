import React from "react";

const InvalidToken = () => {
    return(
        <div className="flex flex-col items-center min-h-screen dark:bg-slate-900 dark:text-white p-16 gap-10">
            <h1 className="text-3xl text-green-500">Hmm... Looks like something went wrong</h1>
            <p>The Link provided contains an invalid authentification code. Please contact the person who referred you and confirm you have the correct link</p>
        </div>
    );
};

export default InvalidToken;