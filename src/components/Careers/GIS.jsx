import React from "react";
import {
  MapPin,
  Clock,
  Users,
  Building2,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

const GIS = ({ goBack }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Back */}
      <button onClick={goBack} className="mb-6 text-blue-600 hover:underline">
        ← Back
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">GIS Analyst</h1>
        <p className="mt-2 opacity-90">
          Geospatial Data Analysis & Mapping Role
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
          <p className="flex gap-2"><MapPin size={18}/> Chennai</p>
          <p className="flex gap-2"><Clock size={18}/> 3–6 Months Contract</p>
          <p className="flex gap-2"><Users size={18}/> 10 Positions</p>
          <p className="flex gap-2"><Building2 size={18}/> Gaint Clout Technologies</p>
        </div>
      </div>

      {/* Job Summary */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Job Summary
        </h3>
        <p className="text-gray-700">
          We are looking for a detail-oriented GIS Analyst to support geospatial
          data analysis, mapping, and database management activities. The
          candidate will work closely with teams to interpret spatial data and
          deliver accurate mapping solutions.
        </p>
      </div>

      {/* Responsibilities */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Key Responsibilities
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Collect, manage, and analyze geospatial data</li>
          <li>• Create, edit, and update digital maps and layers</li>
          <li>• Perform spatial analysis using GIS tools</li>
          <li>• Maintain GIS databases and ensure data accuracy</li>
          <li>• Work with satellite imagery and GPS data</li>
          <li>• Generate reports and visualizations</li>
          <li>• Collaborate with cross-functional teams</li>
        </ul>
      </div>

      {/* Required Skills */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Required Skills
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Strong understanding of GIS concepts</li>
          <li>• Hands-on experience with ArcGIS / QGIS</li>
          <li>• Knowledge of spatial data formats</li>
          <li>• Basic SQL / database knowledge</li>
          <li>• Analytical and problem-solving skills</li>
          <li>• Attention to detail</li>
        </ul>
      </div>

      {/* Eligibility */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Eligibility Criteria
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Bachelor’s degree in Geography, GIS, Geoinformatics, or related field</li>
          <li>• 0–2 years of experience in GIS domain</li>
          <li>• Freshers with strong GIS knowledge can apply</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-3">
          Benefits
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Hands-on project experience</li>
          <li>• Industry exposure</li>
          <li>• Certificate & career growth opportunities</li>
        </ul>
      </div>

      {/* Apply */}
      <div className="bg-indigo-600 text-white mt-8 p-6 rounded-2xl text-center shadow-lg">
        <h3 className="text-xl font-bold mb-3">Apply Now</h3>

        <a href="https://forms.gle/QfrUUhQw6DrE8Zc58" target="_blank">
          <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition">
            Apply <ExternalLink size={16} />
          </button>
        </a>

        <div className="mt-4 text-sm space-y-1">
          <p className="flex justify-center gap-2">
            <Mail size={16}/> talent-acquisition@gaintclout.com
          </p>
          <p className="flex justify-center gap-2">
            <Phone size={16}/> +91 8897238849
          </p>
        </div>
      </div>
    </div>
  );
};

export default GIS;