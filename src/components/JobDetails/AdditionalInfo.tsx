import React from "react";

interface InfoProps {
  employment_type: string[],
  benefits: string[],
}

export const AdditionalInfo: React.FC<InfoProps> = ({ employment_type, benefits }) => {
  return (
    <>
      <h2 className="font-title font-bold text-3xl text-general-dark tracking-general border-b-map-regular border-b pb-2.5 mb-4">
        Additional info
      </h2>
      <h4 className="font-normal text-lg tracking-normal text-general-dark opacity-80 md:opacity-100">
        Employment type
      </h4>
      <ul className="flex mt-2.5 mb-5 -mx-1.5">
        {
          employment_type.map((type, i) => {
            return (
              <li
                key={i}
                className="flex basis-[32%] justify-end items-center h-12 mx-1.5 px-5 rounded-lg 
                  bg-employment-back border border-employment-border 
                  lg:px-0 lg:justify-center"
              >
                <span className="font-title font-bold text-base tracking-general text-employment">
                  {type}
                </span>
              </li>
            )
          })
        }
      </ul>
      <h4 className="font-normal text-lg tracking-normal text-general-dark opacity-80 md:opacity-100">
        Benefits
      </h4>
      <ul className="flex mt-2.5 mb-5 -mx-1.5">
        {
          benefits.map((type, i) => {
            return (
              <li
                key={i}
                className="flex basis-[32%] justify-end items-center h-12 mx-1.5 px-5 rounded-lg 
                  bg-benefits-back border border-benefits-border lg:px-0 lg:justify-center"
              >
                <span className="font-title font-bold text-base tracking-general text-benefits">
                  {type}
                </span>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}