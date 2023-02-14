import React, { useState } from "react";

const MCQuestion = (props) => {
  const [showOption, setShowOption] = useState(true);
  const [focus, SetFocus] = useState("");
  const [colors, setColors] = useState({
    bg: "border-green-500"
  });
  const inputName = props.name + "1";
  const handleChange = (answer) => {
    SetFocus(answer);
    if (answer == "Other (Please Specify)") {
      setShowOption(false);
    } else {
      setShowOption(true);
    }
    // document.getElementById(answer.target.value).focus();
  };

  const checkIfSelected = (answer) => {
    if (answer === focus) {
      return "bg-appPink text-appPurple shadow-sm shadow-appPurple font-bold"
    } else {
      return "bg-gray-200 hover:bg-appPink hover:text-appPurple hover:font-bold hover:shadow hover:shadow-appPurple hover:accent-appPurple hover:opacity-100 opacity-50"
    }
  }

  const otherCheckIfSelected = (answer) => {
    if (answer === focus) {
      console.log("this is true")
      return true
    } else {
      console.log("this is false")
      return false
    }
  }

  const checkForInput = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
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

  const clickRadio = (answer) => {
    SetFocus(answer)
  }

  const questions = props.options.map((answer, index) => (
    <div key={index} className={`${checkIfSelected(answer)} p-1 rounded-md transition-all`} onClick={() => handleChange(answer)}>
      <input
        id={props.question + index}
        type="radio"
        value={answer}
        className="text-black border border-green-400 accent-appPurple opacity-0"
        name={props.name}
        onChange={() => handleChange(answer)}
        checked={otherCheckIfSelected(answer)}
        required
      ></input>
      <label className="ml-2" for={props.question + index}>{answer}</label>
      {checkForOther(answer) && (
        <>
          <br></br>
          <div className="h-2 bg-appPink"></div>
          <input
            id={answer}
            placeholder="Place answer here"
            className={`dark:text-black border-b-2 ${colors.bg} focus:outline-none pr-1 pl-1 ml-6 transition-all`}
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
    <fieldset className="flex flex-col gap-3 border-2 border-appPink rounded-md p-3">
      <legend className="font-bold text-lg text-appPurple">{props.question}</legend>
      {questions}
    </fieldset>
  );
};

export default MCQuestion;
