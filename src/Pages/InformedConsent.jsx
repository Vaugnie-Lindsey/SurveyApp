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
        <div className="flex flex-col justify-center items-center min-h-screen dark:bg-slate-900 dark:text-white">
            <h1 className="text-green-500 text-4xl">Informed Consent</h1>
            <h2>How were you referred here?</h2>
            <div>
                <input type="radio" value="Text" name="refer"></input>
                <label>Text</label>
            </div>
            <div>
                <input type="radio" value="Email" name="refer"></input>
                <label>Email</label>
            </div>
            <div>
                <input type="radio" value="Social Media" name="refer"></input>
                <label>Social Media</label>
            </div>
            <div>
                <input type="radio" value="Other" name="refer"></input>
                <label>Other</label>
                <br></br>
                <input type="text"></input>
            </div>
            <p>Blah blah blah</p>
            <div>
                <label>Check to confirm that you consent</label>
                <input id="consent" type="checkbox" className="accent-green-500"></input>
            </div>
            {/* {document.getElementById("consent").checked && */}
            <Link to="/SurveyPage">
                <button className="bg-green-500 text-white rounded-sm pl-1 pr-1">Continue</button>
            </Link>
        </div>
    );
};

export default InformedConsent;