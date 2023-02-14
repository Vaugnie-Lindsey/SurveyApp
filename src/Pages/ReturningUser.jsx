import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ReturningUser = () => {
  const navigate = useNavigate();
  const checkPhoneNumber = (phoneNumber) => {
    console.log(phoneNumber);
    navigate("/SurveyComplete?id=8&tokenID=beheb2");
    //Firebase stuff
    //if true
    //build survey complete URL and send to page
    //else
    //give error code
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen p-16 gap-10">
        <h1 className="text-3xl text-appOrange">Welcome Back</h1>
        <h3>Please Enter Your Phone Number Below</h3>
        <input
          id="phone"
          type="tel"
          placeholder="(XXX) XXX - XXXX"
          pattern="[+]{1}[0-9]{11,14}"
          className="rounded-md border-2 border-gray-500 p-2 text-black"
        ></input>
        <button
          className="bg-appOrange hover:bg-green-800 rounded-sm text-white p-2 transition-all"
          onClick={() =>
            checkPhoneNumber(document.getElementById("phone").value)
          }
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default ReturningUser;
