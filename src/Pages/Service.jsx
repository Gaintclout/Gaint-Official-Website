import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  Cpu,
  BrainCircuit,
  Bot,
  Workflow,
  Network,
  Database,
  MessageSquare,
  Handshake,
  Atom,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Globe2 } from "lucide-react";
import Footer from "@/components/Footer";

// -------------------- Services Data --------------------
const services = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "AI Development",
    desc: "Build intelligent systems with Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision. Focus on model design, training, optimization, and deployment for solving complex real-world problems.",
  },
  {
    icon: <Bot className="w-12 h-12 text-indigo-600 animate-bounce" />,
    title: "Mobile & Web Development",
    desc: "Design and build responsive websites, scalable web apps, and cross-platform mobile applications. Deliver enterprise portals, eCommerce platforms (B2B/B2C), and seamless integrations with social and cloud services.",
  },
  {
    icon: <Cpu className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
    title: "Software Development",
    desc: "Custom Software Development, Software Outsourcing, Software Testing & QA Services, Migration & Re-Engineering, and .NET Consulting.",
  },
  {
    icon: <Network className="w-12 h-12 text-indigo-600 animate-bounce" />,
    title: "Cyber Security",
    desc: "Encryption, Firewalls, Threat Detection, Penetration Testing, Authentication, Malware Protection, Forensics, Risk Management, and Compliance.",
  },
    {
  icon: <Atom className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
  title: "R&D On Post-Quantum Cryptography & Quantum Key Distribution",
  desc: "Research and development focused on quantum-safe encryption methods and QKD to ensure next-generation cybersecurity resilience in the post-quantum era.",
},
{
  icon: (
    <Globe2 className="w-12 h-12 text-indigo-600 animate-spin-slow" />
  ),
  title: "Geographic Information System (GIS)",
  desc: "Advanced GIS platform for spatial data analysis, mapping, and real-time decision-making. Enables smart city planning, land management, disaster monitoring, and geospatial intelligence for enterprises and governments.",
  link: "/gis",
},

  {
    icon: <Database className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "Creative Designing",
    desc: "Logo, Brochure, Corporate Identity, Graphic Design, Flash Animations, Website Layouts, Newsletters, and Print Collateral.",
  },
  {
    icon: <Workflow className="w-12 h-12 text-indigo-600 animate-spin-slow" />,
    title: "SEO & Digital Marketing",
    desc: "Search Engine Optimization (SEO), PPC, SMO, Brand Reputation, Internet Marketing, and Lead Generation Strategies.",
  },
   
{
  icon: <MessageSquare className="w-12 h-12 text-indigo-600 animate-bounce" />,
  title: "Consultation",
  desc: "Search Engine Optimization (SEO), PPC, SMO, Brand Reputation, Internet Marketing, and Lead Generation Strategies.",
},




];

// -------------------- Component --------------------
export default function ServicesOffered() {
  const heroRef = useRef(null);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Header />


      {/* ---------------- HERO / ABOUT SECTION ---------------- */}
      <section
        id="about"
        ref={heroRef}
        className="relative h-[500px] md:h-[500px] w-full flex items-center justify-end overflow-hidden bg-black"
      >
        {/* Background Video */}
      <img
  src="/service-1.jpeg"
  alt="Services Background"
  className="absolute top-0 left-0 w-full h-full object-cover"
/>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col items-end text-right text-white px-8 md:px-24 max-w-4xl">
       <h1
              className=" 
        font-semibold leading-none mb-6 animate-fadeInUp
        bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent        
        text-[100px] sm:text-[150px] md:text-[180px] lg:text-[200px] xl:text-[120px]
        drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]
      "
            >
              GAINT
            </h1>

          <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-200 max-w-[700px] leading-tight animate-fadeIn font-[Century Gothic]">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent ">
              BUSINESS 
            </span>{" "}
            with{" "}
            <span className="bg-gradient-to-r from-[#34A853] to-[#4285F4] bg-clip-text text-transparent">
              Seamless Solutions
            </span>
          </p>
        </div>
      </section>

      {/* ---------------- SERVICES GRID ---------------- */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-6xl  text-gray-900 mb-4">
   
   Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-3xl">
        WE PROVIDE END-TO-END TECHNOLOGY SOLUTIONS THAT MERGE INTELLIGENCE,
        SCALABILITY, AND CREATIVE DESIGN FOR BUSINESSES WORLDWIDE 

                  </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 text-center relative ${
                index % 2 === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center text-white rounded-md rotate-45 mx-auto mb-6 shadow-lg bg-gradient-to-r from-white-600 to-white-600">
                <div className="-rotate-45">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15)_0,transparent_40%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.2)_0,transparent_45%)]" />
          <div className="relative">
            <h3 className="text-3xl font-bold">
              Let’s Build the Future with AI
            </h3>
            <p className="mt-2 text-white/90 max-w-2xl">
              From strategy to deployment, GAINT partners with you to automate
              processes, enhance security, and deliver intelligent products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-white text-gray-900 font-semibold shadow hover:shadow-md"
              >
                Contact Us
              </a>
              <a
                href="#case-studies"
                className="px-5 py-2.5 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}

