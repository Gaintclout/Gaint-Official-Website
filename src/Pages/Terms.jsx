export default function TermsConditionsPage() {
  const sections = [
    {
      title: "Content on the Website",
      content: [
        "Unless otherwise noted, all content on our website is owned or provided by us or our licensors.",
        "We do our best to ensure the content on our website complies with all laws and respects third-party rights. However, this may not always be achievable.",
        "If you believe your rights are being infringed, without prejudice to any legal prerogatives to enforce your rights, please report any issues using the contact details provided in this document."
      ]
    },
    {
      title: "Rights Regarding Content on Our Website – All Rights Reserved",
      content: [
        "We hold and reserve all intellectual property rights for all content.",
        "You may not use such content in any way that is not necessary or implied for the proper use of the service.",
        "Specifically, but without limitation, you may not copy, download, share (beyond the limits mentioned below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer, assign to third parties, or create derivative works from the content on our website.",
        "You also cannot allow any third party to do so through your account or device, even unknowingly.",
        "Where explicitly stated, you may download, copy, and share some content from our website for personal and non-commercial use, provided you correctly implement copyright and other required attributions.",
        "Any statutory limitations or exceptions to copyright remain unaffected."
      ]
    },
    {
      title: "Access to External Resources",
      content: [
        "Through our website, you may access external resources provided by third parties.",
        "You acknowledge and accept that we have no control over these resources and are not responsible for their content or availability.",
        "Conditions for third-party resources, including any rights granted in their content, are governed by those third parties' terms and conditions or by applicable law."
      ]
    },
    {
      title: "Acceptable Use",
      content: [
        "Our website and service may only be used within the scope of what is provided for, under these terms and applicable law.",
        "You are solely responsible for ensuring your use of our website and service does not violate any laws, regulations, or third-party rights.",
        "We reserve the right to protect our interests by denying you access to our website or service, terminating contracts, and reporting any misconduct to the appropriate authorities if you are involved in or suspected of the following:"
      ],
      bullets: [
        "violating laws, regulations, or these terms;",
        "infringing on third-party rights;",
        "significantly impairing our legitimate interests;",
        "offending us or any third party."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the maximum extent permitted by applicable law, in no event shall we, along with our subsidiaries, affiliates, officers, directors, agents, partners, suppliers, or employees, be liable for:"
      ],
      bullets: [
        "any indirect, punitive, incidental, special, consequential, or exemplary damages arising from or related to your use of, or inability to use, the service, including damages for loss of profits, goodwill, use, data, or other intangible losses;",
        "any damage, loss, or injury resulting from hacking, tampering, or unauthorized access to your account or the information within it;",
        "errors, mistakes, or inaccuracies in the content provided;",
        "personal injury or property damage resulting from your use of the service;",
        "unauthorized access to our secure servers or personal information stored therein;",
        "interruption or cessation of transmission to or from the service;",
        "bugs, viruses, trojan horses, or similar harmful elements transmitted through the service;",
        "errors or omissions in any content posted, transmitted, or made available through the service."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.14),_transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Legal Information
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Terms & <span className="text-cyan-400">Conditions</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                Please read these terms carefully before using our website and services. By accessing or using this platform, you agree to comply with the following conditions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick Overview</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Content Rights</span>
                  <span className="font-semibold text-white">Protected</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>External Links</span>
                  <span className="font-semibold text-white">Third-Party</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>User Responsibility</span>
                  <span className="font-semibold text-white">Required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <section
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.06] md:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="space-y-4 text-slate-300 leading-7">
                {section.content?.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul className="grid gap-3 pt-2">
                    {section.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                      >
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 text-center shadow-xl">
          <h3 className="text-xl font-semibold text-white">Need to report an issue?</h3>
          <p className="mt-2 text-slate-300">
            If you believe your rights are affected or you have any concerns regarding website content, please contact us using the details provided in this document.
          </p>
        </div>
      </div>
    </div>
  );
}
