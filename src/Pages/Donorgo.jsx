import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Users,
  Heart,
  LineChart,
  Share2,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function DonorGOPage() {

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
         {/* ---------------- HEADER ---------------- */}
      <Header />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-red-600 to-pink-500 text-white py-32 px-6 text-center mt-24">
        <h1 className="text-7xl  mb-4">DonorGO</h1>
        <p className="text-3xl mb-6 max-w-2xl mx-auto">
          Make Giving Transparent, Simple, and Impactful with AI & Blockchain
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-200">
          Request Investor Deck
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6  text-gray-900">Overview</h2>
        <p className="text-3xl leading-relaxed text-gray-700">
          DonorGO is a mobile-first donation platform that connects donors with
          charities through AI-powered matching and blockchain-backed transparency.
          It simplifies philanthropy, builds trust, and makes giving engaging for
          individuals and organizations.
        </p>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center  text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Sign Up", "Discover Causes", "Donate Securely", "Track Impact", "Share & Inspire"].map((step, idx) => (
            <Card key={idx} className="text-center p-4 shadow-md hover:shadow-xl transition">
              <CardContent>
                <CheckCircle className="mx-auto h-10 w-10 text-red-600 mb-4" />
                <h3 className="font-semibold text-lg">{step}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- KEY FEATURES ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center  text-gray-900">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI Matching</h3>
              <p>Connects donors to causes aligned with their values and goals.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Transparent Giving</h3>
              <p>Blockchain ensures donations are tracked and verified end-to-end.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Share2 className="h-12 w-12 mx-auto text-red-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Community Impact</h3>
              <p>Share campaigns to inspire others and amplify fundraising efforts.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- MARKET OPPORTUNITY ---------------- */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 to-purple-50">
        <h2 className="text-6xl mb-6 text-center  text-gray-900">
          Market Opportunity
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <LineChart className="h-16 w-16 mx-auto text-red-600 mb-6" />
          <p className="text-2xl leading-relaxed text-gray-700">
            Digital philanthropy is growing into a multi-billion-dollar market.
            DonorGO’s recurring donation model, AI-driven personalization, and
            analytics services for nonprofits position it for massive scale and
            impact.
          </p>
        </div>
      </section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl  mb-6">Be Part of the Change</h2>
        <Button size="lg" className="bg-red-600 text-white hover:bg-purple-700">
          Partner With Us
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/" target="blank" className="hover:text-[#c5a77b]">Career in AI</a></li>
              <li><a href="https://www.techtarget.com/whatis/definition/quantum-computing" target="blank" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
              <li><a href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources" target="blank" className="hover:text-[#c5a77b]">Machine Learning</a></li>
              <li><a href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes" target="blank" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
              <li><a href="/contact" className="hover:text-[#c5a77b]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
            <ul className="space-y-2">
              <li><a href="https://chatgpt.com/" className="hover:text-[#c5a77b]">AI Text Generator</a></li>
              <li><a href="https://www.overleaf.com/project/69c3ad156ccbb7caf33151ab" className="hover:text-[#c5a77b]">Resume Builder</a></li>
              <li><a href="https://www.ilovepdf.com/" className="hover:text-[#c5a77b]">File Converter</a></li>
              <li><a href="https://jsonformatter.org/" className="hover:text-[#c5a77b]">Data Formatter</a></li>
              <li><a href="https://www.smallpdf.com/split-pdf" className="hover:text-[#c5a77b]">PDF Split & Merge</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="/About" className="hover:text-[#c5a77b]">About Us</a></li>
              <li><a href="/Service" className="hover:text-[#c5a77b]">Services</a></li>
              <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
              <li><a href="/Career" className="hover:text-[#c5a77b]">Careers</a></li>
              <li><a href="/Contact" className="hover:text-[#c5a77b]">Contact</a></li>
            </ul>
          </div>

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
          {[
            { Icon: FaFacebookF, link: "https://www.facebook.com/GaintCloutTechnologies" },
            { Icon: FaInstagram, link: "https://www.instagram.com/gaintclout/" },
            { Icon: FaXTwitter, link: "https://x.com/Gaintclout" },
            { Icon: FaLinkedinIn, link: "https://www.linkedin.com/in/gaintclouttechnologies/" },
          ].map(({ Icon, link }, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-[#c5a77b] transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
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
            <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a>
          </div>
        </div>

        {/* Glow Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
    </div>
  );
}



