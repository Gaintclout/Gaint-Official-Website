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

const AIProjectLead = ({ goBack, isOpen = true }) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      
      {/* Back */}
      <button
        onClick={goBack}
        className="mb-6 text-blue-600 hover:underline"
      >
        ← Back
      </button>

      {/* Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold">
          AI Engineer – Project Lead (Freelancer)
        </h1>

        <p className="mt-2 opacity-90">
          Work on advanced AI solutions and lead scalable AI projects
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Remote
          </p>

          <p className="flex items-center gap-2">
            <Clock size={18} /> Freelancer
          </p>

          <p className="flex items-center gap-2">
            <Users size={18} /> Project Lead Role
          </p>

          <p className="flex items-center gap-2">
            <Building2 size={18} /> Gaint Clout Technologies
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          Role Overview
        </h3>

        <p className="text-gray-700">
          Gaint Clout Technologies is hiring an experienced AI Engineer (Project Lead)
          to work on advanced AI projects. The role involves building scalable
          AI solutions, leading projects, and collaborating closely with clients
          to deliver innovative AI-powered applications.
        </p>
      </div>

      {/* Sections */}
      {[
        {
          title: "Key Responsibilities",
          data: [
            "Design and develop AI solutions using Azure Cloud and Azure AI services",
            "Build and manage AI agents, LLM-based applications, and RAG systems",
            "Develop workflows and automations using n8n",
            "Write clean and efficient Python code for AI applications",
            "Plan system architecture and ensure scalable solution design",
            "Lead AI projects from start to delivery",
            "Communicate with clients and provide technical solutions",
            "Prepare technical documentation and reports",
            "Guide and support team members when required",
          ],
        },

        {
          title: "Core Skills Required",
          data: [
            "Azure Cloud & Azure AI",
            "Python Development",
            "n8n Workflow Automation",
            "LLMs, RAG, and AI Agents",
            "System Design & Architecture",
            "Documentation & Technical Writing",
            "Client Communication & Handling",
            "Team Leadership",
          ],
        },

        {
          title: "Experience Requirements",
          data: [
            "Experience as a freelance AI Lead or similar role",
            "Hands-on experience delivering AI projects",
            "Familiarity with the Lovable platform",
            "Strong client handling experience",
            "Ability to lead and manage AI projects effectively",
          ],
        },

        {
          title: "Benefits",
          data: [
            "Work on advanced AI projects",
            "Remote work flexibility",
            "Leadership opportunities",
            "Exposure to enterprise AI solutions",
            "Collaborative and innovative environment",
          ],
        },

        {
          title: "Selection Process",
          data: [
            "Profile Screening",
            "Technical Discussion",
            "Client Interaction Round",
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

      {/* Apply Card */}
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

export default AIProjectLead;
