import React, { useState } from "react";
import { Link } from "react-router-dom";

const arrowList = [
  "Title: AI Agents & Their Role in Future Technologies",
  "Duration: 2 days",
  "Mode: In-Person (On-Campus)",
  "Outcome: Understanding AI Agents, hands-on experience in building AI models, and career guidance",
];

const outcomes = [
  "Students will gain hands-on AI agents development skills",
  "They will understand job roles and career paths in AI",
  "They will have projects to showcase in resumes and LinkedIn",
  "Some students may opt for future AI training or internships",
];

const accordionSections = [
  {
    title: "AI Agent Workshop - Unlock the Future of AI!",
    content:
      "AI Agent Workshop - Master the Future of Intelligent Automation. 2-day hands-on training for engineering students. Location: St. Peter's Engineering College, Hyderabad. Date: Soon.",
  },
  {
    title: "Who Should Attend?",
    content:
      "B.Tech (CSE, IT, AI & ML, Data Science) students. Anyone passionate about AI, automation, and future technologies. Beginners and intermediate learners looking to build AI-powered projects. Highlights include introduction to AI agents, machine learning basics, chatbot hands-on session, NLP and OpenAI APIs, career guidance, and completion certification from Gaint Clout Technologies.",
  },
  {
    title: "Why Should You Attend?",
    content:
      "This workshop teaches how AI-driven agents work, how to build them, and how they transform industries like finance, healthcare, cybersecurity, and education. Includes hands-on development, real-world projects, resume building, career guidance, and industry expert mentorship.",
  },
  {
    title: "Workshop Agenda",
    content:
      "Day 1: Foundations of AI Agents - reactive, goal-based, learning agents, real-world use cases, Python and AI frameworks, and first model setup. Day 2: Advanced concepts - NLP, autonomous agents, web integrations, chatbot project, and AI career roadmap. Fee: Rs. 500. Eligibility: open to all engineering students. Register: https://forms.gle/9CnaCZkM7gxtUFobA. Contact: info@gaintclout.com, +91 88972 38849.",
  },
];

export default function Workshop() {
  const [openIndex, setOpenIndex] = useState(0);
  const bgStyle = {
    backgroundImage: "url('/apply-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="text-white min-h-screen py-12 px-4 md:px-8"
      style={bgStyle}
    >
      <section className="max-w-6xl mx-auto">
        <img
          src="/gaint-logo.png"
          alt="Gaint Logo"
          className="h-10 w-auto mb-6"
        />

        <Link
          to="/"
          className="inline-block border border-blue-500 text-blue-400 px-5 py-2 rounded-[20px] hover:bg-blue-500 hover:text-white transition-colors"
        >
          Back to Home
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mt-10">
          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/30">
              <h3 className="text-2xl font-semibold mb-4">AI Agent Workshop</h3>
              <p className="mb-3">Workshop Overview</p>
              <ul className="space-y-2">
                {arrowList.map((item) => (
                  <li key={item} className="relative pl-5 text-white/90">
                    <span className="absolute left-0 text-[#f5a425]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/9CnaCZkM7gxtUFobA"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-[#a12c2f] px-5 py-2 rounded text-white hover:opacity-90"
              >
                Register Now!
              </a>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/30">
              <h3 className="text-2xl font-semibold mb-4">Expected Outcome</h3>
              <ul className="space-y-2">
                {outcomes.map((item) => (
                  <li key={item} className="relative pl-5 text-white/90">
                    <span className="absolute left-0 text-[#f5a425]">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/9CnaCZkM7gxtUFobA"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 bg-[#f5a425] text-[#1f272b] px-5 py-2 rounded hover:opacity-90"
              >
                Join Us Now!
              </a>
            </div>
          </div>

          <div className="space-y-3">
            {accordionSections.map((section, index) => {
              const isOpen = openIndex === index;
              return (
                <article
                  key={section.title}
                  className="border border-white/10 rounded-xl overflow-hidden bg-white/5"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <span className="font-semibold">{section.title}</span>
                    <span className={`transition-transform ${isOpen ? "rotate-90" : ""}`}>
                      ❯
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-white/85 leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-14">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9 bg-white/5 border border-white/10 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-5">Let's get in touch</h2>
            <form className="grid md:grid-cols-3 gap-4">
              <input
                name="name"
                type="text"
                placeholder="YOUR NAME...*"
                className="bg-black/20 border border-white/15 rounded px-3 py-2"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="YOUR EMAIL..."
                className="bg-black/20 border border-white/15 rounded px-3 py-2"
                required
              />
              <input
                name="subject"
                type="text"
                placeholder="SUBJECT...*"
                className="bg-black/20 border border-white/15 rounded px-3 py-2"
                required
              />
              <textarea
                name="message"
                placeholder="YOUR MESSAGE..."
                className="md:col-span-3 bg-black/20 border border-white/15 rounded px-3 py-2 min-h-[120px]"
                required
              />
              <button
                type="submit"
                className="md:col-span-3 w-fit bg-[#a12c2f] px-5 py-2 rounded hover:opacity-90"
              >
                SEND MESSAGE NOW
              </button>
            </form>
          </div>

          <aside className="lg:col-span-3 bg-white/5 border border-white/10 rounded-xl p-6">
            <ul className="space-y-5 text-white/90">
              <li>
                <h6 className="font-semibold">Phone Number</h6>
                <span>+91 88972 38849</span>
              </li>
              <li>
                <h6 className="font-semibold">Email Address</h6>
                <span>info@gaintclout.com</span>
              </li>
              <li>
                <h6 className="font-semibold">Address</h6>
                <span>4th Floor, Orbit Building, Knowledge City, Hyderabad</span>
              </li>
              <li>
                <h6 className="font-semibold">Website URL</h6>
                <span>https://gaintclout.com/</span>
              </li>
            </ul>
          </aside>
        </div>

        <div className="mt-10 text-center text-white/70 text-sm">
          <p>
            @ All Rights Reserved
            <br />
            Developed by Gaint Clout Technologies
          </p>
        </div>
      </section>
    </div>
  );
}