import React from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function QKDPage() {
  return (
    <div className="font-sans text-gray-800 scroll-smooth overflow-x-hidden">
      {/* ---------------- HEADER ---------------- */}
      <Header />
      <ScrollToTop />

      {/* ================= HERO SECTION ================= */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white mt-20 px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Quantum Key Distribution (QKD)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto text-xl md:text-3xl leading-snug"
        >
          Building the future of quantum-secure communication through research, innovation, and Quantum-as-a-Service (QaaS).
        </motion.p>
      </section>

      {/* ================= ABOUT QKD ================= */}
      <section className="py-12 md:py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-indigo-700">
          About QKD
        </h2>
        <p className="text-xl md:text-3xl text-gray-600 leading-relaxed">
          Quantum Key Distribution (QKD) leverages quantum mechanics principles—superposition and entanglement—to securely exchange encryption keys between two parties. Unlike classical cryptography, QKD instantly detects eavesdropping attempts, ensuring ultra-secure communication in the post-quantum era.
        </p>
      </section>

      {/* ================= R&D ROADMAP ================= */}
      <section className="py-16 md:py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-indigo-700">
          QKD – R&D & Product Roadmap
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Center Line - Hidden on Mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-indigo-500"></div>

          {[
            {
              title: "Phase 1: Research Foundation",
              duration: "Jan 2026 - June 2026",
              color: "from-indigo-500 to-blue-500",
              points: [
                "Form Quantum R&D core team",
                "Study QKD protocols (BB84, E91)",
                "Simulate using Qiskit & QuNetSim",
              ],
            },
            {
              title: "Phase 2: Prototype Development",
              duration: "July 26 - Mar 27",
              color: "from-purple-500 to-pink-500",
              points: [
                "Implement BB84/E91 simulation",
                "Develop Quantum Key Manager (QKM)",
                "Integrate AES-256 hybrid security",
                "Test with QuISP & NetSquid",
              ],
            },
            {
              title: "Phase 3: Pilot Project",
              duration: "Apr 27 - Dec 27",
              color: "from-pink-500 to-red-500",
              points: [
                "Build hardware-level prototype",
                "Establish fiber testbed between sites",
                "Integrate AI anomaly detection",
                "Run QaaS internal trials",
              ],
            },
            {
              title: "Phase 4: QaaS Product Launch",
              duration: "Jan 28 - Dec 28",
              color: "from-blue-500 to-indigo-700",
              points: [
                "Launch GAINT QaaS Platform",
                "Offer QKD for Banks & Defense",
                "Create Quantum Cloud integration",
                "Patent & onboard enterprise clients",
              ],
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`mb-10 md:mb-14 flex flex-col md:flex-row items-center w-full ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Desktop Spacer */}
              <div className="hidden md:block md:w-1/2"></div>
              
              {/* Card Container */}
              <div className="relative w-full md:w-1/2 bg-white shadow-xl p-6 md:p-8 rounded-2xl border-t-4 border-indigo-500 hover:shadow-2xl transition">
                <div
                  className={`absolute top-4 hidden md:block ${
                    i % 2 === 0 ? "-left-3" : "-right-3"
                  } w-6 h-6 bg-gradient-to-r ${phase.color} rounded-full shadow-lg`}
                ></div>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">{phase.title}</h3>
                <p className="text-lg md:text-xl text-indigo-500 font-medium mb-3">{phase.duration}</p>
                <ul className="list-disc ml-5 text-gray-700 space-y-2 text-lg md:text-xl">
                  {phase.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TARGET SECTORS ================= */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 text-indigo-700">
          Target Industry Sectors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {["Banking & FinTech", "Defense & Aerospace", "Healthcare", "Telecom & Data Centers"].map((sector, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}>
              <Card className="shadow-md border-t-4 border-indigo-400 h-full hover:shadow-lg transition-all">
                <CardContent className="text-center py-8 md:py-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{sector}</h3>
                  <p className="text-gray-600 text-lg md:text-xl">
                    Securing critical communications with quantum-grade encryption.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= QaaS PRICING ================= */}
      <section className="py-16 md:py-20 bg-white px-6 md:px-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-indigo-700">
          QaaS Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { tier: "Starter", price: "₹49,000/mo", features: ["10 Quantum-secure connections", "Basic API Access", "Key refresh every 30s", "Email support"] },
            { tier: "Professional", price: "₹99,000/mo", features: ["50 Quantum-secure connections", "Priority API & SDK access", "AI Dashboard", "24/7 support"] },
            { tier: "Enterprise", price: "Custom Pricing", features: ["Unlimited secure connections", "Dedicated channel setup", "Custom algorithms", "On-site deployment"] },
          ].map((plan, i) => (
            <motion.div key={i} whileHover={{ y: -10 }}>
              <Card className="shadow-xl border-t-4 border-indigo-600 h-full flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl md:text-3xl font-bold">{plan.tier}</CardTitle>
                  <p className="text-indigo-600 text-2xl md:text-3xl font-bold mt-2">{plan.price}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-lg md:text-xl">
                        <CheckCircle className="text-indigo-500 w-6 h-6 mr-3 flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md">
                    Get Started
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Join GAINT’s Quantum Future
        </motion.h2>
        <p className="text-xl md:text-3xl mb-10 opacity-90">
          Partner with us to build the backbone of tomorrow’s secure quantum internet.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-lg"
        >
          Contact GAINT Quantum R&D
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
