import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Laptop,
  FileText,
  Brain,
  MessageCircle,
  Award,
  Menu,
  X,
  CreditCard,
  Code2,
  ClipboardCheck,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function InternsAppPage() {

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <Header />
    

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-[#007BFF] to-[#00A8E8] text-white py-32 px-6 text-center mt-24">
        <h1 className="text-6xl md:text-7xl mb-4">GAINT InternsHub</h1>
        <p className="text-2xl md:text-4xl mb-6 max-w-2xl mx-auto">
          Smart Internship Management Platform for Students
        </p>
        <Button size="lg" className="bg-white text-[#007BFF] hover:bg-gray-200">
          Request Demo
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6 text-gray-900">Overview</h2>
        <p className="text-3xl leading-relaxed text-gray-600">
          Interns App automates internship processes using AI and integrated tools 
          registration, project allocation, evaluation, reporting, and certification
          all under one digital platform, empowering institutions and students alike.
        </p>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center text-gray-900">
          How It Works
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Student Registration",
              icon: (
                <GraduationCap className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-pulse" />
              ),
            },
            {
              title: "Payment & Project Allocation",
              icon: (
                <CreditCard className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-bounce" />
              ),
            },
            {
              title: "Task Execution",
              icon: (
                <Code2 className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-spin-slow" />
              ),
            },
            {
              title: "AI Evaluation",
              icon: (
                <Brain className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-pulse" />
              ),
            },
            {
              title: "Certificate Download",
              icon: (
                <CheckCircle className="mx-auto h-10 w-10 text-[#007BFF] mb-4 animate-fade" />
              ),
            },
          ].map((step, idx) => (
            <Card
              key={idx}
              className="text-center p-4 shadow-md hover:shadow-xl transition border-t-4 border-[#007BFF] transform hover:-translate-y-2"
            >
              <CardContent>
                {step.icon}
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- KEY FEATURES ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center text-gray-900">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              Icon: Laptop,
              title: "Multi-Role Dashboard",
              desc: "Dedicated portals for Students, Mentors, and Admins for streamlined management.",
            },
            {
              Icon: Brain,
              title: "AI Evaluation",
              desc: "Integrated with VS Code and Instacks for real-time code validation and scoring.",
            },
            {
              Icon: FileText,
              title: "Quincena Reports",
              desc: "Generates reports every 15 days for 45 Days and Semester internships automatically.",
            },
            {
              Icon: MessageCircle,
              title: "AI Chatbot Assistance",
              desc: "Instantly helps students with debugging, queries, and feedback suggestions.",
            },
            {
              Icon: Award,
              title: "Instant Certificate",
              desc: "Auto-generates personalized certificates after completion and payment.",
            },
          ].map(({ Icon, title, desc }, i) => (
            <Card key={i}>
              <CardContent className="p-6 text-center">
                <Icon className="h-12 w-12 mx-auto text-[#007BFF] mb-4" />
                <h3 className="font-semibold text-xl mb-2">{title}</h3>
                <p>{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CALL TO ACTION ---------------- */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-[#E3F2FD] to-[#BBDEFB]">
        <h2 className="text-3xl mb-6 text-gray-900">
          Empowering Students Through Smart Internships
        </h2>
        <Button size="lg" className="bg-[#007BFF] text-white hover:bg-[#0056b3]">
          Get Started Now
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="relative w-full bg-black/80 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          {[
            {
              title: "Popular Links",
              links: [
                ["Career in AI", "https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/"],
                ["Quantum Computing", "https://www.techtarget.com/whatis/definition/quantum-computing"],
                ["Machine Learning", "https://www.stxnext.com/blog/best-machine-learning-blogs-resources"],
                ["Cloud Computing", "https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes"],
                ["Contact Us", "/contact"],
              ],
            },
            {
              title: "Free Tools",
              links: [
                ["AI Text Generator", "https://chatgpt.com/"],
                ["Resume Builder", "https://www.overleaf.com/project/69c3ad156ccbb7caf33151ab"],
                ["File Converter", "https://www.ilovepdf.com/"],
                ["Data Formatter", "https://jsonformatter.org/"],
                ["PDF Split & Merge", "https://www.smallpdf.com/split-pdf"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About Us", "/About"],
                ["Services", "/Service"],
                ["Products", "/"],
                ["Careers", "/Career"],
                ["Contact", "/Contact"],
              ],
            },
            {
              title: "Services",
              links: [
                ["Website Design", "#"],
                ["App Development", "#"],
                ["AI & ML Solutions", "#"],
                ["Cloud Integration", "#"],
                ["IT Consulting", "#"],
                ["Data Analytics", "#"],
                ["GIS", "#"]
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <h3 className="text-white font-semibold mb-4 text-lg">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(([name, href], j) => (
                  <li key={j}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#007BFF]"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
              className="text-gray-200 hover:text-[#007BFF] transition transform hover:scale-110"
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
            <a href="#" className="hover:text-[#007BFF]">Privacy Policy</a>
            <a href="#" className="hover:text-[#007BFF]">Terms & Conditions</a>
            <a href="#" className="hover:text-[#007BFF]">Refund Policy</a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#007BFF]/40 to-transparent"></div>
      </footer>
    </div>
  );
}



