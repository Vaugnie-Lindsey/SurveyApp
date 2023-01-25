import React, { useState } from "react";

const MCQuestion = (props) => {
  const [showOption, setShowOption] = useState(true);
  const [focus, SetFocus] = useState(false);
  const [colors, setColors] = useState({
    bg: "border-green-500"
  });
  const inputName = props.name + "1";
  const handleChange = (answer) => {
    if (answer.target.value == "Other (Please Specify)") {
      setShowOption(false);
    } else {
      setShowOption(true);
    }
    // document.getElementById(answer.target.value).focus();
  };

  const checkForInput = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      console.log("sad face");
      setColors({bg: "border-red-500"});
    } else {
      setColors({bg: "border-green-500"});
    }
  }

  const checkForOther = (answer) => {
    if (answer == "Other (Please Specify)") {
      return true;
    } else {
      // setColors({bg: "border-green-500"});
      return false;
    }
  };

  const questions = props.options.map((answer, index) => (
    <div key={index}>
      <input
        type="radio"
        value={answer}
        className="accent-blue-600 text-black border border-green-400"
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
            className={`dark:text-black border-2 ${colors.bg} rounded-md focus:border-2 focus:outline-blue-600 pr-1 pl-1 ml-6`}
            disabled={showOption}
            name={inputName}
            required
            onBlur={(e) => checkForInput(e)}
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
