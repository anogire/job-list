import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { COUNT_PER_PAGE, TOKEN, URL_BASE } from "./utils/consts";
import { JobInfo } from "./utils/types";
import { JobList } from "./components/JobList";
import { JobDetails } from "./components/JobDetails";

const App = () => {
  const [jobs, setJobs] = useState<JobInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        };
        const res = await axios.get(URL_BASE, config);
        setJobs(res.data);
        setLoading(false);

      } catch (e: unknown) {
        setError(true);
        setLoading(false);
        console.error(e instanceof Error ?
          `Log for error: ${e.message}` :
          'Something went wrong with the data loading');
      }
    };

    fetchJobs();
  }, []);

  const indexOfLastJob = currentPage * COUNT_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - COUNT_PER_PAGE;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / COUNT_PER_PAGE);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const list = <JobList
    currentJobs={currentJobs}
    totalPages={totalPages}
    paginate={paginate}
    currentPage={currentPage}
    loading={loading}
    error={error}
  />;

  return (
    <Router>
      <Routes>
        <Route path="/details" element={<JobDetails />} />
        <Route path="/" element={list} />
        <Route path="*" element={list} />
      </Routes>
    </Router>
  )
};

export default App;