import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Users } from "lucide-react";

const products = [
  { name: "DonorGO", link: "/Donorgo" },
  { name: "GAINTInternsHub", link: "/internsapp" },
  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
  { name: "WellNest AI Station", link: "/wellnestai" },
  { name: "GIS", link: "/gis" },
  { name: "QKD", link: "/qkd" },
  { name: "PQC", link: "/pqc" },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/service" },
  { name: "Workshops", link: "/workshops" },
  { name: "Certificates", link: "/certificates" },
  { name: "Careers", link: "/career" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/20 px-6 py-4 shadow-md backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        {/* LEFT SIDE: Logo */}
        <NavLink to="/" className="shrink-0">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Technologies"
            className="h-auto w-28 lg:w-32"
          />
        </NavLink>

        {/* CENTER: Navigation Links */}
        <nav className="hidden xl:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-base shadow-2xl backdrop-blur-xl lg:gap-5 xl:text-lg">
            {navLinks.slice(0, 3).map(({ name, link }) => (
              <li key={name} className="group">
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `relative px-1 transition duration-300 ${
                      isActive
                        ? "text-[#4285F4]"
                        : "text-white hover:text-[#4285F4]"
                    }`
                  }
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4285F4] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#4285F4]"></span>
                </NavLink>
              </li>
            ))}

            {/* Desktop Products Dropdown */}
            <li className="relative group">
              <span className="flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#4285F4]">
                Products <ChevronDown className="w-4 h-4" />
              </span>
              <ul className="invisible absolute left-1/2 z-50 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/95 p-2 text-sm opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                {products.map((product) => (
                  <li key={product.name}>
                    <NavLink
                      to={product.link}
                      className="block rounded-lg px-4 py-2.5 text-black hover:bg-[#4285F4]/10 hover:text-[#4285F4] transition"
                    >
                      {product.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.slice(3).map(({ name, link }) => (
              <li key={name} className="group">
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `relative px-1 transition duration-300 ${
                      isActive
                        ? "text-[#4285F4]"
                        : "text-white hover:text-[#4285F4]"
                    }`
                  }
                >
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4285F4] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#4285F4]"></span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SIDE: InternsHub Button */}
        <div className="flex items-center">
          <a
            href="https://interns.gaintclout.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white overflow-hidden"
          >
            {/* Background Gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-red-400 via-blue-500 to-yellow-400 transition-all duration-400 group-hover:scale-110"></span>

            {/* Glow Effect */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 transition duration-500"></span>

            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              InternsHub
              <Users className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </span>
          </a>  
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-full border border-white/20 bg-white/10 p-2.5 text-white shadow-lg backdrop-blur xl:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-24 z-50 max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl xl:hidden border border-gray-100">
          <div className="flex flex-col space-y-1 text-center">
            {navLinks.slice(0, 3).map(({ name, link }) => (
              <NavLink
                key={name}
                to={link}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-lg font-semibold text-gray-800 border-b border-gray-50 hover:text-[#4285F4]"
              >
                {name}
              </NavLink>
            ))}

            <div className="py-2 border-b border-gray-50">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-center gap-2 py-2 text-lg font-semibold text-gray-800"
              >
                Products
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="mt-2 grid grid-cols-1 gap-1 rounded-2xl bg-gray-50 p-2">
                  {products.map((product) => (
                    <NavLink
                      key={product.name}
                      to={product.link}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-600 font-medium hover:text-[#4285F4]"
                    >
                      {product.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map(({ name, link }) => (
              <NavLink
                key={name}
                to={link}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-lg font-semibold text-gray-800 border-b border-gray-50 hover:text-[#4285F4]"
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
