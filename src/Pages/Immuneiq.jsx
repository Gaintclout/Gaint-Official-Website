import React, { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Activity,
  Cpu,
  LineChart,
  Users,
  Menu,
  X,
  Microscope,
  BrainCircuit,
  FileBarChart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "@/components/Footer";

export default function ImmuneIQ() {

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <Header />


      {/* ---------------- HERO SECTION ---------------- */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-32 px-6 text-center mt-24">
        <h1 className="text-5xl md:text-7xl mb-4">GAINT ImmuneIQ</h1>
        <p className="text-2xl md:text-3xl mb-6 max-w-2xl mx-auto">
          AI-driven Immune Scoring & Oncogene Analysis for Preventive Healthcare
        </p>
        <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-200">
          Request Demo
        </Button>
      </section>

      {/* ---------------- OVERVIEW ---------------- */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-6xl mb-6 text-gray-900">Overview</h2>
        <p className="text-3xl leading-relaxed text-gray-700">
          ImmuneIQ combines immune scoring with oncogene analysis to predict
          vulnerabilities in human health. The system leverages AI + genomics to
          provide insights into immunity decline, detect early-stage risks, and
          enable proactive interventions for patients and healthcare providers.
        </p>
      </section>

      {/* ---------------- FEATURES ---------------- */}
      <section className="py-16 px-6 bg-white shadow-sm">
        <h2 className="text-6xl mb-10 text-center text-gray-900">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6 text-center">
              <ShieldCheck className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Immune Scoring</h3>
              <p>
                Calculates immunity strength based on multiple biomarkers,
                genetics, and lifestyle inputs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Cpu className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Oncogene Detection</h3>
              <p>
                AI-powered detection of 500+ oncogenes linked to cancer and
                immunity disorders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto text-purple-600 mb-4" />
              <h3 className="font-semibold text-xl mb-2">Personalized Insights</h3>
              <p>
                Generates actionable reports for individuals, clinicians, and
                research institutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-6xl mb-10 text-center text-gray-900">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Sample Collection",
              icon: (
                <Microscope className="mx-auto h-10 w-10 text-purple-600 mb-4 animate-pulse" />
              ),
            },
            {
              title: "Genomic Sequencing",
              icon: (
                <Cpu className="mx-auto h-10 w-10 text-purple-600 mb-4 animate-spin-slow" />
              ),
            },
            {
              title: "AI Risk Analysis",
              icon: (
                <BrainCircuit className="mx-auto h-10 w-10 text-purple-600 mb-4 animate-bounce" />
              ),
            },
            {
              title: "ImmuneIQ Report",
              icon: (
                <FileBarChart className="mx-auto h-10 w-10 text-purple-600 mb-4 animate-fade" />
              ),
            },
          ].map((step, idx) => (
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

      {/* ---------------- MARKET POTENTIAL ---------------- */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-50 to-indigo-50">
        <h2 className="text-6xl mb-6 text-center text-gray-900">Market Potential</h2>
        <div className="max-w-4xl mx-auto text-center">
          <LineChart className="h-16 w-16 mx-auto text-purple-600 mb-6" />
          <p className="text-2xl leading-relaxed text-gray-700">
            Preventive genomics and immune analytics represent a multi-billion
            dollar opportunity. GAINT ImmuneIQ aims to lead in early detection,
            precision healthcare, and research collaborations globally.
          </p>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl mb-6">Be Part of ImmuneIQ</h2>
        <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
          Collaborate With Us
        </Button>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
}




