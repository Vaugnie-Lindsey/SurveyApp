import React, { useState } from "react";

const MCQuestion = (props) => {
  const [showOption, setShowOption] = useState(true);
  const [focus, SetFocus] = useState(false);
  const inputName = props.name + "1";
  const handleChange = (answer) => {
    if (answer.target.value == "Other (Please Specify)") {
      setShowOption(false);
    } else {
      setShowOption(true);
    }
    // document.getElementById(answer.target.value).focus();
  };

  const checkForOther = (answer) => {
    if (answer == "Other (Please Specify)") {
      return true;
    } else {
      return false;
    }
  };

  const questions = props.options.map((answer, index) => (
    <div key={index}>
      <input
        type="radio"
        value={answer}
        className="accent-blue-400 text-black border border-green-400"
        name={props.name}
        onChange={(answer) => handleChange(answer)}
        required
      ></input>
      <label className="ml-2">{answer}</label>
      {checkForOther(answer) && (
        <>
          <br></br>
          <input
            id={answer}
            placeholder="Place answer here"
            className="dark:text-black border-2 border-blue-400 rounded-md focus:border-2 focus:border-red-500 pr-1 pl-1 ml-6"
            disabled={showOption}
            name={inputName}
            required
          ></input>
        </>
      )}
    </div>
  ));
  return (
    <div>
      <h2 className="font-bold text-lg dark:text-green-500">
        {props.question}
      </h2>
      {questions}
    </div>
  );
};

export default MCQuestion;
