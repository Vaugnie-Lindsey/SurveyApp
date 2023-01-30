import React, { useRef } from "react";
import MCQuestion from "../Components/MCQuestion";
import NumberQuestion from "../Components/NumberQuestion";
import ScaleQuestion from "../Components/ScaleQuestion";
import MultipleScale from "../Components/MultipleScale";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion, setDoc } from "firebase/firestore";
import db from "../firebase";

const SurveyPage = () => {
  const navigate = useNavigate();
  const [queryParameters] = useSearchParams();
  const finalQues = [
    {
      question: "Your mother or female guardian:",
      name: "fguardian",
    },
    {
      question: "Your father or male guardian:",
      name: "mguardian",
    },
    {
      question: "Other family members:",
      name: "members",
    },
    {
      question: "Friends:",
      name: "friends",
    },
    {
      question: "A teacher:",
      name: "teacher",
    },
    {
      question: "A role model:",
      name: "arolemodel",
    },
    {
      question: "A Counselor:",
      name: "counselor",
    },
    {
      question: "Society or culture:",
      name: "spciety",
    },
    {
      question: "Your own abilities or skills:",
      name: "skills",
    },
    {
      question: "Your own passion or enjoyment",
      name: "passion",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    var data = new FormData(e.target);
    let formObject = Object.fromEntries(data.entries());
    console.log(formObject);
    console.log(formObject.name);
    let id = queryParameters.get("id");
    console.log(id);
    //Firebase stuff to handle data
    //Basically should be able to just uncomment and add correct collection + document
    const docRef = await doc(db, "Main", id);
    const thisDoc = await getDoc(docRef);
    const docData = thisDoc.data();
    console.log(docData);
    // console.log(docRef);
    await updateDoc(docRef, {
      "survey_completed": true,
      "response": formObject
    })
      console.log(queryParameters.get("id"));
      navigate(`/SurveyComplete?id=${queryParameters.get("id")}`);
    
  };

  const checkForComplete = () => {
    let complete = false;
    //check if user has already completed survey
    //If they have redirect them to share page
    //This will need to exist on informed consent as well
    if (complete) {
      //will need to grab tokenID from user to pass to next area
      //or can have survey complete page deal with that and not utilize the URL
      navigate(`/SurveyComplete?code=${queryParameters.get("id")}`)
    }
  }

  return (
    <form
      className="w-screen flex items-center justify-center dark:bg-slate-900 dark:text-white min-h-screen"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-col gap-10 pt-16 pb-16 w-3/5">
        <div>
          <h1 className="text-bold text-4xl">Background</h1>
          <div className="w-auto h-1 bg-black dark:bg-white"></div>
        </div>
        <MCQuestion
          options={["Text", "Email", "Facebook", "Twitter", "Instagram", "Other (Please Specify)"]}
          question="How were you referred here?"
          name="refer"
        />
        <NumberQuestion question="1. What is your age?" name="age" />
        <MCQuestion
          options={["Male", "Female", "Other"]}
          question="2. What is your gender?"
          name="gender"
        />
        <MCQuestion
          options={[
            "White",
            "Black / African American",
            "Asian",
            "American Indian or Alaska Native",
            "Native Hawaiian or Other Pacific Islander",
            "Other (Please Specify)",
          ]}
          question="3. What is your ethnicity/demographic"
          name="ethnicity"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="4. Are you a student"
          name="student"
        />
        <MCQuestion
          options={[
            "Astronomy",
            "Biology",
            "Chemistry",
            "Physics",
            "Computer Science",
            "Computer Engineering",
            "Mathematics / Statistician",
            "Civil Engineering",
            "Electrical Engineering",
            "Industrial Engineering",
            "Other (Please Specify)",
          ]}
          question="5. What field of STEM are you currently working or studying in?"
          name="field"
        />
        <MCQuestion
          options={[
            "Working towards Bachelor's",
            "Bachelor's",
            "Working towards Master's",
            "Master's ",
            "Working towards Doctorate",
            "Doctoral",
            "No Degree",
            "Other (Please Specify)",
          ]}
          question="6. What is the highest degree you hold or are currently working towards?"
          name="degree"
        />
        <NumberQuestion
          question="7. How many years have you been working in a STEM related field?"
          name="numYears"
        />
        <div>
          <h1 className="text-bold text-4xl">Experiences</h1>
          <div className="w-auto h-1 bg-black dark:bg-white"></div>
        </div>
        <MCQuestion
          options={[
            "Elementary school",
            "Middle school",
            "High school",
            "Other (Please Specify)",
          ]}
          question="8. When would you say you decided you wanted to pursue a STEM career?"
          name="education"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="9. Do you have a mother or female guardian in the STEM field?"
          name="mother"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="10. Do you have a father or male guardian in the STEM field?"
          name="father"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="11. Do you perceive your STEM field as shifting away from being male-dominated?"
          name="dominated"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="12. Do you have any female role models who are in a STEM field?"
          name="rolemodel"
        />
        <MCQuestion
          options={["Yes", "No"]}
          question="13. Are you involved with STEM clubs or organizations outside the classroom or workplace?"
          name="clubs"
        />
        <div>
          <h1 className="text-bold text-4xl">Scale</h1>
          <div className="w-auto h-1 bg-black dark:bg-white"></div>
          <p>
            Please indicate how much you agree with each following statement:
          </p>
        </div>
        <ScaleQuestion
          question="14. I feel I am not treated equally or fairly in your field based on gender."
          name="equal"
        />
        <ScaleQuestion
          question="15. I was interested in STEM related courses in high school:"
          name="stemrelated"
        />
        <ScaleQuestion question="16. I have female colleague(s) I can ask for help when I need it:" />
        <MultipleScale
          options={finalQues}
          question="17. The following factor influenced your decision to study your major / degree:"
          name="factors"
        />
        <button className="bg-green-500 hover:bg-green-800 rounded-sm w-1/5 text-white p-2 self-end transition-all">
          submit
        </button>
      </div>
    </form>
  );
};

export default SurveyPage;
