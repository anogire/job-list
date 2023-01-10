import React from "react";

export const Header: React.FC = () => {
  return (
    <>
      <h1 className="font-title font-bold text-3xl text-general-dark tracking-general border-b-map-regular border-b pb-2.5 mb-4">
        Job Details
      </h1>
      <div
        className="h-full flex items-start font-title font-normal text-base tracking-normal text-general-dark
          md:font-general md:absolute md:right-0 md:top-0 md:text-lg md:opacity-90"
      >
        <div className="flex items-center mr-7">
          <img src="./images/flag.svg" width="18px" height="23px" className="hidden mr-2 md:mr-4 lg:block" alt="save marker" />
          <img src="./images/starEmpty.png" width="21px" height="20px" className="mr-2 md:mr-4 lg:hidden" alt="save marker" />
          <span>Save to my list</span>
        </div>
        <div className="flex items-center">
          <img src="./images/share.svg" width="19px" height="20px" className="mr-2 md:mr-4" alt="share marker" />
          <span>Share</span>
        </div>
      </div>
    </>
  );
}