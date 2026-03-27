import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Header from "../components/Header";
import { Flame, Repeat, AlertTriangle } from "lucide-react";
import { Calendar, Target, FileText } from "lucide-react";
import {
  Building2,
  Landmark,
  Shield,
  Factory,
  LayoutDashboard,
} from "lucide-react";
import WhoWillPay from "../components/WhoWillPay";



const points = [
  "Cities rely on manual or reactive noise monitoring",
  "No visibility of future noise hotspots",
  "Enforcement happens after complaints",
  "No scientific accuracy validation",
];

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

export default function Gis() {
  const heroRef = useRef(null);

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      <Header />
/*--------------------------------- Hero Section ----------------------------------*/
      <section
  id="about"
  ref={heroRef}
  className="relative flex h-[400px] md:h-[500px] w-full items-center justify-center overflow-hidden bg-black px-4"
>
  <img
    src="/gis-bg-image.png"
    alt="Services Background"
    className="absolute top-0 left-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 max-w-4xl text-center">
    
    <motion.h1
      className="mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-green-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      GAINT GIS - Geographic Information Systems
    </motion.h1>

    <motion.p
      className="text-sm sm:text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Empowering spatial intelligence with AI-driven geospatial solutions
      for smart cities, disaster management, and infrastructure planning.
    </motion.p>

  </div>
</section>
{/*===========Problem Section =================*/}
       <section className="relative min-h-[80vh] w-full overflow-hidden text-white">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/the-problem.png')" }}
      />

      {/* FRONT BLUR */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-end px-4 sm:px-6 md:px-12 lg:px-16 py-10 md:py-16">

        {/* RIGHT SIDE BOX */}
        <div className="w-full md:w-[55%] lg:w-[45%] 
        bg-white/10 backdrop-blur-md 
        border border-white/10 
        rounded-2xl p-6 sm:p-8 md:p-10 
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]">

          {/* TITLE */}
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-light text-gray-200">
            The Problem
          </h1>

          {/* SUBTITLE */}
          <p className="mb-6 text-md sm:text-base md:text-2xl lg:text-xl text-orange-400 font-medium leading-relaxed">
            Current systems only tell what happened, not what will happen.
          </p>

          {/* POINTS */}
          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">

                {/* BULLET */}
                <div className="mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-md 
                bg-indigo-500/80 
                shadow-[0_0_12px_rgba(99,102,241,0.5)] flex-shrink-0"></div>

                {/* TEXT */}
                <p className="text-xs sm:text-sm md:text-xl text-gray-200 leading-relaxed">
                  {point}
                </p>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
      {/*===========Why Noise is a Governance Problem Section  =================*/}
      

      <section className="w-full bg-gradient-to-b from-black via-[#ffffff] to-[#] px-6 py-14 text-white md:px-16 md:py-20">
        <h1 className="mb-6 text-center text-3xl font-light text-black sm:text-4xl md:text-left md:text-5xl lg:text-5xl">
          Why Noise is a Governance Problem
        </h1>

        <p className="mb-10 text-center text-lg font-medium text-orange-400 sm:text-xl md:text-left md:text-3xl">
          Noise is not just pollution - it&apos;s a governance, health, and
          law-and-order issue.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-indigo-500/20 bg-indigo-900/70 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]"
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-200 md:text-xl">
                {card.title}
              </h3>

              <p className="text-sm text-gray-400 md:text-base">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
{/*===========Our Solution Section  =================*/}


     <section className="relative w-full min-h-[80vh] overflow-hidden text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/map.png')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020024]/95 via-black/50 to-black/10"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full px-6 md:px-16 py-16">

        {/* TOP TITLE */}
        <h2 className="text-3xl md:text-5xl text-gray-200 mb-4">
          Our Solution
        </h2>

        {/* BIG HEADING */}
        <h1 className="text-4xl md:text-4xl text-orange-400 font-light leading-tight mb-10">
          From noise data to actionable intelligence
        </h1>

        {/* SUBTITLE */}
        <p className="text-yellow-300 text-2xl mb-8">
          UNIPS provides:
        </p>

        {/* 🔥 GRID (IMPORTANT FIX) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-yellow-300">

          {/* LEFT SIDE */}
          <ul className="space-y-6 text-lg md:text-2xl">
            <li className="flex items-center gap-4">
              <span className="text-yellow-400 text-3xl">•</span>
              Predictive noise intelligence
            </li>

            <li className="flex items-center gap-4">
              <span className="text-yellow-400 text-3xl">•</span>
              Day vs Night analysis
            </li>

            <li className="flex items-center gap-4">
              <span className="text-yellow-400 text-3xl">•</span>
              Hotspot identification
            </li>
          </ul>

          {/* RIGHT SIDE */}
          <ul className="space-y-6 text-lg md:text-2xl">
            <li className="flex items-center gap-4">
              <span className="text-yellow-400 text-3xl">•</span>
              Accuracy-validated AI predictions
            </li>

            <li className="flex items-center gap-4">
              <span className="text-yellow-400 text-3xl">•</span>
              GIS-ready decision maps
            </li>
          </ul>

        </div>

      </div>
    </section>

