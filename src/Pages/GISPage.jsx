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
  className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
  style={{
    backgroundImage: "url('/GISbg.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-16 max-w-4xl mx-auto">
    <motion.h1
      className="
        leading-tight
        text-white
        text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl
        drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]
        mt-10
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      Transforming India with Geospatial Intelligence
    </motion.h1>

    <p
      className="
        text-base sm:text-xl md:text-2xl lg:text-3xl
        text-gray-200
        max-w-[850px]
        leading-relaxed
        mt-4
        font-[Century_Gothic]
      "
    >
      AI-powered GIS solutions for smart cities, infrastructure, and
      data-driven governance.
    </p>

    <div className="flex flex-wrap gap-4 justify-center mt-8">
      <Button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-base"
        onClick={() => navigate('/gis')}
      >
        Explore Solutions
      </Button>

      <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 text-base">
        Request Demo
      </Button>
    </div>
  </div>
</section>
      {/* Services Section */}
     <section className="py-16 px-6 relative">
  <span className="absolute bottom-10 left-0 top-8 sm:left-20 z-0 pointer-events-none text-gray-200 text-5xl sm:text-5xl md:text-8xl rotate-[-12deg]">
    ⟨ψ|H|ψ⟩
  </span>

  <div className="max-w-7xl mx-auto text-center mb-12 relative z-10">

  <h2
    className="
      text-3xl sm:text-4xl md:text-5xl lg:text-5xl
      text-center text-gray-900 tracking-tight
      mb-4
    "
  >
    GAINT GIS Services
  </h2>

  <p
    className="
      text-gray-600 mt-4 max-w-3xl mx-auto
      text-xl sm:text-2xl md:text-3xl lg:text-4xl
      leading-relaxed tracking-wide text-center
    "
  >
    We provide end-to-end geospatial intelligence solutions combining GIS,
    AI, infrastructure planning, and data-driven governance for smarter
    decision-making.
  </p>

</div>
  <div className="grid md:grid-cols-3 gap-6">
    {servicesData.map((service, index) => {
      const Icon = service.icon;

      return (
        <Card
          key={index}
          className="border-0 shadow-none overflow-hidden transition duration-300 h-full flex flex-col"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[340px] md:h-[380px] object-cover object-center"
          />

          <CardContent className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-100 p-2">
                <Icon className="text-blue-600" size={20} />
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl text-gray-900">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
<section className="py-20 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-5xl
        text-center text-gray-900 tracking-tight mb-4
      "
    >
      Our GIS Workflow
    </h2>

    <p
      className="
        text-gray-600 mt-4 max-w-4xl mx-auto
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        leading-relaxed tracking-wide text-center
      "
    >
      From consultation to dashboard delivery, we follow a structured process
      to convert geospatial data into powerful business intelligence.
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
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
        className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
      >
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
          {index + 1}
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          {step}
        </h3>

        {index !== 5 && (
          <div className="hidden lg:block absolute top-12 -right-4 text-3xl text-blue-500">
            →
          </div>
        )}
      </div>
    ))}
  </div>
</section>
      {/* About Section */}
   <section className="py-16 bg-white px-6 text-center">

  <div className="max-w-7xl mx-auto text-center mb-12">

    <h2
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-5xl
        text-center text-gray-900 tracking-tight
        mb-4
      "
    >
      About GAINT GIS
    </h2>

    <p
      className="
        text-gray-600 mt-4 max-w-4xl mx-auto
        text-xl sm:text-2xl md:text-3xl lg:text-4xl
        leading-relaxed tracking-wide text-center
      "
    >
      GAINT delivers advanced geospatial intelligence by combining GIS,
      artificial intelligence, and real-time analytics to empower
      governments and enterprises.
    </p>

  </div>

</section>

      {/* Technology Stack */}
     <section className="py-16 px-6">

  <div className="max-w-7xl mx-auto text-center mb-12">

    <h2
      className="
        text-3xl sm:text-4xl md:text-5xl lg:text-5xl
        text-center text-gray-900 tracking-tight
        mb-4
      "
    >
      Technology Stack
    </h2>

  </div>

  <div className="flex flex-wrap justify-center gap-4">
    {["ArcGIS", "QGIS", "Python", "PostGIS", "React", "AWS"].map(
      (tech, i) => (
        <div
          key={i}
          className="
            px-6 py-3 bg-white shadow-sm rounded-xl
            text-lg sm:text-xl md:text-2xl
            text-gray-800
          "
        >
          {tech}
        </div>
      )
    )}
  </div>

</section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build the Future with GIS?
        </h2>
      </section>

      <Footer />
    </div>
  );
}
