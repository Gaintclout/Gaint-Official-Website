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
    <div className="min-h-screen bg-gray-100 p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Careers at Gaint Clout
      </h1>

      {/* JOB LIST */}
      {!selectedJob && (
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <JobCard
              key={index}
              job={job}
              onClick={() => setSelectedJob(job.component)}
            />
          ))}
        </div>
      )}

      {/* JOB DETAILS */}
      {selectedJob === "ASE" && <ASE goBack={() => setSelectedJob(null)} />}
      {selectedJob === "GIS" && <GIS goBack={() => setSelectedJob(null)} />}
    </div>
  );
};

export default Careers;
