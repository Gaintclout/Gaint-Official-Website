import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function GISPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">

      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 md:py-4 backdrop-blur-md z-50">

        <img src="/gaint-logo.png" className="w-24 sm:w-28 md:w-32" />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-center w-full">
          <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 text-sm md:text-base lg:text-lg bg-gray-100 px-4 md:px-6 lg:px-10 py-2 md:py-3 rounded-full shadow-lg max-w-fit">

            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/service" },
              { name: "GIS", path: "/gis" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `transition duration-300 ${
                      isActive
                        ? "text-[#4285F4] font-semibold"
                        : "hover:text-[#4285F4]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white rounded-xl shadow-lg w-56 p-4 md:hidden">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Services", path: "/service" },
              { name: "GIS", path: "/gis" },
              { name: "Contact", path: "/contact" },
            ].map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-blue-500"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        className="relative text-center py-16 sm:py-20 md:py-28 px-4 bg-cover bg-center mt-16 md:mt-20"
        style={{ backgroundImage: "url('/Web.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto">

          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-green-400 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            GAINT GIS — Geographic Information Systems
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Empowering spatial intelligence with AI-driven geospatial solutions
            for smart cities, disaster management, and infrastructure planning.
          </motion.p>

        </div>
      </section>

      {/* ================= GIS VS ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center text-green-400 mb-8 md:mb-10">
          GIS vs Traditional Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-5 sm:p-6 bg-gray-900 text-white rounded-xl">
            <h3 className="text-lg sm:text-xl mb-3">🌍 GIS</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Real-time mapping</li>
              <li>Location intelligence</li>
              <li>AI analytics</li>
            </ul>
          </div>

          <div className="p-5 sm:p-6 bg-gray-900 text-white rounded-xl">
            <h3 className="text-lg sm:text-xl mb-3">📊 Traditional</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>No spatial data</li>
              <li>Limited insights</li>
              <li>Static reports</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

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

      </section>

      {/* ================= ROADMAP ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">

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

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-gray-300 py-10 sm:py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 sm:px-6">

          <div>
            <h4 className="text-white mb-3">Company</h4>
            <p className="text-sm">AI-driven innovation company.</p>
          </div>

          <div>
            <h4 className="text-white mb-3">Services</h4>
            <p className="text-sm">AI, GIS, Cloud</p>
          </div>

          <div>
            <h4 className="text-white mb-3">Contact</h4>
            <p className="text-sm">Hyderabad, India</p>
          </div>

          <div className="flex gap-4 text-xl justify-center sm:justify-start">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>

        </div>

        <p className="text-center mt-6 text-sm">
          © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES
        </p>

      </footer>

    </div>
  );
}