import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Map,
  Building2,
  Leaf,
  Construction,
  AlertTriangle,
  Brain,
} from "lucide-react";

const servicesData = [
  {
    title: "GIS Mapping & Digitization",
    icon: Map,
    image: "/s1.jfif",
  },
  {
    title: "Smart City GIS",
    icon: Building2,
    image: "/s2.jfif",
  },
  {
    title: "Agriculture Intelligence",
    icon: Leaf,
    image: "/s3.jfif",
  },
  {
    title: "Infrastructure GIS",
    icon: Construction,
    image: "/s4.jfif",
  },
  {
    title: "Disaster Management",
    icon: AlertTriangle,
    image: "/s5.jfif",
  },
  {
    title: "AI + GIS Analytics",
    icon: Brain,
    image: "/s6.png",
  },
];

export default function GaintGISWebsite() {
  return (
    <div className="bg-gray-50 text-gray-900 font-century-gothic">
      <Header />
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('/GISpage-bg.png')",
        }}
      >
        {/* Gradient Overlay (better than plain black) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-4xl">
          <motion.h1
            className="text-5xl md:text-5xl font-bold mb-6 leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transforming India with Geospatial Intelligence
          </motion.h1>

          <p className="text-xl md:text-2xl mx-auto mb-8 text-center leading-relaxed text-gray-200">
            AI-powered GIS solutions for smart cities, infrastructure, and
            data-driven governance.
          </p>

          <div className="flex gap-4 justify-center">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base">
              Explore Solutions
            </Button>

            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-base">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
      {/* Services Section */}
      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          GAINT GIS Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* 🔹 IMAGE */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-44 object-cover"
                />

                <CardContent className="p-6">
                  {/* 🔹 ICON + TITLE */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Icon className="text-blue-600" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                  </div>

                  {/* 🔹 DESCRIPTION */}
                  <p className="text-sm text-gray-600">
                    High-quality geospatial solutions tailored for real-world
                    applications.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">About GAINT GIS</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          GAINT delivers advanced geospatial intelligence by combining GIS,
          artificial intelligence, and real-time analytics to empower
          governments and enterprises.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Technology Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["ArcGIS", "QGIS", "Python", "PostGIS", "React", "AWS"].map(
            (tech, i) => (
              <div key={i} className="px-4 py-2 bg-white rounded-xl shadow-sm">
                {tech}
              </div>
            ),
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Build the Future with GIS?
        </h2>
        <Button className="mt-4">Contact Us</Button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
