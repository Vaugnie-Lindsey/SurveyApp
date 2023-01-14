import React from "react";
import { Link } from "react-router-dom";

const InformedConsent = () => {

    const AssignId = () => {
        //Assign ID then save to Firebase
    }

    return(
        <>
            <h1>Informed Consent</h1>
            <p>Blah blah blah</p>
            <Link to="/SurveyPage">
                <button>Continue</button>
            </Link>
        </>
    );
};

export default InformedConsent;