{/*===========pipeline/architecture =================*/}
<section className="relative w-full min-h-[80vh] overflow-hidden text-white flex flex-col items-center justify-center">

  {/* BACKGROUND */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105"
    style={{ backgroundImage: "url('/architecture-bg.jpeg')" }}
  />
  <div className="absolute inset-0 bg-black/70" />

  <div className="relative z-10 w-full flex flex-col items-center px-6">

    {/* TITLE */}
    <div className="text-center mb-16">
      <h1 className="text-3xl md:text-5xl font-light mb-2">
        UNIPS System Architecture
      </h1>
      <p className="text-orange-400 text-lg">
        AI is the brain, GIS is the face.
      </p>
    </div>

    {/* SVG */}
    <svg viewBox="0 0 1200 500" className="w-full max-w-6xl">

      {/* MAIN PATH */}
      <path
        d="
          M100 250
          L100 100
          Q100 50 150 50
          L350 50
          Q400 50 400 100
          L400 400
          Q400 450 450 450
          L650 450
          Q700 450 700 400
          L700 100
          Q700 50 750 50
          L950 50
          Q1000 50 1000 100
          L1000 250
        "
        stroke="#6366f1"
        strokeWidth="4"
        fill="none"
      />

      {/* DOTS */}
      <circle cx="100" cy="250" r="10" fill="#6366f1" />
      <circle cx="1000" cy="250" r="10" fill="#6366f1" />

      {/* 🔥 ALL 7 ARROWS */}

      {/* LEFT VERTICAL */}
      <polyline points="90,150 100,130 110,150" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* 🔥 NEW: LEFT CURVE (→) */}
      <polyline points="220,40 240,50 220,60" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* LEFT DOWN */}
      <polyline points="390,230 400,250 410,230" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* CENTER UP */}
      <polyline points="540,270 550,250 560,270" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* 🔥 NEW: RIGHT CURVE (→) */}
      <polyline points="820,40 840,50 820,60" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* RIGHT DOWN */}
      <polyline points="690,230 700,250 710,230" stroke="#6366f1" strokeWidth="3" fill="none"/>

      {/* RIGHT VERTICAL */}
      <polyline points="990,270 1000,250 1010,270" stroke="#6366f1" strokeWidth="3" fill="none"/>


      {/* TEXT */}

      <text x="250" y="130" fill="white" fontSize="18" textAnchor="middle">
        Historical Noise
      </text>
      <text x="250" y="155" fill="#9ca3af" fontSize="13" textAnchor="middle">
        Raw sensor and archive data
      </text>

      <text x="250" y="320" fill="white" fontSize="16" textAnchor="middle">
        Python AI Brain
      </text>
      <text x="250" y="345" fill="#9ca3af" fontSize="13" textAnchor="middle">
        Data processing and modeling
      </text>

      <text x="550" y="245" fill="white" fontSize="18" textAnchor="middle">
        Prediction Engine
      </text>
      <text x="550" y="270" fill="#9ca3af" fontSize="13" textAnchor="middle">
        Generate forecasts and scores
      </text>

      <text x="850" y="130" fill="white" fontSize="18" textAnchor="middle">
        Decisions & Planning
      </text>
      <text x="850" y="155" fill="#9ca3af" fontSize="13" textAnchor="middle">
        Inform policy and enforcement
      </text>

      <text x="850" y="320" fill="white" fontSize="16" textAnchor="middle">
        GIS Maps (QGIS)
      </text>
      <text x="850" y="345" fill="#9ca3af" fontSize="13" textAnchor="middle">
        Visualize spatial predictions
      </text>

    </svg>

    {/* FOOT TEXT */}
    <p className="text-gray-300 text-sm mt-12 max-w-3xl text-center">
      The system transforms raw noise data into predictive intelligence through AI processing
      and visualizes it in actionable GIS maps for urban planning and enforcement decisions.
    </p>

  </div>
