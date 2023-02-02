import React from "react";

const TokenAlreadyUsed = () => {
    return(
        <div className="flex flex-col items-center min-h-screen dark:bg-slate-900 dark:text-white p-16 gap-10">
            <h1 className="text-3xl text-green-500">Hmm... Looks like something went wrong</h1>
            <p>The Link provided contains an authentification code that has already been used three times.</p>
        </div>
    );
};

export default TokenAlreadyUsed;