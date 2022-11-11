import React from "react";

export const ErrorApp: React.FC = () => {
  return (
    <section className="container h-screen mx-auto flex items-center">
      <div className="w-full rounded-lg shadow-block bg-board-back p-5 mx-2 md:w-1/2 md:mx-auto">
        <p className="font-title font-normal text-lg text-general-dark">
          Something went wrong with the data loading.<br />
          Please try again later.
        </p>
      </div>
    </section>
  );
}