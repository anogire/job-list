import React from "react";
import { VISIBLE_QUANTITY_PAGE } from "../../utils/consts";
import { getPaginationPages } from "../../utils/helpers";

interface JobListProps {
  totalPages: number,
  paginate: (pageNumber: number) => void,
  currentPage: number,
}

export const Pagination: React.FC<JobListProps> = ({ totalPages, paginate, currentPage, }) => {
  const pageNumbers: string[] = getPaginationPages(currentPage, totalPages, VISIBLE_QUANTITY_PAGE);

  return (
    <nav className="container mx-auto w-fit px-2.5 py-6 sm:py-10">
      <ul className="flex flex-wrap justify-center rounded-lg bg-white shadow-block">
        <li className="my-2 mr-2 sm:mr-10">
          <button
            key={'leftIcon'}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="go to the previous page"
            className={`flex items-center h-full px-2 border-r-2 border-r-not-active-page opacity-50 
              focus:outline-none sm:w-16 sm:px-4 
              ${currentPage !== 1 ? ' hover:opacity-100 focus:opacity-100' : ''}`
            }
          >
            <img src="./images/arrowLeft.svg" width="12px" height="18px" className="mr-2" alt="go to the previous page" />
          </button>
        </li>
        <li>
          {pageNumbers.map((number, i) => (
            <button
              key={i}
              onClick={() => paginate(+number)}
              disabled={number === '...'}
              aria-label={`go to the ${+number} page`}
              className={`font-title font-bold text-base px-2 py-2 border-b-2 focus:outline-none 
                sm:px-4 sm:py-3 sm:text-xl 
                ${currentPage === +number ?
                  ' text-active-page border-b-active-page cursor-auto' :
                  ' text-not-active-page border-b-white'}
                ${number !== '...' ?
                  ' hover:text-active-page hover:border-b-active-page focus:border-b-active-page cursor-pointer' :
                  ''}`
              }
            >
              {number}
            </button>
          ))}
        </li>
        <li className="my-2 ml-2 sm:ml-10">
          <button
            key={'rightIcon'}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="go to the next page"
            className={`flex justify-end items-center h-full px-2 border-l-2 border-l-not-active-page opacity-50 
              focus:outline-none sm:w-16 sm:px-4 
              ${currentPage !== totalPages ? ' hover:opacity-100 focus:opacity-100' : ''}`
            }
          >
            <img src="./images/arrowRight.svg" width="12px" height="18px" className="ml-2" alt="go to the next page" />
          </button>
        </li>
      </ul>
    </nav>
  );
}