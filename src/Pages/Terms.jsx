import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-10 sm:px-8 lg:px-24">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-gray-500 mt-3">
          Gaint Clout Technologies — Legal & Usage Policy
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 text-gray-700 leading-relaxed">

        {/* Intro */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <p>
            These Terms and Conditions apply to your use of all website/app services provided by 
            <b> Gaint Clout Technologies</b>. By accessing or using our services, you agree to be bound by these Terms.
          </p>
          <p className="mt-3">
            These Terms include all policies, guidelines, and additional conditions posted on our platform.
          </p>
        </section>

        {/* Intellectual Property */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Intellectual Property Rights</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All content, logos, and design are owned by Gaint Clout Technologies.</li>
            <li>All trademarks and brand elements remain our exclusive property.</li>
            <li>We may modify these terms anytime with notice.</li>
            <li>Services are not intended for users under 18 without consent.</li>
          </ul>
        </section>

        {/* Account Policy */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Account Registration</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide accurate and complete information.</li>
            <li>Maintain confidentiality of your account.</li>
            <li>Report unauthorized access immediately.</li>
            <li>Only one account per user is allowed.</li>
            <li>Account sharing or automation is prohibited.</li>
          </ul>
        </section>

        {/* Payment */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Payment Policy</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Prices and availability may change without notice.</li>
            <li>All payments must be completed to access projects.</li>
            <li>Taxes and charges are shown before payment.</li>
            <li>Payment confirmation is sent via email.</li>
            <li>We are not responsible for incorrect payment details.</li>
          </ul>
        </section>

        {/* Liability */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Liability & Indemnification</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Services are provided "as is" without warranties.</li>
            <li>We are not responsible for data loss or interruptions.</li>
            <li>Liability is limited to the amount paid in last 12 months.</li>
            <li>Users agree to indemnify against misuse of services.</li>
          </ul>
        </section>

        {/* Common */}
        <section className="bg-white p-6 rounded-2xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Common Provisions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>No waiver of rights if not enforced immediately.</li>
            <li>Services may be suspended for maintenance.</li>
            <li>Reselling or copying services is prohibited.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-gray-900 text-white p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: gaintclout@gmail.com</p>
          <p>Website: https://gaintclout.com</p>
        </section>

      </div>
    </div>
  );
}