</section>
{/*===========graph ai brain =================*/}

     <section className="relative w-full min-h-[85vh] overflow-hidden text-white">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center scale-105 opacity-60"
    style={{ backgroundImage: "url('/graph.jpg')" }}
  />

  {/* LIGHT GRADIENT (FIXED) */}
  <div className="absolute inset-0 bg-gradient-to-b 
  from-[#2a254d]/70 via-[#3b3560]/60 to-[#cbb9a5]/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 px-6 md:px-16 py-14 flex flex-col md:flex-row gap-10">

    {/* LEFT SIDE */}
    <div className="w-full md:w-1/2">

      <h1 className="text-3xl md:text-5xl font-light text-gray-200 mb-2">
        The AI "Brain"
      </h1>

      <p className="text-orange-400 text-lg md:text-xl mb-6">
        Key Differentiator
      </p>

      <p className="text-gray-300 text-lg md:text-xl mb-8">
        Learns from the years of data
      </p>

      {/* CARDS */}
      <div className="flex flex-col sm:flex-row gap-6">

        {/* CARD 1 */}
        <div className="bg-teal-300/20 backdrop-blur-md border border-teal-200/20 
        rounded-xl p-5 w-full">

          <h3 className="text-lg font-semibold mb-3">Understands</h3>
          <ul className="space-y-2 text-gray-200">
            <li>• Time</li>
            <li>• Location</li>
            <li>• Day vs Night</li>
          </ul>
        </div>

        {/* CARD 2 */}
        <div className="bg-green-300/20 backdrop-blur-md border border-green-200/20 
        rounded-xl p-5 w-full">

          <h3 className="text-lg font-semibold mb-3">Predicts</h3>
          <ul className="space-y-2 text-gray-200">
            <li>• 30 days</li>
            <li>• 90 days</li>
            <li>• 180 days</li>
          </ul>
        </div>

      </div>

      {/* FOOT TEXT */}
      <div className="mt-10 text-gray-300">
        <p>Explainable AI</p>
        <p>Govt-safe models</p>
      </div>

    </div>

    {/* RIGHT SIDE EMPTY (FOR GRAPH VISIBILITY) */}
    <div className="hidden md:block md:w-1/2"></div>

  </div>
</section>



{/*===========Accuracy & Validation  =================*/}

  <section className="relative w-full min-h-[90vh] overflow-hidden text-white">

      {/* BACKGROUND GRAPH */}
      <div
        className="absolute inset-0 h bg-cover bg-center scale-115 opacity-80"
        style={{ backgroundImage: "url('/graph-1.png')" }}
      />

      {/* DARK + BLUE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black bg-gradient-to-b from-black/50 via-[#020655]/30 to-[#020024]/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 md:px-20 py-16 flex flex-col md:flex-row justify-between gap-10">

        {/* LEFT SIDE */}
        <div className="w-full md:w-[55%]">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-light text-gray-200 mb-6">
            Accuracy & Validation
          </h1>

          {/* SUBTITLE */}
          <p className="text-orange-400 text-xl md:text-2xl mb-8">
            We don't guess - we validate.
          </p>

          {/* DESC */}
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Real back-testing on historical data
          </p>

          {/* METRICS */}
          <div>
            <p className="text-gray-400 text-lg mb-4">
              Accuracy metrics:
            </p>

            <ul className="space-y-4 text-lg md:text-xl text-gray-300">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span> MAE
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span> RMSE
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-white rounded-full"></span> Accuracy %
              </li>
            </ul>
          </div>

        </div>

        {/* RIGHT SIDE (FLOATING TABLE) */}
        <div className="w-full md:w-[40%] flex justify-center md:justify-end items-start mt-20">

          <div className="w-full max-w-md bg-black/60 backdrop-blur-md 
          border border-white/10 rounded-xl overflow-hidden shadow-xl">

            {/* HEADER */}
            <div className="grid grid-cols-2 text-gray-300 text-sm md:text-base font-semibold bg-black/80">
              <div className="p-4 border-r border-white/10">Horizon</div>
              <div className="p-4">Accuracy</div>
            </div>

            {/* ROWS */}
            <div className="text-gray-300">

              <div className="grid grid-cols-2 p-4 border-t border-white/10">
                <div>30 Days</div>
                <div>90–95%</div>
              </div>

              <div className="grid grid-cols-2 p-4 border-t border-white/10 bg-white/5">
                <div>90 Days</div>
                <div>85–90%</div>
              </div>

              <div className="grid grid-cols-2 p-4 border-t border-white/10">
                <div>180 Days</div>
                <div>80–85%</div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
    
{/*===========Night Noise Maps  =================*/}


<section className="relative w-full min-h-[90vh] bg-black text-white px-6 md:px-16 py-16">

      {/* TITLE */}
      <h1 className="text-3xl md:text-5xl font-light text-gray-200 mb-4">
        Day vs Night Noise Maps
      </h1>

      {/* SUBTITLE */}
      <p className="text-orange-400 text-lg md:text-xl mb-12">
        Same noise value, different meaning - day and night are treated differently.
      </p>

      {/* HEADERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-6">

        <div>
          <div className="h-[2px] bg-indigo-500 mb-4"></div>
          <h3 className="text-gray-300 text-lg md:text-xl">
            Day noise patterns
          </h3>
        </div>

        <div>
          <div className="h-[2px] bg-indigo-500 mb-4"></div>
          <h3 className="text-gray-300 text-lg md:text-xl">
            Night violation zones
          </h3>
        </div>

        <div>
          <div className="h-[2px] bg-indigo-500 mb-4"></div>
          <h3 className="text-gray-300 text-lg md:text-xl">
            Residential vs commercial impact
          </h3>
        </div>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* CARD 1 */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400">

          <img
            src="/map-day.png"
            alt="day map"
            className="w-full h-[350px] object-cover"
          />

          {/* DOTS */}
          <div className="absolute inset-0">
            <div className="absolute top-[55%] left-[50%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-[50%] left-[55%] w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400">

          <img
            src="/map-night.png"
            alt="night map"
            className="w-full h-[350px] object-cover brightness-75"
          />

          {/* DOTS */}
          <div className="absolute inset-0">
            <div className="absolute top-[60%] left-[52%] w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="absolute top-[45%] left-[48%] w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-[40%] left-[50%] w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-yellow-400">

          <img
            src="/map-impact.png"
            alt="impact map"
            className="w-full h-[350px] object-cover brightness-75"
          />

          {/* LEGEND */}
          {/* <div className="absolute top-3 right-3 bg-black/70 px-3 py-2 rounded-md text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full"></span> Residential
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-3 h-3 bg-orange-400 rounded-sm"></span> Commercial
            </div>
          </div> */}

          {/* DOTS */}
          <div className="absolute inset-0">
            <div className="absolute top-[50%] left-[48%] w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-[55%] left-[52%] w-3 h-3 bg-orange-400 rounded-sm"></div>
          </div>

        </div>

      </div>

    </section>
   
    {/*===========Heatmaps & Hotspots =================*/}
    <section className="w-full min-h-[100vh] bg-black text-white px-6 md:px-16 py-16">

      {/* TITLE */}
      <h1 className="text-3xl md:text-5xl font-light text-gray-200 mb-4">
        Heatmaps & Hotspots
      </h1>

      {/* SUBTITLE */}
      <p className="text-orange-400 text-lg md:text-xl mb-12">
        This tells where enforcement should focus - not everywhere.
      </p>

      {/* TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

        {/* CARD 1 */}
        <div className="bg-indigo-900/60 rounded-xl p-6 flex items-center gap-4 border border-indigo-400/20">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/30">
            <Flame className="text-indigo-300" />
          </div>
          <h3 className="text-lg md:text-xl text-gray-200">
            Chronic noise zones
          </h3>
        </div>

        {/* CARD 2 */}
        <div className="bg-indigo-900/60 rounded-xl p-6 flex items-center gap-4 border border-indigo-400/20">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/30">
            <Repeat className="text-indigo-300" />
          </div>
          <h3 className="text-lg md:text-xl text-gray-200">
            Repeated offenders
          </h3>
        </div>

        {/* CARD 3 */}
        <div className="bg-indigo-900/60 rounded-xl p-6 flex items-center gap-4 border border-indigo-400/20">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/30">
            <AlertTriangle className="text-indigo-300" />
          </div>
          <h3 className="text-lg md:text-xl text-gray-200">
            High-risk areas
          </h3>
        </div>

      </div>

      {/* BOTTOM MAP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* MAP 1 */}
        <div className="rounded-xl overflow-hidden border border-indigo-400/20 shadow-lg">
          <img
            src="/Hotspots-1.jpg"
            alt="hotspots"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* MAP 2 */}
        <div className="rounded-xl overflow-hidden border border-indigo-400/20 shadow-lg">
          <img
            src="/Hotspots-2.jpg"
            alt="hotspots"
            className="w-full h-[300px] object-cover"
          />
        </div>

        {/* MAP 3 */}
        <div className="rounded-xl overflow-hidden border border-indigo-400/20 shadow-lg">
          <img
            src="/Hotspots-3.jpg"
            alt="hotspots"
            className="w-full h-[300px] object-cover"
          />
        </div>

      </div>

    </section>

{/*=========== Noise Range db for Governance Solution  =========*/}
 <section className="relative w-full min-h-[90vh] overflow-hidden text-white">

      {/* MAP BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/map.png')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* TITLE */}
      <div className="relative z-10 px-6 md:px-16 py-12">

        <h1 className="text-3xl md:text-5xl font-light text-gray-200 mb-2">
          Noise Range db for Governance Solution
        </h1>

        <p className="text-gray-300 text-lg font-semibold">
          Hyderabad Telangana
        </p>

      </div>

      {/* 🔴🟡 HOTSPOTS */}
      <div className="absolute inset-0 z-10">

        {/* RED */}
        <div className="absolute top-[58%] left-[55%] w-4 h-4 bg-red-500 rounded-full border-2 border-black"></div>
        <div className="absolute top-[62%] left-[58%] w-4 h-4 bg-red-500 rounded-full border-2 border-black"></div>

        {/* YELLOW */}
        <div className="absolute top-[45%] left-[50%] w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="absolute top-[48%] left-[53%] w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>
        <div className="absolute top-[50%] left-[47%] w-4 h-4 bg-yellow-400 rounded-full border-2 border-black"></div>

      </div>

      {/* ⚪ LEFT PANEL (IMPORTANT PART) */}
      <div className="absolute bottom-0 left-0 z-20 
      w-full md:w-[45%] h-[40%] 
      bg-white/80 text-black 
      p-6 md:p-8">

        <h3 className="text-sm font-semibold mb-3">
          UNIPS db range — hyd with_noise_db
        </h3>

        <ul className="space-y-2 text-sm">

          <li className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Very Low (&lt;50 dB)
          </li>

          <li className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Low (50–60 dB)
          </li>

          <li className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Moderate (60–70 dB)
          </li>

          <li className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            High (70–80 dB)
          </li>

          <li className="flex items-center gap-2">
            <input type="checkbox" checked readOnly />
            Very High (&gt;80 dB)
          </li>

        </ul>

        <div className="mt-4 text-xs text-gray-700">
          <p>Noise_Heatmap_Day</p>
          <p>Noise_Violation_Heatmap</p>
          <p>Noise_Heatmap_Night</p>
          <p>OpenStreetMap</p>
        </div>

      </div>

    </section>


    {/*===========Prediction Maps =================*/}
  <section className="relative w-full min-h-[70vh] overflow-hidden text-white flex items-center">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/map.png')" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#020617]/85 to-[#020024]/10"></div>

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl text-gray-200 mb-4">
          Prediction Maps
        </h2>

        {/* MAIN TEXT */}
        <h1 className="text-4xl md:text-5xl text-orange-400 font-light leading-tight mb-16 max-w-4xl">
          This map shows tomorrow's problems - today
        </h1>

        {/* 🔥 ARROWS + TEXT GRID (IMPORTANT FIX) */}
        <div className="grid grid-cols-3 gap-6 md:gap-10 items-start">

          {/* STEP 1 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center text-white
              w-[300px] h-[80px]
              lg:w-[300px] lg:h-[80px]
              md:w-[240px] md:h-[70px]
              sm:w-[180px] sm:h-[60px]
              w-[130px] h-[50px]
              bg-gradient-to-r from-[#2a2f7a] to-[#2e3aa8]
              [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,10%_50%)]
              hover:scale-105 hover:-translate-y-1 transition-all duration-300
            ">
              <Calendar size={24} />
            </div>

            <p className="mt-4 text-center text-gray-300 text-sm md:text-lg">
              30-days prediction map
            </p>
          </div>

          {/* STEP 2 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center text-white
              w-[300px] h-[80px]
              lg:w-[300px] lg:h-[80px]
              md:w-[240px] md:h-[70px]
              sm:w-[180px] sm:h-[60px]
              w-[130px] h-[50px]
              bg-gradient-to-r from-[#2a2f7a] to-[#2e3aa8]
              [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,10%_50%)]
              hover:scale-105 hover:-translate-y-1 transition-all duration-300
            ">
              <Target size={24} />
            </div>

            <p className="mt-4 text-center text-gray-300 text-sm md:text-lg">
              Hotspots before they occur
            </p>
          </div>

          {/* STEP 3 (FIXED SHAPE) */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center text-white
              w-[300px] h-[80px]
              lg:w-[300px] lg:h-[80px]
              md:w-[240px] md:h-[70px]
              sm:w-[180px] sm:h-[60px]
              w-[130px] h-[50px]
              bg-gradient-to-r from-[#2a2f7a] to-[#2e3aa8]
              [clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%,10%_50%)]
              hover:scale-105 hover:-translate-y-1 transition-all duration-300
            ">
              <FileText size={24} />
            </div>

            <p className="mt-4 text-center text-gray-300 text-sm md:text-lg">
              Policy-ready insights
            </p>
          </div>

        </div>

      </div>
    </section>
{/*==========Who Will Pay =================*/}

  <WhoWillPay />


{/*=========== Decision Support =================*/}

       <section className="relative w-full bg-gradient-to-b from-black via-[#020024] to-black text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* RIGHT SIDE IMAGE */}
{/* RIGHT SIDE IMAGE */}
<div className="absolute top-[-40px] right-[-60px] lg:top-[-60px] lg:right-[-80px] w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[20px] rounded-full overflow-hidden border border-yellow-400/40 shadow-[0_0_80px_rgba(250,204,21,0.2)] z-0">

  <img
    src="/decision-support.jpg"
    alt="decision"
    className="w-full h-full object-cover"
  />


</div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide">
          Decision Support Examples
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-400 mb-16 max-w-xl text-sm md:text-lg leading-relaxed">
          Real-world scenarios where intelligence drives better municipal decisions.
        </p>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-40"></div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* CARD 1 */}
            <div className="relative">
              <div className="absolute -top-6 left-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                1
              </div>
              <div className="relative border border-blue-500/30 rounded-xl p-6 bg-black/40 backdrop-blur-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.2)] pointer-events-none"></div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Festival Permissions
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Assess crowd capacity, traffic impact, and emergency access routes before approving large public events.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative">
              <div className="absolute -top-6 left-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                3
              </div>
              <div className="relative border border-blue-500/30 rounded-xl p-6 bg-black/40 backdrop-blur-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.2)] pointer-events-none"></div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Night Enforcement Planning
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Identify high-risk areas and allocate patrol resources effectively during nighttime hours.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative">
              <div className="absolute -top-6 left-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                2
              </div>
              <div className="relative border border-blue-500/30 rounded-xl p-6 bg-black/40 backdrop-blur-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.2)] pointer-events-none"></div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Traffic Diversion Planning
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Model traffic flow patterns and optimize detour routes during construction or special events.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="relative">
              <div className="absolute -top-6 left-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold shadow-[0_0_25px_rgba(99,102,241,0.6)]">
                4
              </div>
              <div className="relative border border-blue-500/30 rounded-xl p-6 bg-black/40 backdrop-blur-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.2)] pointer-events-none"></div>
                <h3 className="text-lg font-medium mb-2 text-white">
                  Zoning & Licensing Support
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Analyze land use patterns and demographic data to inform zoning decisions and business licensing.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

{/*===========footer section  =================*/}
      <footer className="relative w-full overflow-hidden border-t border-gray-700 bg-black/60 py-16 text-gray-300 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 text-sm sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Popular Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Career in AI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Quantum Computing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Cloud Computing
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#c5a77b]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Free Tools
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  AI Text Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Resume Builder
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  File Converter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Data Formatter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  PDF Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-[#c5a77b]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/service" className="hover:text-[#c5a77b]">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#c5a77b]">
                  Products
                </a>
              </li>
              <li>
                <a href="/career" className="hover:text-[#c5a77b]">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#c5a77b]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  AI & ML
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#c5a77b]">
                  GIS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-8 border-t border-gray-700 pt-8 text-2xl">
          {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
            (Icon, index) => (
              <Icon
                key={index}
                className="cursor-pointer transition hover:text-[#c5a77b]"
              />
            )
          )}
        </div>

        <div className="mt-10 text-center">
          <img src="/gaint-logo.png" alt="GAINT logo" className="mx-auto mb-4 h-12" />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES
          </p>
        </div>
      </footer>
    </div>
  );
}
