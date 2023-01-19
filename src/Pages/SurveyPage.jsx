import React from "react";
import MCQuestion from "../Components/MCQuestion";
import NumberQuestion from "../Components/NumberQuestion";
import ScaleQuestion from "../Components/ScaleQuestion";
import MultipleScale from "../Components/MultipleScale";
import { Navigate } from "react-router-dom";

const SurveyPage = () => {
    const finalQues = [
        {
            question: "Your mother or female guardian:",
            name: "fguardian"
        },
        {
           question:  "Your father or male guardian:",
           name: "mguardian"
        },
        {
            question: "Other family members:",
            name: "members"
        },
        {
            question: "Friends:",
            name: "friends"
        },
        {
            question: "A teacher:",
            name: "teacher"
        },
        {
            question: "A role model:",
            name: "arolemodel"
        },
        {
            question: "A Counselor:",
            name: "counselor"
        },
        {
            question: "Society or culture:",
            name: "spciety"
        },
        {
            question: "Your own abilities or skills:",
            name: "skills"
        },
        {
            question: "Your own passion or enjoyment",
            name: "passion"
        }
    ];

    const handleSubmit = () => {
        //Firebase stuff to handle data
        Navigate("/SurveyComplete");
    }

    return(
        <div className="w-screen flex items-center justify-center dark:bg-slate-900 text-white">
            <div className="flex flex-col gap-10 pt-16 pb-16 w-3/5">
                <div>
                    <h1 className="text-bold text-4xl">Background</h1>
                    <div className="w-auto h-1 bg-black dark:bg-white"></div>
                </div>
                <NumberQuestion question="1. What is your age?"/>
                <MCQuestion options={["Male", "Female", "Other"]} question="2. What is your gender?" name="gender"/>
                <MCQuestion options={["White", "Black / African American", "Asian", "American Indian or Alaska Native", "Native Hawaiian or Other Pacific Islander", "Other (Please Specify)"]} question="3. What is your ethnicity/demographic" name="ethnicity"/>
                <MCQuestion options={["Yes", "No"]} question="4. Are you a student" name="student"/>
                <MCQuestion options={["Astronomy", "Biology", "Chemistry", "Physics", "Computer Science", "Computer Engineering", "Mathematics / Statistician", "Civil Engineering", "Electrical Engineering", "Industrial Engineering", "Other (Please Specify)"]} question="5. What field of STEM are you currently working or studying in?" name="field"/>
                <MCQuestion options={["Working towards Bachelor's", "Bachelor's", "Working towards Master's", "Master's ", "Working towards Doctorate", "Doctoral", "No Degree", "Other (Please Specify)"]} question="6. What is the highest degree you hold or are currently working towards?" name="degree"/>
                <NumberQuestion question="7. How many years have you been working in a STEM related field?"/>
                <div>
                    <h1 className="text-bold text-4xl">Experiences</h1>
                    <div className="w-auto h-1 bg-black"></div>
                </div>
                <MCQuestion options={["Elementary school", "Middle school", "High school", "Other (specify)"]} question="8. When would you say you decided you wanted to pursue a STEM career?" name="education"/>
                <MCQuestion options={["Yes", "No"]} question="9. Do you have a mother or female guardian in the STEM field?" name="mother"/>
                <MCQuestion options={["Yes", "No"]} question="10. Do you have a father or male guardian in the STEM field?" name="father"/>
                <MCQuestion options={["Yes", "No"]} question="11. Do you perceive your STEM field as shifting away from being male-dominated?" name="dominated"/>
                <MCQuestion options={["Yes", "No"]} question="12. Do you have any female role models who are in a STEM field?" name="rolemodel"/>
                <MCQuestion options={["Yes", "No"]} question="13. Are you involved with STEM clubs or organizations outside the classroom or workplace?" name="clubs"/>
                <div>
                    <h1 className="text-bold text-4xl">Scale</h1>
                    <div className="w-auto h-1 bg-black"></div>
                    <p>Please indicate how much you agree with each following statement:</p>
                </div>
                <ScaleQuestion question="14. I feel I am not treated equally or fairly in your field based on gender." name="equal"/>
                <ScaleQuestion question="15. I was interested in STEM related courses in high school:" name="stemrelated"/>
                <ScaleQuestion question="16. I have female colleague(s) I can ask for help when I need it:"/>
                <MultipleScale options={finalQues} question="17. The following factor influenced your decision to study your major / degree:" name="factors"/>
                <button className="bg-red-500 rounded-sm w-1/5 text-white" onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    );
};

export default SurveyPage;