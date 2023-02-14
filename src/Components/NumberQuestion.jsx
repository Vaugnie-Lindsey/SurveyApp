import React, {useState} from "react";

const NumberQuestion = (props) => {

  const [colors, setColors] = useState({
    bg: "border-green-500"
  });

  const [error, setError] = useState({isError: false, message: ""});

  const checkForInput = (e) => {
    console.log(e.target.value);
    console.log(isNaN(parseInt(e.target.value)));
    if (e.target.value == "") {
      setError({isError: true, message: "This field requires a value"});
      setColors({bg: "border-red-500"});
    } else if (isNaN(parseInt(e.target.value))){
      setError({isError: true, message: "This field requires a number"});
      setColors({bg: "border-red-500"});
    } else {
      setError({isError: false, message: ""});
      setColors({bg: "border-green-500"});
    }
  }

  return (
    <fieldset className="border-2 border-appPink rounded-md p-3">
      <legend className="font-bold text-lg text-appPurple">{props.question}</legend>
      <input
        name={props.name}
        type="text"
        className={`text-black border-b-2 ${colors.bg} focus:border-2 focus:outline-blue-600 focus:outline-4 hover:border-appBlue pr-1 pl-1 transition-all`}
        required
        onBlur={(e) => checkForInput(e)}
        placeholder="Place Answer Here"
      ></input>
      {error.isError && <p className="text-sm text-red-500">{error.message}</p>}
    </fieldset>
  );
};

export default NumberQuestion;
