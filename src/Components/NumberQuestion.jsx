import React from "react";

const NumberQuestion = (props) => {
    return (
        <div>
            <h2 className="font-bold">{props.question}</h2>
            <input type="text" className="border border-yellow-500 rounded-sm"></input>
        </div>
    );
};

export default NumberQuestion;