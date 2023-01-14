import React from "react";
import ScaleQuestion from "./ScaleQuestion";

const MultipleScale = (props) => {
    const questions = props.options.map((answer, index) =>
    <div key={index}>
        <ScaleQuestion question={answer} />
    </div>
    )
    return (
        <div>
            <h2 className="font-bold">{props.question}</h2>
            <div className="flex flex-col gap-5">
                {questions}
            </div>
        </div>
    );
};

export default MultipleScale;