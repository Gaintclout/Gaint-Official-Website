import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

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

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 py-4 md:px-12">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="shrink-0">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Technologies"
            className="h-auto w-32"
          />
        </NavLink>

        <nav className="hidden w-full justify-center md:flex">
          <ul className="flex max-w-fit items-center gap-4 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl md:gap-6 md:px-8 lg:gap-10 lg:px-12 lg:text-xl">
            {navLinks.slice(0, 3).map(({ name, link }) => (
              <li key={name} className="group">
                <NavLink
                  to={link}
                  className={({ isActive }) =>
                    `relative px-2 py-1 transition duration-300 ${
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

            <li className="relative group">
              <span className="flex cursor-pointer items-center gap-1 text-white transition duration-300 hover:text-[#4285F4]">
                Products
              </span>

              <ul className="invisible absolute left-1/2 z-50 mt-3 w-64 -translate-x-1/2 rounded-2xl border border-gray-200 bg-white/90 text-sm opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:opacity-100 md:text-lg">
                {products.map((product) => (
                  <li key={product.name}>
                    <NavLink
                      to={product.link}
                      className={({ isActive }) =>
                        `block rounded-lg px-5 py-3 transition ${
                          isActive
                            ? "bg-gray-100 text-[#4285F4]"
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

            <li className="group">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative px-2 py-1 transition duration-300 ${
                    isActive
                      ? "text-[#4285F4]"
                      : "text-white hover:text-[#4285F4]"
                  }`
                }
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#4285F4] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#4285F4]"></span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-md border border-gray-300 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute right-4 top-16 z-50 w-56 rounded-xl bg-white py-4 text-center shadow-lg md:hidden">
          {navLinks.slice(0, 3).map(({ name, link }) => (
            <NavLink
              key={name}
              to={link}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-900 transition hover:text-blue-600"
            >
              {name}
            </NavLink>
          ))}

          <div className="border-y border-gray-100 py-2">
            <p className="py-2 text-sm font-semibold text-gray-500">Products</p>
            {products.map((product) => (
              <NavLink
                key={product.name}
                to={product.link}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {product.name}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-gray-900 transition hover:text-blue-600"
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
