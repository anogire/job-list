import React from "react";

import { useLocation } from 'react-router-dom';
import { getDescriptionJob, getSalary } from "../../utils/helpers";
import { JobInfo } from "../../utils/types";
import { ErrorApp } from "../ErrorApp";
import { Map } from "../Map";
import { AdditionalInfo } from "./AdditionalInfo";
import { AttachedImages } from "./AttachedImages";
import { Content } from "./Content";
import { GoBack } from "./GoBack";
import { Header } from "./Header";


export const JobDetails: React.FC = () => {
  const locationProps = useLocation();
  if (!locationProps.state) {
    return <ErrorApp />
  }

  const {
    title,
    description,
    createdAt: date,
    salary,
    pictures,
    employment_type,
    benefits,
    location: { lat, long },
    name,
    address,
    phone,
    email } = locationProps.state as JobInfo;

  const salaryRange = getSalary(salary);
  const formattedDescription = getDescriptionJob(description);

  return (
    <main className="bg-white">
      <section
        className="container min-w-[25rem] min-h-screen mx-auto flex flex-col px-2.5 py-2.5 
          md:py-5 lg:flex-row lg:justify-between"
      >
        <div className="w-full flex flex-col lg:mr-10 xl:mr-32">
          <div className="relative mb-8 order-1">
            <Header />
          </div>
          <div className="mb-20 order-2">
            <Content
              title={title}
              date={date}
              salaryRange={salaryRange}
              formattedDescription={formattedDescription}
            />
          </div>
          <div className="mb-20 order-3 md:order-4">
            <AttachedImages pictures={pictures} />
          </div>
          <div className="mb-20 order-4 md:order-3">
            <AdditionalInfo employment_type={employment_type} benefits={benefits} />
          </div>
          <div className="mb-10 order-5">
            <GoBack />
          </div>
        </div>
        <div className="w-full mb-5 align-top lg:mb-0 lg:max-w-[25rem]">
          <Map lat={lat} long={long} name={name} address={address} phone={phone} email={email} />
        </div>
      </section>
    </main>
  );
}
