import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import DonorGO from "./Pages/Donorgo.jsx";
import WellNestAI from "./Pages/Wellnestai.jsx";
import ImmuneIQ from "./Pages/Immuneiq.jsx";
import Service from "./Pages/Service.jsx";
import Demo from "./Pages/Home.jsx";
import InternsAppPage from "./Pages/InternsAppPage.jsx";
import QKDPage from "./Pages/QKD.jsx";
import PQC from "./Pages/PQC.jsx";
import GIS from "./Pages/Gis.jsx";
import Workshop from "./Pages/Workshop.jsx";
import Career from "./Pages/Career.jsx";
import Terms from "./Pages/Terms.jsx";
import Privacy from "./Pages/Privacy.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donorgo" element={<DonorGO />} />
      <Route path="/wellnestai" element={<WellNestAI />} />
      <Route path="/immuneiq" element={<ImmuneIQ />} />
      <Route path="/career" element={<Career />} />
      <Route path="/service" element={<Service />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/internsapp" element={<InternsAppPage />} />
      <Route path="/qkd" element={<QKDPage />} />
      <Route path="/pqc" element={<PQC />} />
      <Route path="/gis" element={<GIS />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;
