import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Added Chevron for UX

const products = [
  { name: "DonorGO", link: "/Donorgo" },
  { name: "GAINTInternsHub", link: "/internsapp" },
  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
  { name: "WellNest AI Station", link: "/wellnest" },
  { name: "QKD", link: "/qkd" },
  { name: "PQC", link: "/pqc" },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Services", link: "/service" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/10 px-6 py-4 shadow-md backdrop-blur-lg md:px-12 border-b border-white/10">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="shrink-0">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Technologies"
            className="h-auto w-32" // Ensures logo is visible on black if it was dark
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden w-full justify-center md:flex">
          <ul className="flex max-w-fit items-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm shadow-2xl backdrop-blur-xl md:gap-6 md:px-8 lg:gap-10 lg:px-12 lg:text-xl">
            {navLinks.slice(0, 3).map(({ name, link }) => (
              <li key={name} className="group">
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `relative px-2 py-1 transition duration-300 ${
                      isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"
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

              <ul className="invisible absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-black/90 text-sm opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100 md:text-lg">
                {products.map((product) => (
                  <li key={product.name}>
                    <NavLink
                      to={product.link}
                      className={({ isActive }) =>
                        `block rounded-lg px-5 py-3 transition ${
                          isActive
                            ? "bg-white/10 text-[#4285F4]"
                            : "text-white hover:bg-white/10 hover:text-[#4285F4]"
                        }`
                      }
                    >
                      {product.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative px-2 py-1 transition duration-300 ${
                    isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"
                  }`
                }
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4285F4] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#4285F4]"></span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md border border-white/20 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="absolute left-4 right-4 top-20 z-50 overflow-hidden rounded-2xl bg-black/95 border border-white/10 py-4 text-center shadow-2xl md:hidden">
          {navLinks.slice(0, 3).map(({ name, link }) => (
            <NavLink
              key={name}
              to={link}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-white transition hover:text-[#4285F4]"
            >
              {name}
            </NavLink>
          ))}

          {/* Mobile Accordion for Products */}
          <div className="border-y border-white/10">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="flex w-full items-center justify-center gap-2 py-3 font-semibold text-white transition hover:text-[#4285F4]"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {mobileProductsOpen && (
              <div className="bg-white/5 py-2">
                {products.map((product) => (
                  <NavLink
                    key={product.name}
                    to={product.link}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-300 transition hover:text-[#4285F4]"
                  >
                    {product.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-white transition hover:text-[#4285F4]"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}