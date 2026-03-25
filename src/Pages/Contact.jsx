// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Menu, X, Mail, Phone, MapPin } from "lucide-react";


// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
// } from "react-icons/fa6";


// export default function ContactPage() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showProducts, setShowProducts] = useState(false);
//   const [message, setMessage] = useState("");
//   const [isWhiteBg, setIsWhiteBg] = useState(false);
  

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const name = e.target.user_name.value;
//     const email = e.target.user_email.value;
//     const message = e.target.message.value;

//     const subject = encodeURIComponent("New Contact Form Message");

//     const body = encodeURIComponent(
//       `Hello GAINT Clout Technologies,

// Name: ${name}
// Email: ${email}

// Message:
// ${message}

// Regards,
// ${name}`
//     );

//     window.open(
//       `https://mail.google.com/mail/?view=cm&fs=1&to=gaintclout@gmail.com&su=${subject}&body=${body}`,
//       "_blank"
//     );
//   };

//   return (
//     <div className="font-sans text-gray-800 scroll-smooth">
//       {/* ======= HEADER ======= */}
//         <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-4 /70 backdrop-blur-md shadow-sm z-50">
//              <img src="/gaint-logo.png" alt="GAINT Clout Technologies" className="w-32 h-auto" />
//              {/* ---------------- NAVBAR (Animated Dropdown) ---------------- */}
//             <nav className="hidden md:flex justify-center w-full">
//              <ul className="
//                flex items-center 
//                gap-4 md:gap-6 lg:gap-10
//                text-sm md:text-base lg:text-xl
//                bg-gray-100 
//                px-4 md:px-6 lg:px-12 
//                py-2 md:py-3 lg:py-4
//                rounded-full 
//                shadow-lg
//                max-w-fit
//              ">
           
//                <li><a href="/">Home</a></li>
//                <li><Link to="/about">About</Link></li>
//                <li><Link to="/service">Services</Link></li>
           
//                <li className="relative group">
//                  <span className="flex items-center gap-1 cursor-pointer">
//                    Products ▾
//                  </span>
           
//                  <ul className="
//                    absolute left-1/2 transform -translate-x-1/2
//                    mt-2 bg-white shadow-xl border rounded-2xl
//                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
//                    transition-all duration-300 w-60 z-50 text-sm md:text-lg
//                  ">
//                    {[
//                      { name: "DonorGO", link: "/Donorgo" },
//                      { name: "GAINTInternsHub", link: "/internsapp" },
//                      { name: "GAINTImmuneIQ", link: "/Immuneiq" },
//                      { name: "WellNest AI Station", link: "/wellnest" },
//                      { name: "QKD", link: "/qkd" },
//                      { name: "PQC", link: "/pqc" },
//                    ].map((product, i) => (
//                      <li key={i}>
//                        <a href={product.link} className="block px-4 py-2 hover:bg-gray-100">
//                          {product.name}
//                        </a>
//                      </li>
//                    ))}
//                  </ul>
//                </li>
           
//                <li><a href="/contact">Contact</a></li>
           
//              </ul>
//            </nav>
     
//              {/* Mobile Nav */}
//              <button
//                onClick={() => setMenuOpen(!menuOpen)}
//                className="md:hidden p-2 rounded-md border border-gray-300 text-white"
//              >
//                {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
//              </button>
//              {menuOpen && (
//                <div className="absolute top-16 right-4 bg-white shadow-lg rounded-xl w-56 text-center py-4 animate-fadeIn z-50">
//                  {[
//                    { name: "Home", link: "/" },
//                    { name: "About", link: "/about" },
//                    { name: "Services", link: "/service" },
//                  ].map(({ name, link }) => (
//                    <a
//                      key={name}
//                      href={link}
//                      onClick={() => setMenuOpen(false)}
//                      className="block py-2 text-gray-900 hover:text-blue-600 transition"
//                    >
//                      {name}
//                    </a>
//                  ))}
     
