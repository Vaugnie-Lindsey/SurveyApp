import React from "react";
import ScaleQuestion from "./ScaleQuestion";

const MultipleScale = (props) => {
    const questions = props.options.map((answer, index) =>
    <div key={index}>
        <ScaleQuestion question={answer.question} name={answer.name}/>
    </div>
    )
    return (
        <div>
            <h2 className="font-bold text-lg dark:text-green-500 ">{props.question}</h2>
            <br></br>
            <div className="flex flex-col gap-5 ml-10">
                {questions}
            </div>
        </div>
    );
};

export default MultipleScale;