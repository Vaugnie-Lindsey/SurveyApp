import React from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
    return(
        <div>
            <h1 className="text-green-500 text-4xl">Have a Coffee on Us</h1>
            <input className="border border-red-500" placeholder="Please input your referal code here"></input>
            <Link to="/InformedConsent">
                <button>Continue</button>
            </Link>
        </div>
    );
};

export default Homepage;