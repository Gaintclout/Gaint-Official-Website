import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
  Cpu,
  Users,
  Menu,
  X,
  ClipboardCheck,
  BrainCircuit,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function WellNestA() {

  const workflowSteps = [
    {
      title: "Patient Check-in",
      icon: <ClipboardCheck className="mx-auto h-10 w-10 text-blue-600 mb-4 animate-pulse" />,
    },
    {
      title: "Vitals Collection",
      icon: <HeartPulse className="mx-auto h-10 w-10 text-red-500 mb-4 animate-pulse" />,
    },
    {
      title: "AI Analysis",
      icon: <BrainCircuit className="mx-auto h-10 w-10 text-indigo-600 mb-4 animate-spin-slow" />,
    },
    {
      title: "Doctor Consultation",
      icon: <Stethoscope className="mx-auto h-10 w-10 text-green-600 mb-4 animate-bounce" />,
    },
  ];

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <Header />
      <ScrollToTop />

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-32 px-6 text-center mt-24">
        <h1 className="text-5xl md:text-7xl mb-4">WellNest AI Station</h1>
        <p className="text-2xl md:text-3xl mb-6 max-w-2xl mx-auto">
          AI-powered Health Station for Remote Diagnostics & Preventive Care
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200">
          Explore Pilot
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6 text-gray-900">Overview</h2>
        <p className="text-2xl leading-relaxed text-gray-700">
          WellNest AI integrates medical devices, AI-driven diagnostics, and cloud
          health records to provide preventive healthcare at scale. Designed for
          villages, schools, and corporate hubs, it enables affordable and
          accessible healthcare for everyone.
        </p>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center text-gray-900">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <HeartPulse className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Vitals Monitoring</h3>
              <p>Measure BP, Glucose, ECG, SpO₂, and temperature seamlessly.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Cpu className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">AI Diagnostics</h3>
              <p>Early detection of chronic diseases with predictive AI models.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Community Health</h3>
              <p>Track population health & generate real-time government reports.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center text-gray-900">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {workflowSteps.map((step, idx) => (
            <Card
              key={idx}
              className="text-center p-4 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <CardContent>
                {step.icon}
                <h3 className="font-semibold text-lg">{step.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-teal-50 to-blue-50">
        <h2 className="text-3xl mb-6">Partner With WellNest AI</h2>
        <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
          Collaborate Now
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}




