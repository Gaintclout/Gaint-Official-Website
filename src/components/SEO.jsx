import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://gaintclout.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.png`;

const pages = {
  "/": {
    title: "GAINT Clout Technologies | AI, Software & Cybersecurity Company",
    description: "GAINT Clout Technologies is a Hyderabad-based technology company providing AI development, web and mobile applications, cybersecurity, quantum-safe solutions, GIS and digital transformation services.",
  },
  "/about": { title: "About GAINT Clout Technologies", description: "Learn about GAINT Clout Technologies, a Hyderabad technology company building practical AI, software, cybersecurity, quantum-safe and GIS solutions." },
  "/service": { title: "AI, Software & Cybersecurity Services | GAINT", description: "Explore GAINT's AI development, web and mobile application, custom software, cybersecurity, GIS and digital transformation services in Hyderabad." },
  "/services": { title: "AI, Software & Cybersecurity Services | GAINT", description: "Explore GAINT's AI development, web and mobile application, custom software, cybersecurity, GIS and digital transformation services in Hyderabad." },
  "/pqc": { title: "Post-Quantum Cryptography Solutions | GAINT", description: "Prepare for quantum-era threats with GAINT's standards-based post-quantum cryptography research, migration planning and security solutions." },
  "/qkd": { title: "Quantum Key Distribution Solutions | GAINT", description: "Discover GAINT's Quantum Key Distribution research, secure key-management roadmap and quantum-secure communication solutions." },
  "/gis": { title: "AI-Powered GIS Solutions | GAINT", description: "Use AI-powered GIS, predictive mapping and location intelligence from GAINT to improve planning, monitoring and decision-making." },
  "/internsapp": { title: "GAINT InternsHub | Internship Management Platform", description: "GAINT InternsHub is an internship management platform for organizing applications, student engagement, mentoring and program administration." },
  "/contact": { title: "Contact GAINT Clout Technologies | Hyderabad", description: "Contact GAINT Clout Technologies in Hyderabad to discuss AI, custom software, cybersecurity, quantum-safe, GIS and digital transformation projects." },
  "/career": { title: "Careers at GAINT Clout Technologies | Hyderabad", description: "Explore technology careers and opportunities at GAINT Clout Technologies in Hyderabad." },
  "/donorgo": { title: "DonorGO Digital Giving Platform | GAINT", description: "Discover DonorGO, GAINT's digital platform designed to make donor engagement and giving simpler." },
  "/wellnestai": { title: "WellNest AI Station | GAINT", description: "Explore WellNest AI Station, an intelligent wellness solution from GAINT Clout Technologies." },
  "/immuneiq": { title: "GAINT ImmuneIQ | Intelligent Health Technology", description: "Learn about GAINT ImmuneIQ and its intelligent approach to health technology." },
  "/workshop": { title: "AI Agent Workshop in Hyderabad | GAINT", description: "Join GAINT's hands-on AI Agent Workshop in Hyderabad and learn how to build intelligent automation." },
  "/privacy": { title: "Privacy Policy | GAINT Clout Technologies", description: "Read the GAINT Clout Technologies privacy policy." },
  "/terms": { title: "Terms and Conditions | GAINT Clout Technologies", description: "Read the terms and conditions for GAINT Clout Technologies." },
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";
    const page = pages[normalizedPath] || {
      title: "Page Not Found | GAINT Clout Technologies",
      description: "The requested page could not be found on the GAINT Clout Technologies website.",
      noindex: true,
    };
    const canonicalPath = normalizedPath === "/service" ? "/services" : normalizedPath;
    const canonical = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = page.title;
    setMeta('meta[name="description"]', { name: "description", content: page.description });
    setMeta('meta[name="robots"]', { name: "robots", content: page.noindex ? "noindex, follow" : "index, follow" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: page.description });
    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    setMeta('meta[property="og:image"]', { property: "og:image", content: DEFAULT_IMAGE });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: DEFAULT_IMAGE });

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [pathname]);

  return null;
}
