import React, { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import {
  Briefcase,
  BarChart,
  Settings,
  Rocket,
  Cpu,
  Heart,
  Banknote,
  GraduationCap,
  HeartPulse,
  Factory,
  Clapperboard,
  Landmark,
  Building2,
  ShoppingBag,
  LineChart,
  Map,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Atom } from "lucide-react";
import Header from "@/components/Header";
import { NavLink } from "react-router-dom";





// ✅ Animated Counter Hook
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else setCount(Math.ceil(start));
    }, 20);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

export default function Home() {
  const heroRef = useRef(null);

  // ✅ Initialize AOS + Parallax Scroll
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      if (heroRef.current) {
        const offset = window.scrollY * 0.5;
        heroRef.current.style.backgroundPositionY = `${offset}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Animated Counters
  const clients = useCounter(9);
  const projects = useCounter(9);
  const awards = useCounter(2);


  {/* Scrolling logos */ }
  const logos = [
    "/public/Aims.png",
    "/Public/btb.png",
    "/public/sun.png",
    "/Public/Datafabric.png",
    "/public/xsdata.png",
    "/public/vedha.png",
    "/public/trust.png",

  ];
  return (
    <div className="font-century gothic text-gray-800 scroll-smooth">
      {/* ---------------- HEADER ---------------- */}
      <Header />

{/* ---------------- HERO / ABOUT ---------------- */}
      <section
        id="about"
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center justify-center md:justify-end"
      >
        {/* 🔹 Fullscreen Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔹 Subtle dark overlay for readability */}
        <div className="absolute inset-0 bg-white/20"></div>

        {/* 🔹 Right-aligned text overlay */}
        <div className="relative z-10 flex flex-col items-center md:items-end text-center md:text-left text-white px-6 sm:px-8 md:px-24 max-w-4xl">
          {/* Glassmorphic Transparent Card */}
          <div className="bg-white/0 backdrop-blur-lg border border-white/10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 md:p-14 transition-all hover:bg-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] ">

            {/* Heading */}
            <h1
              className=" 
        font-semibold leading-none mb-6 animate-fadeInUp
        bg-gradient-to-r from-[#ffffff] to-[#ffffff] bg-clip-text text-transparent        
        text-[64px] sm:text-[96px] md:text-[140px] lg:text-[180px] xl:text-[200px]
        drop-shadow-[0_0_20px_rgba(0,0,0,0.4)]
      "
            >
              GAINT
            </h1>

            {/* Subtext */}
            <p className="
  text-xl sm:text-2xl md:text-4xl lg:text-5xl
  bg-gradient-to-r from-[#ffffff] to-[#ffff00]
  bg-clip-text text-transparent
  max-w-[700px]
  leading-[1.3] md:leading-[1.2]
  tracking-wide
  animate-fadeIn
  font-extrabold italic
">
              Driving the Next <br />

              <span>
                Generation Through <br />
              </span>

              <span>
                INNOVATION in <br />
              </span>

              <span className="bg-gradient-to-r from-[#ffffff] to-[#ffff00] bg-clip-text text-transparent whitespace-nowrap century gothic">
                AI <span className="mx-0">&</span> Quantum Computing
              </span>
            </p>

          </div>
        </div>

      </section>







      {/* ---------------- COUNTERS ---------------- */} 
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12 sm:py-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div data-aos="fade-up">
            <h3 className="text-5xl sm:text-6xl md:text-[90px] lg:text-[100px] font-extrabold mb-2">{clients}+</h3>
            <p className="text-lg sm:text-xl md:text-[28px]">Happy Clients</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-5xl sm:text-6xl md:text-[90px] lg:text-[100px] font-bold mb-2">{projects}+</h3>
            <p className="text-lg sm:text-xl md:text-[28px]">AI Projects Delivered</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-5xl sm:text-6xl md:text-[90px] lg:text-[100px] font-bold mb-2">{awards}</h3>
            <p className="text-lg sm:text-xl md:text-[28px]">Awards & Recognitions</p>
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      {/* ---------------- INDUSTRIES WE SERVICE (BLUE THEME) ---------------- */}
      <section id="services" className="py-12 md:py-20 bg-transparent backdrop-blur-0">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16 px-4" data-aos="fade-up">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Industries We Service
          </h3>
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto">
            Empowering every sector through AI-driven transformation and automation.
          </p>
        </div>

        {/* Industries Grid */}
        {/* Responsive Breakdown:
      - Default: 1 column (mobile)
      - sm: 2 columns (tablets)
      - lg: 3 columns (small laptops)
      - xl: 5 columns (large desktops)
  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 px-6 md:px-12 lg:px-20 place-items-center">
          {[
            {
              icon: <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Education",
              desc: "AI-powered learning platforms, adaptive assessments, and smart academic analytics.",
            },
            {
              icon: <HeartPulse className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Healthcare & Pharma",
              desc: "AI diagnostics, telemedicine, predictive analytics, and connected medical ecosystems.",
            },
            {
              icon: <Landmark className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Public Sector",
              desc: "Smart governance, digital citizen services, and policy analytics using AI.",
            },
            {
              icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "GIS",
              desc: "AI-driven exploration, pipeline monitoring, and energy optimization systems.",
            },
            {
              icon: <BarChart className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Data Analytics",
              desc: "Advanced data insights, BI dashboards, and decision automation.",
            },
            {
              icon: <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Professional Services",
              desc: "Workflow optimization, document AI, and smart client management systems.",
            },
            {
              icon: <Clapperboard className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Media & Entertainment",
              desc: "Content recommendation, media automation, and AI-driven audience insights.",
            },
            {
              icon: <ShoppingBag className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Retail",
              desc: "AI-driven personalization, inventory forecasting, and sentiment engagement.",
            },
            {
              icon: <Building2 className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Real Estate",
              desc: "AI property valuation, virtual tours, and predictive real estate analytics.",
            },
            {
              icon: <Factory className="w-10 h-10 md:w-12 md:h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-500" />,
              title: "Manufacturing",
              desc: "Smart factory automation, robotics integration, and predictive maintenance.",
            }
          ].map((industry, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 50}
              className="group relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl shadow-md w-full max-w-[280px] min-h-[320px] text-center p-6 md:p-8 hover:scale-105 hover:shadow-blue-300/50 transition-all duration-300 overflow-hidden flex flex-col items-center"
            >
              {/* Blue Glow Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-[#4285F4]/10 pointer-events-none"></div>

              {/* Icon */}
              <div className="flex justify-center mb-4 relative z-10">
                {industry.icon}
              </div>

              {/* Content */}
              <h4 className="font-bold text-xl md:text-2xl mb-3 text-gray-800 relative z-10 leading-tight">
                {industry.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-base relative z-10 flex-grow">
                {industry.desc}
              </p>
            </div>
          ))}
        </div>
      </section>





      {/* ---------------- PRODUCTS ---------------- */}
      <section id="products" className="py-20 bg-transparent backdrop-blur-0">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-gray-800 mb-3">Our Products</h3>
          <p className="text-gray-500 text-xl sm:text-2xl md:text-4xl">
            Innovations developed by GAINT
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-6 md:px-20">

          {/* 👉 FIRST 3 CARDS */}
          {[
            {
              icon: <Heart className="w-12 h-12 text-[#4285F4]" />,
              name: "DonorGO",
              desc: "Smart blood donation and emergency request system integrating donors, hospitals, and NGOs.",
              link: "/donorgo",
            },
            {
              icon: <GraduationCap className="w-12 h-12 text-[#4285F4]" />,
              name: "GAINT InternHub",
              desc: "AI-driven internship & training platform with projects, code evaluation, and job placement.",
              link: "/internsapp",
            },
            {
              icon: (
                <LineChart className="w-12 h-12 text-[#4285F4] animate-pulse drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]" />
              ),
              name: "GAINT ImmuneIQ",
              desc: "AI-fintech dashboard for investment analytics, trading insights, and market prediction.",
              link: "/Immuneiq",
            },
          ].map((product, i) => (
            <a
              key={i}
              href={product.link}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
              className="group relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl shadow-md p-8 text-center hover:scale-105 hover:shadow-blue-300 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-[#4285F4]/25"></div>

              <div className="flex justify-center mb-4 relative z-10 animate-float">
                {product.icon}
              </div>

              <h4 className="font-semibold text-2xl mb-2 text-gray-800 relative z-10 text-century gothic">
                {product.name}
              </h4>

              <p className="text-gray-700 text-xl relative z-10 text-century gothic">
                {product.desc}
              </p>
            </a>
          ))}

          {/* 👉 LAST 2 CENTERED */}
          <div className="md:col-span-3 flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 md:gap-20">

            {[
              {
                icon: (
                  <HeartPulse className="w-12 h-12 text-[#4285F4] animate-pulse drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]" />
                ),
                name: "WellNest AI Station",
                desc: "AI-powered smart healthcare kiosk integrating vitals monitoring, telemedicine, and real-time diagnostics for rural and urban health ecosystems.",
                link: "/wellnestai",
              },
              {
                icon: (
                  <Building2 className="w-12 h-12 text-[#4285F4] animate-bounce drop-shadow-[0_0_15px_rgba(66,133,244,0.5)]" />
                ),
                
                name: "Unips",
                desc: "Unified Intelligent Business System for enterprise automation, analytics, and decision-making across finance, operations, and customer management.",
                link: "/gis",
              },
            ].map((product, i) => (
              <a
                key={i}
                href={product.link}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
                className="group relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl shadow-md p-8 text-center hover:scale-105 hover:shadow-blue-300 transition-all overflow-hidden w-full max-w-sm"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl bg-[#4285F4]/25"></div>

                <div className="flex justify-center mb-4 relative z-10 animate-float">
                  {product.icon}
                </div>

                <h4 className="font-semibold text-2xl mb-2 text-gray-800 relative z-10 text-century gothic">
                  {product.name}
                </h4>

                <p className="text-gray-700 text-xl relative z-10 text-century gothic">
                  {product.desc}
                </p>
              </a>
            ))}

          </div>

        </div>
      </section>


      {/* ---------------- TESTIMONIALS ---------------- */}
      {/* <section id="testimonials" className="py-20 bg-gray-50">
        <div className="text-center mb-12" data-aos="fade-up">
          <h3 className="text-6xl  mb-2">Testimonials</h3>
          <p className="text-gray-500 text-4xl">What our clients say about us</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-6 md:px-20">
  {[
    {
      name: "Sarah Taylor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "GAINT’s AI solutions revolutionized our operations. Their innovation and professionalism are unmatched.",
    },
    {
      name: "Michael Anderson",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "Working with GAINT was a game-changer. Their team brought real intelligence and automation to our business processes.",
    },
    {
      name: "Priya Nair",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      quote:
        "GAINT’s approach to AI and analytics is cutting-edge. They truly understand how to turn data into decisions.",
    },
  ].map((client, index) => (
    <div
      key={index}
      data-aos="zoom-in"
      className="bg-white rounded-3xl shadow-lg w-80 p-6 text-center hover:shadow-2xl transition-all"
    >
      <img
        src={client.img}
        alt={client.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h4 className="font-semibold mb-2 text-2xl text-century gothic">{client.name}</h4>
      <p className="text-gray-500 text-xl mb-4 text-century gothic">“{client.quote}”</p>
      <div className="flex justify-center gap-4 text-gray-500 text-2xl">
        <FaFacebookF className="hover:text-green-600" />
        <FaInstagram className="hover:text-green-600" />
        <FaLinkedinIn className="hover:text-green-600" />
      </div>
    </div>
  ))}
</div>

      </section> */}


      {/* Scrolling logos */}

      <section className="bg-white py-10 overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-3xl sm:text-4xl md:text-6xl text-gray-800">Our Collaborations</h3>
          <p className="text-gray-500 text-xl sm:text-2xl md:text-4xl">
            Industry, Academia, and Media partnerships powering GAINT
          </p>
        </div>

        {/* Scrolling logos wrapper */}
        <div className="relative flex overflow-hidden py-10 bg-white">
          {/* Duplicate logos for seamless loop */}
          <div className="flex animate-scroll gap-20">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i + 1}`}
                className="h-10  object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>

        {/* Tailwind custom animation */}
        <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: calc(200%); /* double width for looping */
          animation: scroll 35s linear infinite;
        }
      `}</style>
      </section>




      {/* ---------------- FOOTER ---------------- */}
      {/* <footer className="relative w-full bg-black/70 backdrop-blur-lg text-gray-300 border-t border-gray-800"> */}
      <footer className="relative w-full bg-black/60 backdrop-blur-xl text-gray-300 border-t border-gray-700 py-16 overflow-hidden">
        {/* ========= Top Grid ========= */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Popular Links</h3>
            <ul className="space-y-2">
              <li><a href="https://www.guvi.in/blog/ai-and-ml-job-opportunities-in-india/" target="blank" className="hover:text-[#c5a77b]">Career in AI</a></li>
              <li><a href="https://www.techtarget.com/whatis/definition/quantum-computing" target="blank" className="hover:text-[#c5a77b]">Quantum Computing</a></li>
              <li><a href="https://www.stxnext.com/blog/best-machine-learning-blogs-resources" target="blank" className="hover:text-[#c5a77b]">Machine Learning</a></li>
              <li><a href="https://learn.rumie.org/jR/bytes/learn-the-basics-of-cloud-computing-in-3-minutes/?gad_source=1&gclid=EAIaIQobChMI59vHyq-QiwMVsKtmAh0Anjd0EAAYBCAAEgI_CfD_BwE" target="blank" className="hover:text-[#c5a77b]">Cloud Computing</a></li>
              <li><a href="/contact" className="hover:text-[#c5a77b]">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Free Tools</h3>
            <ul className="space-y-2">
              <li><a href="https://chatgpt.com/" className="hover:text-[#c5a77b]">AI Text Generator</a></li>
              <li><a href="https://www.overleaf.com/project/69c3ad156ccbb7caf33151ab" className="hover:text-[#c5a77b]">Resume Builder</a></li>
              <li><a href="https://www.ilovepdf.com/" className="hover:text-[#c5a77b]">File Converter</a></li>
              <li><a href="https://jsonformatter.org/" className="hover:text-[#c5a77b]">Data Formatter</a></li>
              <li><a href="https://www.smallpdf.com/split-pdf" className="hover:text-[#c5a77b]">PDF Split & Merge</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="/About" className="hover:text-[#c5a77b]">About Us</a></li>
              <li><a href="/Service" className="hover:text-[#c5a77b]">Services</a></li>
              <li><a href="/" className="hover:text-[#c5a77b]">Products</a></li>
              <li><a href="/Career" className="hover:text-[#c5a77b]">Careers</a></li>
              <li><a href="/Contact" className="hover:text-[#c5a77b]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#c5a77b]">Website Design</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">App Development</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">AI & ML Solutions</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">Cloud Integration</a></li>
              <li><a href="#" className="hover:text-[#c5a77b]">IT Consulting</a></li>

              <li><a href="#" className="hover:text-[#c5a77b]">Data Analytics</a></li>
              <li><a href="/gis" className="hover:text-[#c5a77b]">GIS</a></li>
            </ul>
          </div>
        </div>

        {/* ========= Social Icons ========= */}
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
              className="text-gray-200 hover:text-[#c5a77b] transition transform hover:scale-110"
            >
              <Icon />
            </a>
          ))}
        </div>


        {/* ========= Logo Section ========= */}
        <div className="text-center mt-10">
          <img
            src="/gaint-logo.png"
            alt="GAINT Clout Logo"
            className="mx-auto h-12 w-auto mb-4 opacity-90 hover:opacity-100 transition-all duration-300"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GAINT CLOUT TECHNOLOGIES PVT LTD. All rights reserved.
          </p>

          <div className="mt-3 flex justify-center gap-6 text-xs text-gray-100">
            <a href="#" className="hover:text-[#c5a77b]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c5a77b]">Terms & Conditions</a>
            {/* <a href="#" className="hover:text-[#c5a77b]">Refund Policy</a> */}
          </div>
        </div>

        {/* ========= Glow Line ========= */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#c5a77b]/40 to-transparent"></div>
      </footer>
      {/* </footer> */}
    </div>
  );
}
