import React from "react";
import { Briefcase, MapPin, ExternalLink } from "lucide-react"; // Optional: Using lucide-react for cleaner icons

const JobCard = ({ job, onClick }) => {
  return (
    <div className="group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {/* Company Name / Small Label */}
          <span className="text-xs font-bold text-blue-600 mb-1 block">
            {job.company || "Hiring Company"}
          </span>
          
          <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
            {job.title}
          </h2>
        </div>
        
        {/* Salary or Date Badge */}
        <div className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
          {job.salary || "Competitive"}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1.5">
          <MapPin size={16} className="text-gray-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-1.5">
          <Briefcase size={16} className="text-gray-400" />
          <span className="capitalize">{job.type}</span>
        </div>
      </div>

      {/* Description Snippet */}
      <p className="mt-4 text-gray-600 text-sm line-clamp-2 leading-relaxed">
        {job.description || "Join our team to help build the future of technology in a fast-paced environment..."}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={onClick}
          className="w-full bg-green-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          View Job Details
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  );
};

export default JobCard;