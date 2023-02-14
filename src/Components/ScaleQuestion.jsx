import React, { useState } from "react";

const ScaleQuestion = (props) => {
  const [focus, SetFocus] = useState("");
  const checkIfSelected = (answer) => {
    if (answer === focus) {
      return "bg-appPink text-appPurple shadow shadow-appPurple font-bold";
    } else {
      return "bg-gray-200 hover:bg-appPink hover:text-appPurple hover:font-bold";
    }
  };

  const otherCheckIfSelected = (answer) => {
    if (answer == focus) {
      return true;
    } else {
      return false;
    }
  };

  const options = [
    "Strongly Disagree",
    "Disagree",
    "Indifferent",
    "Agree",
    "Strongly Agree",
  ];
  const questions = options.map((answer, index) => (
    <div
      key={index}
      className={`${checkIfSelected(
        answer
      )} h-20 w-28 p-1 rounded-md transition-all flex flex-col-reverse items-center justify-center`}
      onClick={() => SetFocus(answer)}
    >
      <input
        id={props.question + index}
        type="radio"
        value={answer}
        name={props.name}
        className="accent-appPurple opacity-0"
        onChange={() => SetFocus(answer)}
        checked={otherCheckIfSelected(answer)}
        required
      ></input>
      <label className="text-center" for={props.question + index}>
        {answer}
      </label>
    </div>
  ));
  return (
    <fieldset className="border-2 border-appPink rounded-md p-3">
      <legend className="font-bold text-lg text-appPurple">
        {props.question}
      </legend>
      <div className="flex flex-row flex-wrap gap-2 justify-center">
        {questions}
      </div>
    </fieldset>
  );
};

export default ScaleQuestion;
