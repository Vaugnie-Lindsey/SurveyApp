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

  const clickRadio = () => {
    
  }

  const questions = props.options.map((answer, index) => (
    <div key={index} className="bg-appOrange p-1 rounded-md" onClick={() => clickRadio(props.question + index)}>
      <input
        id={props.question + index}
        type="radio"
        value={answer}
        className="text-black border border-green-400 opacity-0"
        name={props.name}
        onChange={(answer) => handleChange(answer)}
        required
      ></input>
      <label className="ml-2 text-white" for={props.question + index}>{answer}</label>
      {checkForOther(answer) && (
        <>
          <br></br>
          <input
            id={answer}
            placeholder="Place answer here"
            className={`dark:text-black border-b-2 ${colors.bg} focus:border-2 focus:outline-appBlue hover:outline-appBlue pr-1 pl-1 ml-6 transition-all`}
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
    <fieldset className="flex flex-col gap-3 border border-appBlue rounded-md p-3">
      <legend className="font-bold text-lg">{props.question}</legend>
      {questions}
    </fieldset>
  );
};

export default MCQuestion;
