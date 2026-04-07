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
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
}




