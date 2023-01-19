import React, { useState } from "react";

const ScaleQuestion = (props) => {
    
    const options = ["Strongly Disagree", "Disagree", "Indifferent", "Agree", "Strongly Agree"];
    const questions = options.map((answer, index) => 
    <div key={index}>
        <input type="radio" value={answer} name={props.name} className="accent-red-500"></input>
        <label className="ml-2">{answer}</label>
        
    </div>
    )
    return (
        <div>
            <h2 className="font-bold">{props.question}</h2>
            <div className="flex flex-row gap-2">
            {questions}
            </div>
        </div>
    );
};

export default ScaleQuestion;