import React, { useState } from "react";
import JobCard from "./JobCard";
import ASE from "./ASE";
import GIS from "./GIS";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      title: "Associate Software Engineer",
      location: "Hyderabad",
      type: "Full-Time",
      component: "ASE",
    },
    {
      title: "GIS Analyst",
      location: "Chennai",
      type: "Contract",
      component: "GIS",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 px-6 py-10">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        <a
          href="/"
          className="inline-block text-sm text-blue-600 hover:text-blue-800 mb-4"
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
      </div>
    </div>
  );
};

export default Careers;