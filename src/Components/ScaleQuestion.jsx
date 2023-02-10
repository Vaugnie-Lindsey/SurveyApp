import React, { useState } from "react";

const ScaleQuestion = (props) => {
  const options = [
    "Strongly Disagree",
    "Disagree",
    "Indifferent",
    "Agree",
    "Strongly Agree",
  ];
  const questions = options.map((answer, index) => (
    <div key={index} className="bg-appOrange h-20 w-24 p-1 rounded-md text-white">
      <input
        id={props.question + index}
        type="radio"
        value={answer}
        name={props.name}
        className=""
        required
      ></input>
      <label className="ml-2" for={props.question + index}>{answer}</label>
    </div>
  ));
  return (
    <fieldset className="border border-appBlue rounded-md p-3">
      <legend className="font-bold text-lg">{props.question}</legend>
      <div className="flex flex-row flex-wrap gap-2 justify-center">{questions}</div>
    </fieldset>
  );
};

export default ScaleQuestion;
