import React from "react";
import { Link } from "react-router-dom";
import { getFormattedDate } from "../../utils/helpers";
import { JobInfo } from "../../utils/types";

interface JobListProps {
  items: JobInfo[],
}

export const Content: React.FC<JobListProps> = ({ items }) => {

  return (
    <ul className="container mx-auto px-2.5 pt-2.5 md:pt-5">
      {items.map(item => {
        const { id, title, name, address, createdAt: date, pictures } = item;

        return (
          <li
            key={id}
            className="flex bg-board-card-mobile rounded-lg shadow-block mb-2 px-4 py-3 md:bg-white md:py-6"
          >
            <div className="flex shrink-0 items-center mr-5 md:items-start md:mr-7">
              <img src={pictures[0]} className="rounded-full aspect-square w-16 h-16 md:w-20 md:h-20" alt="job icon" />
            </div>
            <div className="w-full flex flex-col md:flex-row">
              <div className="w-full flex flex-col justify-between md:mr-7 xl:mr-48">
                <Link
                  to="/details"
                  state={item}
                  className="font-title font-normal text-lg tracking-general text-general-dark mb-2 line-clamp-2 contrast-125 
                    cursor-pointer md:contrast-100 md:opacity-80 md:font-bold md:text-xl 
                    focus:outline-none hover:underline hover:underline-offset-4 focus:underline focus:underline-offset-4"
                  aria-label="switch to job details"
                >
                  {title}
                </Link>
                <span className="font-title font-normal text-base text-general-gray mb-2">
                  {name}
                </span>
                <div className="flex items-center">
                  <img src="./images/address.svg" className="inline mr-2" alt="address marker" />
                  <span className="font-title font-normal text-base text-general-gray">
                    {address}
                  </span>
                </div>
              </div>
              <div className="w-full flex justify-between order-first mb-3 md:w-1/2 lg:w-1/3 md:order-last md:mb-0">
                <div className="flex shrink-0 items-center opacity-70 mr-5 md:opacity-100 md:mr-7">
                  <img src="./images/star.svg" className="h-2.5 md:h-3.5 lg:h-auto" alt="rating star" />
                  <img src="./images/star.svg" className="h-2.5 md:h-3.5 lg:h-auto" alt="rating star" />
                  <img src="./images/star.svg" className="h-2.5 md:h-3.5 lg:h-auto" alt="rating star" />
                  <img src="./images/star.svg" className="h-2.5 md:h-3.5 lg:h-auto" alt="rating star" />
                  <img src="./images/star.svg" className="h-2.5 md:h-3.5 lg:h-auto" alt="rating star" />
                </div>
                <div className="flex flex-col justify-between items-end">
                  <img src="./images/flag.svg" className="h-5 hidden md:inline" alt="location marker" />
                  <span className="font-title font-light text-sm text-general-gray text-right md:font-normal">
                    {getFormattedDate(date)}
                  </span>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  );
};