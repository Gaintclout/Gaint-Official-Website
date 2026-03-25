import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">

        {/* Popular Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            Popular Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b]"
              >
                Career in AI
              </a>
            </li>
            <li>
              <a
                href="https://www.techtarget.com/whatis/definition/quantum-computing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b]"
              >
                Quantum Computing
              </a>
            </li>
            <li>
              <a
                href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b]"
              >
                Machine Learning
              </a>
            </li>
            <li>
              <a
                href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b]"
              >
                Cloud Computing
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#c5a77b]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Free Tools */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://chatgpt.com/" className="hover:text-[#c5a77b]">
                AI Text Generator
              </a>
            </li>
            <li>
              <a href="https://www.overleaf.com/project/69c3ad156ccbb7caf33151ab" className="hover:text-[#c5a77b]">
                Resume Builder
              </a>
            </li>
            <li>
              <a href="https://www.ilovepdf.com/" className="hover:text-[#c5a77b]">
                File Converter
              </a>
            </li>
            <li>
              <a href="https://jsonformatter.org/" className="hover:text-[#c5a77b]">
                Data Formatter
              </a>
            </li>
            <li>
              <a href="https://www.smallpdf.com/split-pdf" className="hover:text-[#c5a77b]">
                PDF Split & Merge
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-[#c5a77b]">About Us</a></li>
            <li><a href="/service" className="hover:text-[#c5a77b]">Services</a></li>
            <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
            <li><a href="/career" className="hover:text-[#c5a77b]">Careers</a></li>
            <li><a href="/contact" className="hover:text-[#c5a77b]">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#c5a77b]">Website Design</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">App Development</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">AI & ML Solutions</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">Cloud Integration</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">IT Consulting</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">Data Analytics</a></li>
            <li><a href="#" className="hover:text-[#c5a77b]">GIS</a></li>
          </ul>
        </div>

      </div>

      {/* Social Icons */}
      <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
        {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
          (Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-400 hover:text-[#c5a77b] transition transform hover:scale-110"
            >
              <Icon />
            </a>
          )
        )}
      </div>

      {/* Bottom */}
      <div className="text-center mt-10">
        <img
          src="/gaint-logo.png"
          alt="GAINT Clout Logo"
          className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
        />
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All rights reserved.
        </p>

        <div className="mt-3 flex justify-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
          <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
    </footer>
  );
}