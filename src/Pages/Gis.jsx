import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from "../Components/Header";

export default function GISPage() {
  const [menuOpen, setMenuOpen] = useState(false);


   {/* ================= GIS VS ================= */}
  const contents = [
  "The Problem",
  "Why Noise is a Governance Problem",
  "Our Solution",
  "Solution Domains",
  "System Architecture",
  'The AI "Brain"',
  "Accuracy & Validation",
  "Day vs Night Noise Maps",
  "Heatmaps & Hotspots",
  "Prediction Maps",
  "Who Will Pay",
  "Decision Support Examples",
  "Why GAINT",
];

 {/* ================= USE CASES ================= */}

 const points = [
    "Cities rely on manual or reactive noise monitoring",
    "No visibility of future noise hotspots",
    "Enforcement happens after complaints",
    "No scientific accuracy validation",
  ];

  {/* ================= governance section ================= */}
    const cards = [
    {
      title: "Health impact",
      desc: "Sleep disruption and stress",
    },
    {
      title: "Law & order",
      desc: "Night disturbances",
    },
    {
      title: "Festival & traffic noise",
      desc: "Seasonal spikes",
    },
    {
      title: "Court cases & citizen complaints",
      desc: "Legal implications",
    },
  ];


  return (
    <div className="font-sans text-gray-800">

      {/* ================= HEADER ================= */}
 
        <Header />
      {/* ================= HERO ================= */}
      <section
        className="relative text-center py-16 sm:py-20 md:py-28 px-4 bg-cover bg-center mt-16 md:mt-20 h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/gis-bg-image.png')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <motion.h1
            className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl text-green-400 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            GAINT GIS — Geographic Information Systems
          </motion.h1>

          <motion.p
            className="text-sm sm:text-xl md:text-xl lg:text-3xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Empowering spatial intelligence with AI-driven geospatial solutions
            for smart cities, disaster management, and infrastructure planning.
          </motion.p>

        </div>
      </section>

      {/* ================= GIS VS ================= */}
       <section className="w-full 
bg-gradient-to-br from-black via-[#020617] to-[#020024] 
text-white 
px-4 sm:px-6 md:px-12 lg:px-16 
py-10 md:py-16 lg:py-20 
flex flex-col md:flex-row items-start justify-between">

  {/* LEFT SIDE */}
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] 
    font-light leading-tight tracking-wide text-gray-200">
      TABLE OF <br /> CONTENTS
    </h1>
  </div>

  {/* RIGHT SIDE */}
  <div className="w-full md:w-1/2 flex gap-4 md:gap-6">

    {/* LINE */}
    <div className="w-[2px] bg-white/30 mt-1 hidden md:block"></div>

    {/* CONTENT LIST */}
    <div className="w-full">
      {contents.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center 
          py-1.5 sm:py-2 md:py-3 
          text-xs sm:text-sm md:text-lg lg:text-xl 
          text-gray-300 hover:text-white 
          transition duration-300"
        >
          <span className="pr-4">{item}</span>
          <span className="text-gray-500 text-xs sm:text-sm md:text-base">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>

{/*  ============governance section ==============  */}

     <section className="w-full bg-gradient-to-b from-black via-[#020617] to-[#020024] text-white px-6 md:px-16 py-14 md:py-20">

      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 mb-6 text-center md:text-left">
        Why Noise is a Governance Problem
      </h1>

      {/* SUBTITLE */}
      <p className="text-lg sm:text-xl md:text-2xl text-orange-400 font-medium mb-10 text-center md:text-left">
        Noise is not just pollution - it's a governance, health, and law-and-order issue.
      </p>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-indigo-900/70 backdrop-blur-lg border border-indigo-500/20 
            rounded-xl p-6 
            shadow-[0_10px_30px_rgba(0,0,0,0.5)] 
            hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] 
            transition duration-300"
          >
            {/* TITLE */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-3">
              {card.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm md:text-base">
              {card.desc}
            </p>
          </div>
        ))}

      </div>
    </section>

      {/* ================= USE CASES ================= */}

         <section className="w-full min-h-[80vh] relative text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/city-bg.jpg')", // 🔁 replace with your image
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 py-12 md:py-20 flex flex-col md:flex-row items-start justify-between">

        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-200 mb-6">
            The Problem
          </h1>

          {/* SUBTITLE */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-orange-400 font-medium mb-8 leading-relaxed">
            Current systems only tell what happened, not what will happen.
          </p>

          {/* POINTS */}
          <div className="space-y-5">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-4">

                {/* BOX */}
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md 
                bg-indigo-600/80 
                shadow-[0_0_15px_rgba(99,102,241,0.5)] 
                flex-shrink-0 mt-1"></div>

                {/* TEXT */}
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (OPTIONAL EMPTY FOR IMAGE VISIBILITY) */}
        <div className="hidden md:block md:w-1/2"></div>
      </div>
    </section>

      {/* <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-green-400 mb-8 md:mb-10">
          GIS Applications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Smart Cities",
            "Flood Prediction",
            "Agriculture",
            "Logistics",
            "Environment",
            "Defense",
          ].map((item, i) => (
            <div key={i} className="p-5 sm:p-6 bg-gray-900 text-white rounded-xl text-center">
              {item}
            </div>
          ))}
        </div>

      </section> */}

      {/* ================= governance section ================= */}


      
      {/* <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-green-400 mb-8 md:mb-10">
          GIS Roadmap
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Data Collection", "AI Integration", "Deployment", "GaaS"].map(
            (phase, i) => (
              <div key={i} className="p-5 sm:p-6 bg-gray-900 text-white rounded-xl text-center">
                {phase}
              </div>
            )
          )}
        </div>

      </section> */}

      {/* ================= FOOTER ================= */}
   <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">

    {/* Popular Links */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-[#c5a77b]">Career in AI</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Machine Learning</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
        <li><a href="/contact" className="hover:text-[#c5a77b]">Contact Us</a></li>
      </ul>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-[#c5a77b]">AI Text Generator</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Resume Builder</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">File Converter</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Data Formatter</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">PDF Tools</a></li>
      </ul>
    </div>

    {/* Company */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
      <ul className="space-y-2">
        <li><a href="/about" className="hover:text-[#c5a77b]">About Us</a></li>
        <li><a href="/service" className="hover:text-[#c5a77b]">Services</a></li>
        <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
        <li><a href="/career" className="hover:text-[#c5a77b]">Careers</a></li>
        <li><a href="/contact" className="hover:text-[#c5a77b]">Contact</a></li>
      </ul>
    </div>

    {/* Services */}
    <div>
      <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-[#c5a77b]">Website Design</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">App Development</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">AI & ML</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">Cloud</a></li>
        <li><a href="#" className="hover:text-[#c5a77b]">GIS</a></li>
      </ul>
    </div>

  </div>

  {/* Social Icons */}
  <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
    {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, i) => (
      <Icon key={i} className="hover:text-[#c5a77b] cursor-pointer transition" />
    ))}
  </div>

  {/* Logo */}
  <div className="text-center mt-10">
    <img src="/gaint-logo.png" className="mx-auto h-12 mb-4" />
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES
    </p>
  </div>

</footer>

    </div>
  );
}