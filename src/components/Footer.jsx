import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#202A44] backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 text-sm">
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
                className="hover:text-[#c5a77b] transition-colors"
              >
                Career in AI
              </a>
            </li>

            <li>
              <a
                href="https://www.techtarget.com/whatis/definition/quantum-computing"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Quantum Computing
              </a>
            </li>

            <li>
              <a
                href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Machine Learning
              </a>
            </li>

            <li>
              <a
                href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Cloud Computing
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>

          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="hover:text-[#c5a77b] transition-colors"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/services"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Services
              </a>
            </li>

            <li>
              <a href="/" className="hover:text-[#c5a77b] transition-colors">
                Products
              </a>
            </li>

            <li>
              <a
                href="/career"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="hover:text-[#c5a77b] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>

          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#c5a77b] transition-colors">
                AI & ML Solutions
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c5a77b] transition-colors">
                Cloud Integration
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c5a77b] transition-colors">
                IT Consulting
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-[#c5a77b] transition-colors">
                Data Analytics
              </a>
            </li>

            <li>
              <a href="/gis" className="hover:text-[#c5a77b] transition-colors">
                GIS
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="mt-12 flex justify-center gap-8 text-2xl border-t border-gray-700 pt-8">
        {[
          {
            Icon: FaFacebookF,
            link: "https://www.facebook.com/GaintCloutTechnologies",
            label: "Facebook",
          },
          {
            Icon: FaInstagram,
            link: "https://www.instagram.com/gaintclout/",
            label: "Instagram",
          },
          {
            Icon: FaXTwitter,
            link: "https://x.com/Gaintclout",
            label: "X",
          },
          {
            Icon: FaLinkedinIn,
            link: "https://www.linkedin.com/in/gaintclouttechnologies/",
            label: "LinkedIn",
          },
        ].map(({ Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-200 hover:text-[#c5a77b] transition transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Company Logo & Copyright */}
      <div className="text-center mt-10 px-6">
        <img
          src="/images/gaint-logo.png"
          alt="GAINT Clout Logo"
          className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
        />

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD.
          All rights reserved. | CIN: U62013TS2024PTCC186957 | ISO/IEC 9001:2015
          Certified
        </p>

        {/* Legal Links */}
        <div className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-gray-100">
          <a href="/privacy" className="hover:text-[#c5a77b] transition-colors">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-[#c5a77b] transition-colors">
            Terms & Conditions
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent" />
    </footer>
  );
}
