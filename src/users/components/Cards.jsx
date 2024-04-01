import React from "react";
import step1 from "../../assets/step1.jpg";
import step2 from "../../assets/step2.jpg";
import step3 from "../../assets/step3.jpg";

const VaccinationSteps = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-center text-3xl font-bold mb-8">
        Get Vaccinated in 3 Steps
      </h2>
      <div className="flex flex-col px-16 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-4">
          <img
            src={step1}
            alt="Step 1"
            className="w-32 h-32 mb-4 rounded-full shadow-lg"
          />
          <p className="text-center">
            Step 1:Secure your spot on VaxTrack, get vaccinated hassle-free!
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500 mx-4 hidden md:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div className="flex flex-col items-center mb-8 md:mb-0 md:mx-4">
          <img
            src={step2}
            alt="Step 2"
            className="w-32 h-32 mb-4 rounded-full shadow-lg"
          />
          <p className="text-center">
            Step 2:Your appointment awaits on the chosen date and time.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-gray-500 mx-4 hidden md:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <div className="flex flex-col items-center md:ml-4">
          <img
            src={step3}
            alt="Step 3"
            className="w-32 h-32 mb-4 rounded-full shadow-lg"
          />
          <p className="text-center">
            Step 3:Don't forget to download your certificate post-vaccination!
          </p>
        </div>
      </div>
    </div>
  );
};

export default VaccinationSteps;
