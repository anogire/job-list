import React from "react";
import { getFormattedDate } from "../../utils/helpers";
import { DescriptionProps } from "../../utils/types";

interface InfoProps {
  title: string,
  date: Date,
  salaryRange: string[],
  formattedDescription: DescriptionProps,
}

export const Content: React.FC<InfoProps> = ({ title, date, salaryRange, formattedDescription }) => {
  return (
    <>
      <button
        className="mb-8 hidden flex justify-center items-center py-4 px-7 bg-general-dark text-white rounded-lg 
          cursor-pointer border border-general-dark md:block 
          focus:outline-none hover:bg-white hover:text-general-dark focus:bg-white focus:text-general-dark"
        aria-label="apply job"
      >
        <span className="font-title font-bold text-xs tracking-general font-semibold uppercase">
          Apply now
        </span>
      </button>

      <div className="flex flex-col relative mb-2">
        <span className="w-full mb-2 font-title font-bold text-2xl tracking-title text-general-dark md:w-2/3">
          {title}
        </span>
        <div className="flex justify-between items-center">
          <span
            className="w-1/2 font-title font-light text-xs text-additional-gray 
              md:font-general md:font-normal md:text-lg md:tracking-normal"
          >
            {getFormattedDate(date)}
          </span>
          <div className="w-1/2 flex flex-col ml-2 md:ml-5 md:absolute md:top-0 md:right-0 md:w-fit">
            <span
              className="font-title text-right font-bold text-xl tracking-general text-general-dark order-last 
                md:order-first md:text-left"
            >
              &#x20ac;&nbsp;{salaryRange[0]}&ndash;{salaryRange[1]}
            </span>
            <span
              className="font-title text-right font-normal text-lg tracking-normal text-general-dark 
                md:text-left lg:font-general"
            >
              Brutto, per year
            </span>
          </div>
        </div>
      </div>

      <div className="font-title font-normal text-lg tracking-normal text-general-dark sm:font-general">
        {formattedDescription.description}
      </div>
      <div>
        <h3 className="font-title font-bold text-xl tracking-title text-general-dark mb-2 mt-7">
          Responsibilities
        </h3>
        <ul>
          {formattedDescription.responsibilities.map((item, i) => {
            return (
              <li
                key={i}
                className="mb-4 font-title font-normal text-lg tracking-normal text-general-dark sm:font-general"
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h3 className="font-title font-bold text-xl tracking-title text-general-dark mb-2 mt-7">
          Compensation & Benefits:
        </h3>
        <ul>
          {formattedDescription.benefits.map((item, i) => {
            return (
              <li
                key={i}
                className="font-title font-normal text-lg tracking-normal text-general-dark 
                  sm:font-general before:content-['\25A0'] before:text-marker before:-ml-0 md:before:-ml-5"
              >
                <span className="pl-4 md:pl-2.5">
                  {item}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      <button
        className="mt-8 flex justify-center items-center mx-auto py-4 px-7 bg-general-dark text-white rounded-lg md:mx-0 
          cursor-pointer border border-general-dark 
          focus:outline-none hover:bg-white hover:text-general-dark focus:bg-white focus:text-general-dark"
        aria-label="apply job"
      >
        <span className="font-title font-bold text-xs tracking-general font-semibold uppercase">
          Apply now
        </span>
      </button>
    </>
  );
}