//                  {/* Products Dropdown (hover/tap reveal) */}
//                  <div className="relative group">
//                    <button className="block w-full py-2 text-gray-900 hover:text-blue-600 focus:outline-none">
//                      Products ▾
//                    </button>
//                    <div className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                      {[
//                        { name: "DonorGO", link: "/Donorgo" },
//                        { name: "GAINTInternsHub", link: "/internsapp" },
//                        { name: "GAINTImmuneIQ", link: "/Immuneiq" },
//                        { name: "WellNest AI Station", link: "/wellnest" },
//                        { name: "Quantum Key Distribution (QKD)", link: "/qkd" },
//                        { name: "Post-Quantum Cryptography (PQC)", link: "/pqc" },
//                      ].map(({ name, link }) => (
//                        <a
//                          key={name}
//                          href={link}
//                          onClick={() => setMenuOpen(false)}
//                          className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition"
//                        >
//                          {name}
//                        </a>
//                      ))}
//                    </div>
//                  </div>
     
//                  <a
//                    href="/contact"
//                    onClick={() => setMenuOpen(false)}
//                    className="block py-2 text-gray-900 hover:text-blue-600 transition"
//                  >
//                    Contact
//                  </a>
//                </div>
//              )}
     
//            </header>

//       {/* ======= HERO SECTION ======= */}
//       <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-32 px-6 text-center mt-32">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl md:text-6xl mb-4"
//         >
//           Get in Touch
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.8 }}
//           className="text-3xl max-w-2xl mx-auto"
//         >
//           Let’s collaborate to create cutting-edge AI and Quantum-driven
//           innovations that redefine the future.
//         </motion.p>
//       </section>

//       {/* ======= CONTACT SECTION ======= */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Info Cards */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-6"
//           >
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">
//               Contact Information
//             </h2>

//             {/* Email */}
//             <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
//                 <Mail size={22} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900">Email Us</h4>
//                 <p className="text-gray-600 text-sm">info@gaintclout.com</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#34A853] to-[#4285F4] text-white rounded-full">
//                 <Phone size={22} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900">Call Us</h4>
//                 <p className="text-gray-600 text-sm">+91 88972 38849</p>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
//               <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
//                 <MapPin size={22} />
//               </div>
//               <div>
//                 <h4 className="font-semibold text-gray-900">Visit Us</h4>
//                 <p className="text-gray-600 text-sm">
//                   Awfis Elite 4th Floor, Orbit Building, Knowledge City,
//                   Hyderabad
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-white shadow-lg rounded-2xl p-8"
//           >
//             <h3 className="text-3xl font-bold text-gray-900 mb-6">
//               Send us a Message
//             </h3>
//             <form onSubmit={handleSubmit} className="space-y-5">

//               <input
//                 type="text"
//                 name="user_name"
//                 placeholder="Full Name"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3"
//               />

//               <input
//                 type="email"
//                 name="user_email"
//                 placeholder="Email Address"
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3"
//               />

//            <textarea
//   name="message"
//   rows="5"
//   placeholder="Your Message"
//   required
//   maxLength={500}
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   className="w-full border border-gray-300 rounded-lg px-4 py-3"
// ></textarea>

// <p className="text-sm text-gray-500 text-right">
//   {message.length}/500 characters
// </p>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white py-3 rounded-lg"
//               >
//                 Send Message
//               </button>

//             </form>
//           </motion.div>
//         </div>
//       </section>

//       {/* ======= GOOGLE MAP ======= */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="w-full h-[400px] mt-8 mb-16"
//       >
//         <iframe
//           title="Orbit by Auro Realty Hyderabad"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5246484002787!2d78.37419921122073!3d17.434585483391615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3ef7cc7b1%3A0x4e57b34c0f138b55!2sGaint%20Clout%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1759927780596!5m2!1sen!2sin"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           className="rounded-2xl shadow-lg"
//         ></iframe>
//       </motion.section>

