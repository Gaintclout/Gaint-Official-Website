import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";


import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Footer from "@/components/Footer";


export default function ContactPage() {
  const [message, setMessage] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent("New Contact Form Message");

    const body = encodeURIComponent(
      `Hello GAINT Clout Technologies,

Name: ${name}
Email: ${email}

Message:
${message}

Regards,
${name}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=gaintclout@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <div className="font-sans text-gray-800 scroll-smooth">
      {/* ======= HEADER ======= */}
      <Header />
      <ScrollToTop />

      {/* ======= HERO SECTION ======= */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 text-white py-20 md:py-32 px-4 sm:px-6 text-center mt-16 md:mt-20">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto"
        >
          Let’s collaborate to create cutting-edge AI and Quantum-driven
          innovations that redefine the future.
        </motion.p>
      </section>

      {/* ======= CONTACT SECTION ======= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Contact Information
            </h2>

            {/* Email */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p className="text-gray-600 text-sm sm:text-base">info@gaintclout.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#34A853] to-[#4285F4] text-white rounded-full">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p className="text-gray-600 text-sm sm:text-base">+91 88972 38849</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white rounded-full">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Visit Us</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Awfis Elite 4th Floor, Orbit Building, Knowledge City,
                  Hyderabad
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
              />

           <textarea
  name="message"
  rows="5"
  placeholder="Your Message"
  required
  maxLength={500}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full border border-gray-300 rounded-lg px-4 py-3"
></textarea>

<p className="text-sm text-gray-500 text-right">
  {message.length}/500 characters
</p>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#4285F4] to-[#34A853] text-white py-3 rounded-lg"
              >
                Send Message
              </button>

            </form>
          </motion.div>
        </div>
      </section>

      {/* ======= GOOGLE MAP ======= */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-[260px] sm:h-[320px] md:h-[400px] mt-8 mb-16 px-4 sm:px-6"
      >
        <iframe
          title="Orbit by Auro Realty Hyderabad"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5246484002787!2d78.37419921122073!3d17.434585483391615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b3ef7cc7b1%3A0x4e57b34c0f138b55!2sGaint%20Clout%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1759927780596!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-2xl shadow-lg"
        ></iframe>
      </motion.section>

      {/* ======= FOOTER ======= */}
      <Footer />
    </div>
  );
}







