import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Building2,
  Leaf,
  Construction,
  AlertTriangle,
  Brain,
  MapPinned,
} from "lucide-react";

const servicesData = [
  {
    title: "GIS Mapping & Digitization",
    icon: MapPinned,
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
    image: "/s3.jpg",
  },
  {
    title: "Infrastructure GIS",
    icon: Construction,
    image: "/s4.jpg",
  },
  {
    title: "Disaster Management",
    icon: AlertTriangle,
    image: "/s5.jpg",
  },
  {
    title: "AI + GIS Analytics",
    icon: Brain,
    image: "/s6.png",
  },
];

export default function GaintGISWebsite() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 text-gray-900 font-century-gothic">
      <Header />

      {/* Hero Section */}
      <section
        className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-cover bg-center px-4 pb-16 pt-28 text-center sm:min-h-[620px] sm:px-6 sm:pt-32 lg:min-h-[700px] lg:px-8"
        style={{
          backgroundImage: "url('/GISbg.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-2 text-center text-white sm:px-6 md:px-10">
          <motion.h1
            className="mt-6 text-3xl leading-tight text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.4)] sm:text-4xl md:mt-10 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transforming India with Geospatial Intelligence
          </motion.h1>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-lg md:text-xl lg:text-2xl font-[Century_Gothic]">
            AI-powered GIS solutions for smart cities, infrastructure, and
            data-driven governance.
          </p>

          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
            <Button
              className="w-full max-w-xs bg-blue-500 px-6 py-2 text-base text-white hover:bg-blue-600 sm:w-auto"
              onClick={() => navigate("/gis")}
            >
              Explore Solutions
            </Button>

            {/* <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-base">
        Request Demo
      </Button> */}
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <span className="pointer-events-none absolute left-2 top-6 z-0 rotate-[-12deg] text-4xl text-gray-200 sm:left-16 sm:text-5xl md:text-7xl">
          ⟨ψ|H|ψ⟩
        </span>

        <div className="relative z-10 mx-auto mb-10 max-w-7xl text-center sm:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            GAINT GIS Services
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed tracking-normal text-gray-600 sm:text-lg md:text-2xl lg:text-3xl">
            We provide end-to-end geospatial intelligence solutions combining
            GIS, AI, infrastructure planning and data-driven governance for
            smarter decision-making.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={index}
                className="flex h-full flex-col overflow-hidden border-0 shadow-none transition duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover object-center sm:h-72 md:h-80"
                />

                <CardContent className="flex flex-grow flex-col p-5 sm:p-6">
                  <div className="mb-2 flex items-start gap-3">
                    <div className="shrink-0 bg-blue-100 p-2">
                      <Icon className="text-blue-600" size={20} />
                    </div>

                    <h3 className="text-lg leading-snug text-gray-900 sm:text-xl md:text-2xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                    High-quality geospatial solutions tailored for real-world
                    applications.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* GIS Work Process */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-7xl text-center sm:mb-14">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our GIS Workflow
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed tracking-normal text-gray-600 sm:text-lg md:text-2xl lg:text-3xl">
            From consultation to dashboard delivery, we follow a structured
            process to convert geospatial data into powerful business
            intelligence.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {[
            "Consultation",
            "Data Collection",
            "GIS Mapping",
            "AI Analytics",
            "Dashboard Delivery",
            "Ongoing Support",
          ].map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center shadow-md transition duration-300 hover:shadow-xl sm:p-6"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
                {index + 1}
              </div>

              <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                {step}
              </h3>

              {index !== 5 && (
                <div className="absolute -right-4 top-12 hidden text-3xl text-blue-500 xl:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section className="bg-white px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            About GAINT GIS
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed tracking-normal text-gray-600 sm:text-lg md:text-2xl lg:text-3xl">
            GAINT delivers advanced geospatial intelligence by combining GIS,
            artificial intelligence, and real-time analytics to empower
            governments and enterprises.
          </p>
        </div>

      </section>

      {/* Technology Stack */}
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto mb-10 max-w-7xl text-center sm:mb-12">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Technology Stack
          </h2>
        </div>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 sm:gap-4">
          {["ArcGIS", "QGIS", "Python", "PostGIS", "React", "AWS", "Power BI"].map(
            (tech, i) => (
              <div
                key={i}
                className="rounded-xl bg-white px-4 py-2 text-sm text-gray-800 shadow-sm sm:px-6 sm:py-3 sm:text-lg md:text-xl"
              >
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black px-4 py-16 text-center text-white sm:px-6 sm:py-20">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Ready to Build the Future with GIS?
        </h2>
      </section>

      <Footer />
    </div>
  );
}
