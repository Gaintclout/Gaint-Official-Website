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
import { Globe2 } from "lucide-react";
import Footer from "@/components/Footer";

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
      <Footer />
    </div>
  );
}




