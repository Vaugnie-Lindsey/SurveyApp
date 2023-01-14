import React from "react";

const MCQuestion = (props) => {
    const questions = props.options.map((answer, index) =>
    <div key={index}>
        <input type="radio" value={answer}></input>
        <label>{answer}</label>
    </div>
    )
    return (
        <div>
            <h2 className="font-bold">{props.question}</h2>
            {questions}
        </div>
    );
};

export default MCQuestion;