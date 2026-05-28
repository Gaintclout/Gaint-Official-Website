
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
    },

    {
      title: "GIS Analyst",
      location: "Chennai",
      type: "Contract",
      component: "GIS",
    },

    {
      title: "AI Engineer – Project Lead",
      location: "Remote",
      type: "Freelancer",
      component: "AI_engineer",
    },

    {
      title: "Sales Executive – AI Training Programs",
      location: "Remote",
      type: "Full-Time",
      component: "SalesExecutive",
    },

    {
      title: "Digital Marketing Executive",
      location: "Remote",
      type: "Full-Time",
      component: "DigitalMarketingExecutive",
    },
  ];

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
              <JobCard job={job} />
            </div>
          ))}

        </div>
      )}

      {/* JOB DETAILS */}
      <div className="max-w-4xl mx-auto mt-10">

        {selectedJob === "ASE" && (
          <ASE goBack={() => setSelectedJob(null)} />
        )}

        {selectedJob === "GIS" && (
          <GIS goBack={() => setSelectedJob(null)} />
        )}

        {selectedJob === "AI_engineer" && (
          <AI_engineer goBack={() => setSelectedJob(null)} />
        )}

        {selectedJob === "SalesExecutive" && (
          <SalesExecutive goBack={() => setSelectedJob(null)} />
        )}

        {selectedJob === "DigitalMarketingExecutive" && (
          <DigitalMarketingExecutive
            goBack={() => setSelectedJob(null)}
          />
        )}

      </div>
    </div>
  );
};

export default Careers;
