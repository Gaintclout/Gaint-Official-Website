import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Shield, Lock, Cpu, Globe } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import { Atom, Sparkles } from "lucide-react";

const pqcData = [
  { year: 2022, India: 20, Global: 35 },
  { year: 2023, India: 40, Global: 50 },
  { year: 2024, India: 65, Global: 70 },
  { year: 2025, India: 80, Global: 85 },
];

export default function PQCProductPage() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ================= HEADER ================= */}
      <Header />
      <ScrollToTop />

      {/* ================= HERO ================= */}
      <section
        className="relative text-center py-20 md:py-28 px-4 md:px-6 bg-cover bg-center mt-20"
        style={{ backgroundImage: "url('/Web.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.img
            src="/KAVACH-Q logo with TM.png"
            alt="KAVACH-Q logo"
            className="mx-auto mb-8 h-36 w-auto max-w-full rounded-2xl object-contain transition-all duration-500 ease-out
            hover:scale-110 hover:-translate-y-2 hover:drop-shadow-[0_0_40px_rgba(34,211,238,0.8)] sm:h-44 md:h-56"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          />

          {/* Heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl mb-6 text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            GAINT PQC — Post-Quantum Cryptography
          </motion.h1>

          {/* Description */}
          <motion.p
            className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            GAINT's Post-Quantum Cryptography (PQC) initiative secures organizations against future quantum threats by delivering scalable, standards-based, and AI-driven cryptographic security frameworks built for the quantum era.
          </motion.p>

          {/* Section Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-cyan-400 mt-16 mb-10">
            PQC vs QKD — The Future of Quantum Security
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* PQC Card */}
            <div className="p-6 text-left bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-cyan-700 shadow-lg hover:shadow-cyan-500/30 transition">
              <h3 className="flex items-start gap-3 text-xl md:text-2xl mb-4 text-cyan-300 leading-tight">
                <Atom className="mt-1 w-6 h-6 shrink-0 text-cyan-300 drop-shadow-[0_0_8px_#06b6d4]" />
                Post-Quantum Cryptography (PQC)
              </h3>

              <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2 text-sm md:text-base leading-relaxed">
                <li>Software-based quantum-safe security for existing networks.</li>
                <li>Relies on mathematically hard lattice-based algorithms.</li>
                <li>
                  Scalable and deployable on existing internet infrastructure.
                </li>
                <li>Ideal for commercial, banking, and cloud environments.</li>
              </ul>
            </div>

            {/* QKD Card */}
            <div className="p-6 text-left bg-gray-900/70 backdrop-blur-lg rounded-2xl border border-violet-700 shadow-lg hover:shadow-violet-500/30 transition">
              <h3 className="flex items-start gap-3 text-xl md:text-2xl mb-4 text-violet-300 leading-tight">
                <Sparkles className="mt-1 w-6 h-6 shrink-0 text-violet-300 drop-shadow-[0_0_8px_#a855f7]" />
                Quantum Key Distribution (QKD)
              </h3>

              <ul className="list-disc list-outside pl-6 text-gray-300 space-y-2 text-sm md:text-base leading-relaxed">
                  <li>
                  Hardware-based physical layer encryption using quantum
                  photons.
                </li>
                <li>
                  Offers information-theoretic security — unhackable by physics.
                </li>
                <li>
                  Requires quantum communication channels (fiber/satellite).
                </li>
                <li>
                  Ideal for defense, space, and critical national networks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-cyan-400 mb-12">
          GAINT PQC R&D & Product Roadmap
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Foundation",
              desc: "Quantum-safe cryptography, NIST PQC standards, QVS scoring, crypto asset discovery, and compliance mapping.",
            },
            {
              title: "Platform Development",
              desc: "Build SCAN, QUEUE, SCORE modules with FastAPI, PostgreSQL, Redis/RQ, and frontend dashboards.",
            },
            {
              title: "Enterprise Validation",
              desc: "Deploy KAVACH-Q with selected enterprises / government clients for repo scans, TLS discovery, QVS scoring, and migration planning.",
            },
            {
              title: "Quantum Security-as-a-Service",
              desc: "Continuous quantum-risk monitoring, PQC migration, compliance reporting, and enterprise governance. ",
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              className="group relative p-6 bg-gray-900/80 border border-cyan-800 rounded-2xl shadow-lg
                   transition-all duration-500 ease-in-out 
                   hover:-translate-y-3 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-cyan-300 mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{phase.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FUNDING & CHARTS */}
      <section className="py-20 bg-[#040b18]/90 border-t border-cyan-800">
        <h2 className="text-3xl font-semibold text-center text-cyan-400 mb-8">
          Funding & Global PQC Adoption
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              Government & R&D Initiatives
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                India’s Quantum Mission — National Quantum Communication
                Network.
              </li>
              <li>NIST PQC Standardization (Kyber, Dilithium).</li>
              <li>
                Collaboration with MEITY, DRDO, ISRO & academic institutions.
              </li>
              <li>
                GAINT PQC Labs: Hyderabad (India) — Prototype & Simulation Hub.
              </li>
            </ul>
          </div>
          <div className="h-64 bg-gray-900/60 p-4 rounded-xl border border-cyan-700">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pqcData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="India"
                  stroke="#06b6d4"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="Global"
                  stroke="#a855f7"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-800">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-100 mb-6">
          Partner with GAINT — Build India’s Quantum-Secure Future
        </h2>
        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Collaborate with us in advancing PQC research, integration, and
          deployment across national and global security networks.
        </p>
        <a
          href="https://kavachq.com"
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-cyan-400/30 transition"
        >
          Connect with GAINT R&D
        </a>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
