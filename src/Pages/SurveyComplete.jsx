import React from "react";

const SurveyComplete = () => {
    const shareData = {
        title: 'MDN',
        text: 'Learn web development on MDN!',
        url: 'https://developer.mozilla.org'
      }

    const openShare = () => {
        navigator.share(shareData);
    }

    return(
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1>The survey is now complete!</h1>
            <p>Thank you for participating in our survey. We ask that you use one if the methods below to share the link with a friend or family member. For each person that you share it to (up to three) you recieve and additional payout.</p>
            <button onClick={() => openShare()}>Share Link</button>
        </div>
    );
};

export default SurveyComplete;