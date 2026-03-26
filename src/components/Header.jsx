import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const productLinks = [
    { name: "DonorGO", link: "/Donorgo" },
    { name: "GAINTInternsHub", link: "/internsapp" },
    { name: "GAINTImmuneIQ", link: "/Immuneiq" },
    { name: "WellNest AI Station", link: "/wellnestai" },
    { name: "QKD", link: "/qkd" },
    { name: "PQC", link: "/pqc" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-3 md:py-4 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-md shadow-sm">
        <img
          src="/gaint-logo.png"
          alt="GAINT Clout Technologies"
          className="w-24 sm:w-28 md:w-32 h-auto"
        />

      {/* ---------------- NAVBAR (Desktop) ---------------- */}
      <nav className="hidden md:flex justify-center w-full mt-4">
        <ul
          className="
            flex items-center
            gap-4 md:gap-6 lg:gap-10
            text-sm md:text-base lg:text-xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            px-6 md:px-8 lg:px-12
            py-3 md:py-4
            rounded-full
            shadow-[0_8px_30px_rgba(0,0,0,0.3)]
            max-w-fit
          "
        >
          {/* Home */}
          <li className="group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-2 py-1 transition duration-300 ${
                  isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"
                }`
              }
            >
              Home
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px]
                  bg-[#4285F4]
                  w-0 group-hover:w-full
                  transition-all duration-300
                  shadow-[0_0_10px_#4285F4]
                "
              ></span>
            </NavLink>
          </li>

          {/* About */}
          <li className="group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-2 py-1 transition duration-300 ${
                  isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"
                }`
              }
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] bg-[#4285F4] w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#4285F4]"></span>
            </NavLink>
          </li>

          {/* Services */}
          <li className="group">
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `relative px-2 py-1 transition duration-300 ${
                  isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"
                }`
              }
            >
              Services
              <span className="absolute left-0 -bottom-1 h-[2px] bg-[#4285F4] w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#4285F4]"></span>
            </NavLink>
          </li>

          {/* Products */}
          <li className="relative group">
            <span className="flex items-center gap-1 cursor-pointer text-white hover:text-[#4285F4] transition duration-300">
              Products ▾
            </span>

            <ul
              className="
                absolute left-1/2 transform -translate-x-1/2
                mt-3 bg-white/90 backdrop-blur-lg
                border border-gray-200
                shadow-xl rounded-2xl
                opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300
                w-64 z-50 text-sm md:text-lg
              "
            >
              {productLinks.map((product, i) => (
                <li key={i}>
                  <NavLink
                    to={product.link}
                    className={({ isActive }) =>
                      `block px-5 py-3 rounded-lg transition ${
                        isActive
                          ? "text-[#4285F4] bg-gray-100"
                          : "hover:bg-gray-100 hover:text-[#4285F4]"
                      }`
                    }
                  >
                    {product.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          {/* Contact */}
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
              <span className="absolute left-0 -bottom-1 h-[2px] bg-[#4285F4] w-0 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_#4285F4]"></span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white shadow-sm"
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 px-4 sm:px-6 mt-2 z-50">
          <div className="bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl p-4 animate-fadeIn">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/service" },
            ].map(({ name, link }) => (
              <NavLink
                key={name}
                to={link}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-900 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full mt-2 flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              Products
              <span className={`transition-transform ${productsOpen ? "rotate-180" : ""}`}>▾</span>
            </button>

            {productsOpen && (
              <div className="mt-2 grid gap-2">
                {productLinks.map(({ name, link }) => (
                  <NavLink
                    key={name}
                    to={link}
                    onClick={() => {
                      setMenuOpen(false);
                      setProductsOpen(false);
                    }}
                    className="px-4 py-2 rounded-xl text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            )}

            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `mt-3 flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-900 hover:bg-blue-50 hover:text-blue-700"
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
