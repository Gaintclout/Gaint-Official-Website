import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import {
  Cpu,
  BrainCircuit,
  MessageCircle,
  Code,
  ShieldCheck,
  Atom,
  Palette,
  TrendingUp,
  MapPinned,          
  MonitorSmartphone,
  ChevronsLeftRightEllipsis,   
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Globe2 } from "lucide-react";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// -------------------- Services Data --------------------
const services = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "AI Development",
    desc: "Build intelligent systems with Machine Learning, Deep Learning, NLP, and Computer Vision.",
  },
  {
    icon: < ChevronsLeftRightEllipsis className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ better than Code
    title: "Mobile & Web Development",
    desc: "Design responsive websites, scalable apps, and cross-platform mobile applications.",
  },
  {
    icon: <MonitorSmartphone className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "Software Development",
    desc: "Custom software, outsourcing, testing, migration, and .NET consulting.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ correct
    title: "Cyber Security",
    desc: "Encryption, firewalls, threat detection, penetration testing, and compliance.",
  },
  {
    icon: <Atom className="w-12 h-12 text-indigo-600 animate-pulse" />,
    title: "R&D On Post-Quantum Cryptography & QKD",
    desc: "Quantum-safe encryption and next-gen cybersecurity research.",
  },
  {
    icon: <MapPinned className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ NOW VALID
    title: "Geographic Information System (GIS)",
    desc: "Spatial data analysis, mapping, smart city planning, and geospatial intelligence.",
    link: "/gis",
  },
  {
    icon: <Palette className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ correct
    title: "Creative Designing",
    desc: "Logos, branding, UI/UX, graphic design, and marketing creatives.",
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ correct
    title: "SEO & Digital Marketing",
    desc: "SEO, PPC, SMO, branding, and lead generation strategies.",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-indigo-600 animate-pulse" />, // ✅ correct
    title: "Consultation",
    desc: "Expert guidance on technology, business strategy, and digital transformation.",
  },
];



// -------------------- Component --------------------
export default function ServicesOffered() {
  const heroRef = useRef(null);

  return (
    <div className="font-gothic text-gray-800 scroll-smooth">
      <Header />
      <ScrollToTop />

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
         leading-none mb-6 animate-fadeInUp
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
          <h2 className="text-4xl  text-gray-900 mb-4">
   
   Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-2xl">
        we provide end-to-end technology solutions that merge intelligence, scalability, and creative design for businesses worldwide

                  </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
  {services.map((service, index) => (
    <div
      key={index}
      className="p-5 sm:p-6 md:p-8 bg-white rounded-xl shadow-md hover:shadow-2xl 
      transition transform hover:-translate-y-2 text-center"
    >
      {/* ICON */}
      <div className="w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-5 shadow-md bg-indigo-50">
        {service.icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg sm:text-xl md:text-2xl  text-gray-900 mb-2">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
        {service.desc}
      </p>
    </div>
  ))}
</div>
      </section>


      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}

