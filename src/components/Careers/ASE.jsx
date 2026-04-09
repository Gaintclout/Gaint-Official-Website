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

const ASE = ({ goBack }) => {
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
        <h1 className="text-3xl font-bold">Associate Software Engineer</h1>
        <p className="mt-2 opacity-90">
          Join us under the Skill Development Initiative
        </p>

        <div className="grid md:grid-cols-2 gap-4 mt-5 text-sm">
          <p className="flex items-center gap-2">
            <MapPin size={18} /> Andhra Pradesh (All Districts)
          </p>
          <p className="flex items-center gap-2">
            <Clock size={18} /> Full-Time (1 Year)
          </p>
          <p className="flex items-center gap-2">
            <Users size={18} /> 26 Positions
          </p>
          <p className="flex items-center gap-2">
            <Building2 size={18} /> Gaint Clout Technologies
          </p>
        </div>
      </div>

      {/* About */}
      <div className="bg-white mt-6 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-blue-700 mb-2">
          About the Initiative
        </h3>
        <p className="text-gray-700">
          Gaint Clout Technologies is launching a statewide Skill Development
          Program to empower youth with industry-relevant software development
          skills. As part of this mission, we are hiring Associate Software
          Engineers across each district of Andhra Pradesh who will play a vital
          role in local training, tech development, and community engagement.
        </p>
      </div>

      {/* Sections */}
      {[
        {
          title: "Responsibilities",
          data: [
            "Assist in the development of web and mobile applications and bots (React, Node.js, Python, AI/ML, etc.)",
            "Support skill training workshops and bootcamps",
            "Implement AI and software projects",
            "Coordinate with colleges and training centers",
            "Maintain reports and updates",
            "Test and debug code",
            "Participate in training sessions",
          ],
        },
        {
          title: "Eligibility",
          data: [
            "B.Tech/B.E. (CSE, IT, ECE, EEE) or Diploma",
            "Basic coding skills (Python, JavaScript, Java, C/C++)",
            "Good communication (English & Telugu)",
            "Interest in teaching & development",
          ],
        },
        {
          title: "Preferred Skills",
          data: [
            "React / Node.js experience",
            "AI / ML knowledge",
            "Git & version control",
            "Leadership in college events",
          ],
        },
        {
          title: "Benefits",
          data: [
            "Monthly stipend",
            "Certificate & LOR",
            "Live project exposure",
            "Permanent role opportunity",
            "Leadership exposure",
          ],
        },
        {
          title: "Selection Process",
          data: [
            "Written Test",
            "Interview",
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

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJVI083H7QZ1PFFp0DQnUYlelXjQjHBaK8FJnk6kx5ie212g/viewform"
          target="_blank"
        >
          <button className="bg-white text-indigo-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 mx-auto hover:scale-105 transition">
            Apply <ExternalLink size={16} />
          </button>
        </a>

        <div className="mt-4 text-sm space-y-1">
          <p className="flex justify-center gap-2">
            <Mail size={16} /> talent-acquisition@gaintclout.com
          </p>
          <p className="flex justify-center gap-2">
            <Phone size={16} /> +91 8897238849
          </p>
        </div>
      </div>
    </div>
  );
};

export default ASE;