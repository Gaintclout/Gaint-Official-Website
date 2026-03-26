// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 bg-white/70 backdrop-blur-md shadow-sm z-50">

//       <img src="/gaint-logo.png" className="w-32 h-auto" />

//       <nav className="hidden md:flex justify-center w-full">
//         <ul className="flex items-center gap-4 md:gap-6 lg:gap-10 text-sm md:text-base lg:text-xl bg-gray-100 px-4 md:px-6 lg:px-12 py-3 rounded-full shadow-lg">

//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/service">Services</Link></li>

//           <li className="relative group">
//             <span className="cursor-pointer">Products ▾</span>

//             <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-xl border rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible w-60 z-50">
//               {[
//                 { name: "DonorGO", link: "/Donorgo" },
//                 { name: "GAINTInternsHub", link: "/internsapp" },
//                 { name: "GAINTImmuneIQ", link: "/Immuneiq" },
//                 { name: "WellNest AI Station", link: "/wellnest" },
//                 { name: "QKD", link: "/qkd" },
//                 { name: "PQC", link: "/pqc" },
//               ].map((p, i) => (
//                 <li key={i}>
//                   <Link to={p.link} className="block px-4 py-2 hover:bg-gray-100">
//                     {p.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </li>

//           <li><Link to="/contact">Contact</Link></li>

//         </ul>
//       </nav>

//       {/* Mobile */}
//       <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
//         {menuOpen ? <X /> : <Menu />}
//       </button>

//       {menuOpen && (
//         <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 p-4">
//           <Link to="/" className="block py-2">Home</Link>
//           <Link to="/about" className="block py-2">About</Link>
//           <Link to="/service" className="block py-2">Services</Link>
//           <Link to="/contact" className="block py-2">Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }




 <header className="fixed top-0   w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
        <img src="/gaint-logo.png" alt="GAINT Clout Technologies" className="w-32 h-auto" />
        {/* ---------------- NAVBAR (Animated Dropdown) ---------------- */}
        <nav className="hidden md:flex justify-center w-full mt-4">
          <ul className="
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
  ">

            {/* Home */}
            <li className="group">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `relative px-2 py-1 transition duration-300
          ${isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"}`
                }
              >
                Home

                {/* Glow underline */}
                <span className="
          absolute left-0 -bottom-1 h-[2px]
          bg-[#4285F4]
          w-0 group-hover:w-full
          transition-all duration-300
          shadow-[0_0_10px_#4285F4]
        "></span>
              </NavLink>
            </li>

            {/* About */}
            <li className="group">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative px-2 py-1 transition duration-300
          ${isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"}`
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
                  `relative px-2 py-1 transition duration-300
          ${isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"}`
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

              <ul className="
        absolute left-1/2 transform -translate-x-1/2
        mt-3 bg-white/90 backdrop-blur-lg
        border border-gray-200
        shadow-xl rounded-2xl
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        transition-all duration-300
        w-64 z-50 text-sm md:text-lg
      ">
                {[
                  { name: "DonorGO", link: "/Donorgo" },
                  { name: "GAINTInternsHub", link: "/internsapp" },
                  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
                  { name: "WellNest AI Station", link: "/wellnest" },
                  { name: "QKD", link: "/qkd" },
                  { name: "PQC", link: "/pqc" },
                ].map((product, i) => (
                  <li key={i}>
                    <NavLink
                      to={product.link}
                      className={({ isActive }) =>
                        `block px-5 py-3 rounded-lg transition
                ${isActive ? "text-[#4285F4] bg-gray-100" : "hover:bg-gray-100 hover:text-[#4285F4]"}`
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
                  `relative px-2 py-1 transition duration-300
          ${isActive ? "text-[#4285F4]" : "text-white hover:text-[#4285F4]"}`
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
          className="md:hidden p-2 rounded-md border border-gray-300 text-white"
        >
          {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 text-center py-4 animate-fadeIn z-50">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/service" },
            ].map(({ name, link }) => (
              <a
                key={name}
                href={link}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-900 hover:text-blue-600 transition"
              >
                {name}
              </a>
            ))}

            {/* Products Dropdown (hover/tap reveal) */}
            <div className="relative group">
              <button className="block w-full py-2 text-gray-900 hover:text-blue-600 focus:outline-none">
                Products ▾
              </button>
              <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {[
                  { name: "DonorGO", link: "/Donorgo" },
                  { name: "GAINTInternsHub", link: "/internsapp" },
                  { name: "GAINTImmuneIQ", link: "/Immuneiq" },
                  { name: "WellNest AI Station", link: "/wellnest" },
                  { name: "Quantum Key Distribution (QKD)", link: "/qkd" },
                  { name: "Post-Quantum Cryptography (PQC)", link: "/pqc" },
                ].map(({ name, link }) => (
                  <a
                    key={name}
                    href={link}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-900 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        )}

      </header>