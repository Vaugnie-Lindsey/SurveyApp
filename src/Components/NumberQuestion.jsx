import React from "react";

const NumberQuestion = (props) => {
    // const handleChange = (e) => {
    //     e.target.style.borderColor = "border-green-500";
    // }
    return (
        <div>
            <h2 className="font-bold text-lg dark:text-green-500">{props.question}</h2>
            <input type="text" className="dark:text-black border border-green-500 rounded-md focus:border-2 focus:border-red-500 pr-1 pl-1"></input>
        </div>
    );
};

export default NumberQuestion;