import React from "react";
import { useNavigate } from "react-router";

export const GoBack: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center py-4 px-5 bg-general-dark bg-opacity-10 rounded-lg cursor-pointer 
          focus:outline-none hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4"
        aria-label="go to the previous page"
      >
        <img src="./images/goToBack.svg" className="mr-5" alt="go to the previous page" />
        <span className="font-title font-bold text-xs tracking-general text-general-dark uppercase">
          Return to Job Board
        </span>
      </button>
    </>
  );
}