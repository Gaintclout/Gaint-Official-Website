import React from "react";
import { Briefcase, MapPin, ExternalLink } from "lucide-react";

const JobCard = ({ job, onClick }) => {
  return (
    <div className="group bg-white border border-gray-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* TOP SECTION */}
      <div className="flex justify-between items-start">
        <div>
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {job.company || "Gaint Clout"}
          </span>

          <h2 className="text-xl font-bold text-gray-800 mt-1 group-hover:text-blue-600 transition">
            {job.title}
          </h2>
        </div>

        <div className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
          {job.salary || "Competitive"}
        </div>
      </div>

      {/* INFO */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} />
          {job.location}
        </div>

        <div className="flex items-center gap-1.5">
          <Briefcase size={16} />
          <span className="capitalize">{job.type}</span>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="mt-4 text-gray-500 text-sm line-clamp-2 leading-relaxed">
        {job.description ||
          "Join our team to build scalable and impactful solutions in a collaborative environment."}
      </p>

      {/* BUTTON */}
      <div className="mt-6">
        <button
          onClick={onClick}
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
        >
          View Details
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default JobCard;