//       {/* ======= FOOTER ======= */}
//       <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
//           <div>
//             <h3 className="text-white font-semibold mb-4 text-lg">
//               Popular Links
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/"
//                   target="blank"
//                   className="hover:text-[#c5a77b]"
//                 >
//                   Career in AI
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.techtarget.com/whatis/definition/quantum-computing"
//                   target="blank"
//                   className="hover:text-[#c5a77b]"
//                 >
//                   Quantum Computing
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources"
//                   target="blank"
//                   className="hover:text-[#c5a77b]"
//                 >
//                   Machine Learning
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"
//                   target="blank"
//                   className="hover:text-[#c5a77b]"
//                 >
//                   Cloud Computing
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact" className="hover:text-[#c5a77b]">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
//             <ul className="space-y-2">
//               <li><a href="https://chatgpt.com/" className="hover:text-[#c5a77b]">AI Text Generator</a></li>
//               <li><a href="https://www.overleaf.com/project/69c3ad156ccbb7caf33151ab" className="hover:text-[#c5a77b]">Resume Builder</a></li>
//               <li><a href="https://www.ilovepdf.com/" className="hover:text-[#c5a77b]">File Converter</a></li>
//               <li><a href="https://jsonformatter.org/" className="hover:text-[#c5a77b]">Data Formatter</a></li>
//               <li><a href="https://www.smallpdf.com/split-pdf" className="hover:text-[#c5a77b]">PDF Split & Merge</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
//             <ul className="space-y-2">
//               <li><a href="/about" className="hover:text-[#c5a77b]">About Us</a></li>
//               <li><a href="/service" className="hover:text-[#c5a77b]">Services</a></li>
//               <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
//               <li><a href="/career" className="hover:text-[#c5a77b]">Careers</a></li>
//               <li><a href="/contact" className="hover:text-[#c5a77b]">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="hover:text-[#c5a77b]">Website Design</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">App Development</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">AI & ML Solutions</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">Cloud Integration</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">IT Consulting</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">Data Analytics</a></li>
//               <li><a href="#" className="hover:text-[#c5a77b]">GIS</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
//           {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
//             (Icon, i) => (
//               <a
//                 key={i}
//                 href="#"
//                 className="text-gray-400 hover:text-[#c5a77b] transition transform hover:scale-110"
//               >
//                 <Icon />
//               </a>
//             )
//           )}
//         </div>

//         <div className="text-center mt-10">
//           <img
//             src="/gaint-logo.png"
//             alt="GAINT Clout Logo"
//             className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
//           />
//           <p className="text-gray-400 text-sm">
//             © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All
//             rights reserved.
//           </p>

//           <div className="mt-3 flex justify-center gap-6 text-xs text-gray-500">
//             <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
//             <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
//             {/* <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a> */}
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
//       </footer>
//     </div>
//   );
// }




import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function ContactPage() {
  const [message, setMessage] = useState("");

  // ✅ FORM SUBMIT FUNCTION (CORRECT)
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent("New Contact Form Message");

    const body = encodeURIComponent(
      `Hello GAINT Clout Technologies,

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=gaintclout@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div className="font-sans text-gray-800">
       <Header />

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-32 text-center">
        <motion.h1 className="text-5xl md:text-6xl mb-4">
          Get in Touch
        </motion.h1>

        <motion.p className="text-xl md:text-2xl max-w-2xl mx-auto">
          Let’s collaborate to build AI and Quantum innovations.
        </motion.p>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact Information</h2>

          <div className="flex gap-3 items-center">
            <Mail /> <span>info@gaintclout.com</span>
          </div>

          <div className="flex gap-3 items-center">
            <Phone /> <span>+91 88972 38849</span>
          </div>

          <div className="flex gap-3 items-center">
            <MapPin /> <span>Hyderabad, India</span>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white shadow-lg p-6 rounded-xl">

          <input
            type="text"
            name="user_name"   // ✅ IMPORTANT
            placeholder="Full Name"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="user_email"   // ✅ IMPORTANT
            placeholder="Email Address"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <textarea
            name="message"   // ✅ IMPORTANT
            rows="5"
            placeholder="Your Message"
            required
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />

          <p className="text-sm text-gray-500 text-right">
            {message.length}/500 characters
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </section>
 <Footer />
    </div>
  );
}