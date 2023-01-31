import React from "react";

const ReturningUser = () => {

    const checkPhoneNumber = (phoneNumber) => {
        //Firebase stuff
        //if true
            //build survey complete URL and send to page
        //else 
            //give error code
    }
  return (
    <>
      <div className="flex flex-col items-center min-h-screen dark:bg-slate-900 dark:text-white p-16 gap-10">
        <h1 className="text-3xl text-green-500">Welcome Back</h1>
        <h3>Please Enter Your Phone Number Below</h3>
        <input
            id="phone"
          type="tel"
          placeholder="(XXX) XXX - XXXX"
          pattern="[+]{1}[0-9]{11,14}"
        ></input>
        <button className="bg-green-500 text-white" onClick={() => checkPhoneNumber(document.getElementById("phone").value)}>Submit</button>
        <Link to="/ReturningUser">
          <button className="bg-green-500 text-white">
            Haven't completed the Survey?
          </button>
        </Link>
      </div>
    </>
  );
};

export default ReturningUser;
