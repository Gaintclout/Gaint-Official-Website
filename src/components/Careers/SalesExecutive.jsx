import React from "react";
import {
  MapPin,
  Clock,
  Building2,
  Users,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

const SalesExecutive = ({ goBack, isOpen = true }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Back */}
      <button onClick={goBack} className="mb-6 text-blue-600 hover:underline">
        ← Back
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">
          Sales Executive – AI Training Programs
        </h1>

        <p className="mt-2 opacity-90">
          Join our team and help drive enrollments for AI training programs
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Hyderabad
          </p>

          <p className="flex items-center gap-2">
            <Clock size={18} /> Full-Time
          </p>

          <p className="flex items-center gap-2">
            <Users size={18} /> 2-3 Years Experience
          </p>

          <p className="flex items-center gap-2">
            <Building2 size={18} /> Gaint Clout Technologies
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Job Overview
        </h3>

        <p className="text-gray-700">
          We are looking for a motivated and result-driven Sales Executive to
          generate leads, nurture prospects, and convert them into enrollments
          for our AI training programs.
        </p>
      </div>

      {/* Sections */}
      {[
        {
          title: "Key Responsibilities",
          data: [
            "Identify and generate new leads through various channels",
            "Manage and organize leads using Google Sheets or CRM",
            "Conduct consistent follow-ups with prospects",
            "Explain AI training programs effectively",
            "Schedule and coordinate demo sessions",
            "Convert leads into successful enrollments",
            "Negotiate and close sales",
            "Meet monthly sales targets",
            "Maintain positive customer relationships",
            "Conduct market research and identify opportunities",
            "Collaborate with internal teams for onboarding",
          ],
        },

        {
          title: "Qualifications",
          data: [
            "Bachelor’s degree in Business, Marketing, or related field",
            "3 years of experience in sales or similar role",
            "Strong communication and interpersonal skills",
            "Ability to handle follow-ups and convert leads",
            "Target-oriented mindset",
            "Self-motivated and disciplined",
            "Ability to work independently and in a team",
          ],
        },

        {
          title: "Preferred Skills",
          data: [
            "Lead generation experience",
            "CRM handling",
            "Sales negotiation",
            "Client relationship management",
          ],
        },

        {
          title: "Benefits",
          data: [
            "Hyderabad-based work opportunity",
            "Career growth opportunities",
            "Performance-based incentives",
            "Exposure to AI industry",
          ],
        },

        {
          title: "Selection Process",
          data: [
            "Profile Screening",
            "HR Discussion",
            "Sales Interview",
            "Final Selection",
          ],
        },
      ].map((section, i) => (
        <div key={i} className="bg-white mt-6 p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">
            {section.title}
          </h3>

          <ul className="space-y-2">
            {section.data.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-gray-700">
                <span className="text-blue-600">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Apply */}
      <div className="bg-indigo-600 text-white mt-8 p-6 rounded-2xl shadow-lg text-center">
        <h3 className="text-xl font-bold mb-3">Apply Now</h3>

        {isOpen ? (
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHrmKfFM_U89tgx3IquGWgUpjCnuNDNXJGBwpaoiEd1RLi2g/viewform"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition">
              Apply <ExternalLink size={16} />
            </button>
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="bg-gray-200 text-gray-500 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto cursor-not-allowed"
          >
            Position Closed
          </button>
        )}

        <div className="mt-4 text-sm space-y-1">
          <p className="flex justify-center gap-2">
            <Mail size={16} /> info@gaintclout.com
          </p>

          <p className="flex justify-center gap-2">
            <Phone size={16} /> +91 8897238849
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesExecutive;
