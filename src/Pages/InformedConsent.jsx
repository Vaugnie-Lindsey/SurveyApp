import React from "react";
import { Link } from "react-router-dom";

const InformedConsent = () => {

    const AssignId = () => {
        //Generates random hex code to create unique ID
        const genRanHex = size => [...Array(size)]
            .map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        console.log(genRanHex(6));
        console.log(genRanHex(8));
    }

    // console.log(document.getElementById("consent").checked);
    AssignId();

    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Informed Consent</h1>
            <p>Blah blah blah</p>
            <div>
                <label>Check to confirm that you consent</label>
                <input id="consent" type="checkbox"></input>
            </div>
            {/* {document.getElementById("consent").checked && */}
            <Link to="/SurveyPage">
                <button>Continue</button>
            </Link>
        </div>
    );
};

export default InformedConsent;