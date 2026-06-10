
import React, { useState } from "react";

import JobCard from "./JobCard";

import ASE from "./ASE";
import GIS from "./GIS";
import AI_engineer from "./AI_engineer";
import SalesExecutive from "./SalesExecutive";
import DigitalMarketingExecutive from "./DigitalMarketingExecutive";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Associate Software Engineer",
      location: "Andhra Pradesh",
      type: "Full-Time",
      component: "ASE",
      isOpen: true,
    },

    {
      title: "GIS Analyst",
      location: "Chennai",
      type: "Contract",
      component: "GIS",
      isOpen: true,
    },

    {
      title: "AI Engineer – Project Lead",
      location: "Remote",
      type: "Freelancer",
      component: "AI_engineer",
      isOpen: true,
    },

    {
      title: "Sales Executive – AI Training Programs",
      location: "Hyderabad",
      type: "Full-Time",
      component: "SalesExecutive",
      isOpen: true,
    },

    {
      title: "Digital Marketing Executive",
      location: "Hyderabad",
      type: "Full-Time",
      component: "DigitalMarketingExecutive",
      isOpen: true,
    },
  ];

  const selectedJobDetails = jobs.find((job) => job.component === selectedJob);
  const selectedJobIsOpen = selectedJobDetails?.isOpen !== false;

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white px-6 py-10">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">

        

<a
  href="/"
  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
  bg-white/80 backdrop-blur-md
  border border-gray-200 shadow-md
  text-gray-700 font-semibold text-sm
  hover:bg-blue-600 hover:text-white
  hover:shadow-lg hover:scale-105
  transition-all duration-300"
>
  ← Go Back
</a>




        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          Careers at <span className="text-blue-600">Gaint Clout</span>
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Join our team and build impactful solutions
        </p>

      </div>

      {/* JOB LIST */}
      {!selectedJob && (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {jobs.map((job, index) => (
            <div
              key={index}
              onClick={() => setSelectedJob(job.component)}
              className="cursor-pointer transform transition duration-300 hover:scale-105"
            >
              <JobCard
                job={job}
                onClick={() => setSelectedJob(job.component)}
              />
            </div>
          ))}

        </div>
      )}

      {/* JOB DETAILS */}
      <div className="max-w-4xl mx-auto mt-10">

        {selectedJob === "ASE" && (
          <ASE
            goBack={() => setSelectedJob(null)}
            isOpen={selectedJobIsOpen}
          />
        )}

        {selectedJob === "GIS" && (
          <GIS
            goBack={() => setSelectedJob(null)}
            isOpen={selectedJobIsOpen}
          />
        )}

        {selectedJob === "AI_engineer" && (
          <AI_engineer
            goBack={() => setSelectedJob(null)}
            isOpen={selectedJobIsOpen}
          />
        )}

        {selectedJob === "SalesExecutive" && (
          <SalesExecutive
            goBack={() => setSelectedJob(null)}
            isOpen={selectedJobIsOpen}
          />
        )}

        {selectedJob === "DigitalMarketingExecutive" && (
          <DigitalMarketingExecutive
            goBack={() => setSelectedJob(null)}
            isOpen={selectedJobIsOpen}
          />
        )}

      </div>
    </div>
  );
};

export default Careers;
