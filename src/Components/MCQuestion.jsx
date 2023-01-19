import React from "react";

const MCQuestion = (props) => {
    console.log(props.name);
    const questions = props.options.map((answer, index) =>
    <div key={index}>
        <input type="radio" value={answer} className="accent-red-500" name={props.name}></input>
        <label className="ml-2">{answer}</label>
        {/* {true && <input type="text" placeholder="this is text"></input>} */}
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