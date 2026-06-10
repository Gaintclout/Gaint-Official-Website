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

const DigitalMarketingExecutive = ({ goBack, isOpen = true }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Back */}
      <button
        onClick={goBack}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">
          Digital Marketing Executive
        </h1>

        <p className="mt-2 opacity-90">
          Join our marketing team and drive impactful digital campaigns
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Hyderabad
          </p>

          <p className="flex items-center gap-2">
            <Clock size={18} /> Full-Time
          </p>

          <p className="flex items-center gap-2">
            <Users size={18} /> Minimum 3 Years Experience
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
          Assist the marketing department in creating content, running
          advertising campaigns, generating leads, and managing social
          media platforms.
        </p>
      </div>

      {/* Sections */}
      {[
        {
          title: "Key Responsibilities",
          data: [
            "Plan and execute digital marketing campaigns",
            "Manage social media accounts",
            "Run and optimize Google & Meta Ads",
            "Perform SEO and keyword research",
            "Analyze campaign performance and reports",
            "Coordinate with design and content teams",
            "Handle email marketing and lead generation",
            "Create creatives using Canva",
            "Write short-form and long-form content",
          ],
        },

        {
          title: "Required Skills",
          data: [
            "Strong knowledge of SEO, SEM, and social media marketing",
            "Experience with Google Analytics and Ads Manager",
            "Understanding of content marketing and branding",
            "Good communication and analytical skills",
          ],
        },

        {
          title: "Preferred Skills",
          data: [
            "Lead generation experience",
            "Campaign optimization",
            "Marketing automation tools",
            "Content strategy knowledge",
          ],
        },

        {
          title: "Benefits",
          data: [
            "Hyderabad-based work opportunity",
            "Career growth opportunities",
            "Creative work environment",
            "Exposure to digital branding projects",
          ],
        },

        {
          title: "Selection Process",
          data: [
            "Profile Screening",
            "Marketing Task / Discussion",
            "Interview Round",
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

export default DigitalMarketingExecutive;
