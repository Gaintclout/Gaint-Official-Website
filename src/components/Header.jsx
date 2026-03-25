import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">

      <img src="/gaint-logo.png" className="w-32 h-auto" />

      <nav className="hidden md:flex justify-center w-full">
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 text-sm md:text-base lg:text-xl bg-gray-100 px-4 md:px-6 lg:px-12 py-3 rounded-full shadow-lg">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>

          <li className="relative group">
            <span className="cursor-pointer">Products ▾</span>

            <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl border rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible w-60 z-50">
              {[
                { name: "DonorGO", link: "/Donorgo" },
                { name: "GAINTInternsHub", link: "/internsapp" },
                { name: "GAINTImmuneIQ", link: "/Immuneiq" },
                { name: "WellNest AI Station", link: "/wellnest" },
                { name: "QKD", link: "/qkd" },
                { name: "PQC", link: "/pqc" },
              ].map((p, i) => (
                <li key={i}>
                  <Link to={p.link} className="block px-4 py-2 hover:bg-gray-100">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>

      {/* Mobile */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 p-4">
          <Link to="/" className="block py-2">Home</Link>
          <Link to="/about" className="block py-2">About</Link>
          <Link to="/service" className="block py-2">Services</Link>
          <Link to="/contact" className="block py-2">Contact</Link>
        </div>
      )}
    </header>
  );
}