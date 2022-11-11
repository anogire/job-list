import React from "react";
import { JobInfo } from "../../utils/types";
import { ErrorApp } from "../ErrorApp";
import { Pagination } from "../Pagination";
import { Spinner } from "../Spinner";
import { Content } from "./Content";

interface JobListProps {
  currentJobs: JobInfo[],
  totalPages: number,
  paginate: (pageNumber: number) => void,
  currentPage: number,
  loading: boolean,
  error: boolean,
}

export const JobList: React.FC<JobListProps> = (props) => {
  const { currentJobs, totalPages, paginate, currentPage, loading = false, error = false } = props;
  const hasData = !(loading || error);

  const spinner = loading ? <Spinner /> : null;
  const err = error ? <ErrorApp /> : null;
  const content = hasData ?
    <section className="min-w-[25rem] min-h-screen bg-board-back">
      <Content items={currentJobs} />
      <Pagination
        totalPages={totalPages}
        paginate={paginate}
        currentPage={currentPage}
      />
    </section> :
    null;

  return (
    <main className="bg-white">
      {spinner}
      {err}
      {content}
    </main>
  )
};