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
    <div>
      <h2 className="font-bold text-lg dark:text-green-500">
        {props.question}
      </h2>
      <input
        name={props.name}
        type="text"
        className={`dark:text-black border-2 ${colors.bg} rounded-md focus:border-2 focus:outline-blue-600 focus:outline-4 hover:border-blue-600 pr-1 pl-1 shadow-md shadow-black`}
        required
        onBlur={(e) => checkForInput(e)}
      ></input>
      {error.isError && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default NumberQuestion;
