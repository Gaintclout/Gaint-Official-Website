export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Our Commitment to Privacy",
      content: [
        "We are committed to ensuring the confidentiality, protection, security, and accuracy of personal information available to us.",
        "It has been our ongoing strict policy to ensure that personal information is accurate, complete, not misleading, up-to-date, and stored in a secure environment protected from unauthorized access, modification, or disclosure."
      ]
    },
    {
      title: "Protection of Personal and Sensitive Data",
      bullets: [
        "Prevent illegal access to and loss, destruction, falsification, or leakage of personal and sensitive data.",
        "We manage personal and sensitive data strictly and perform security countermeasures to ensure the data is not illegally accessed, lost, destroyed, falsified, or leaked."
      ]
    },
    {
      title: "Collection and Access Control",
      bullets: [
        "Collect personal and sensitive information only when it is reasonably necessary and with due consent.",
        "We ensure that only those who need to use this information have access to it."
      ]
    },
    {
      title: "Compliance with Laws and Regulations",
      bullets: [
        "Observe laws and regulations for protecting personal and sensitive data.",
        "We follow the data protection, security, and privacy laws and regulations related to personal and sensitive data of individuals."
      ]
    },
    {
      title: "Continuous Improvement",
      bullets: [
        "Continuously improve the process of protecting personal and sensitive data.",
        "We regularly monitor laws and regulations for data protection, security, and privacy, and update our systems and processes on an ongoing basis.",
        "We educate all stakeholders about updated systems and processes."
      ]
    },
    {
      title: "Amendment and Deletion of Data",
      content: [
        "If we receive a request to amend or delete data related to personal data protection, unless there is a special reason not to do so, the request shall be suitably met after verifying and validating the identity and authority of the requester."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.15),_transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-16">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-300">
            Data Protection
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                Privacy <span className="text-sky-400">Policy</span>
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">
                Your privacy matters to us. This policy explains how we protect, manage, and handle personal and sensitive information with care, security, and responsibility.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Quick Overview</p>
              <div className="mt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>Data Security</span>
                  <span className="font-semibold text-white">Protected</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span>User Consent</span>
                  <span className="font-semibold text-white">Required</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Legal Compliance</span>
                  <span className="font-semibold text-white">Maintained</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {sections.map((section, index) => (
            <section
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl backdrop-blur-md transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.06] md:p-8"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 text-lg font-bold text-white shadow-lg">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                  <div className="mt-1 h-1 w-16 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
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
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-sky-400/20 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 p-6 text-center shadow-xl">
          <h3 className="text-xl font-semibold text-white">Need help with your personal data?</h3>
          <p className="mt-2 text-slate-300">
            For any request regarding amendment, deletion, or clarification of your personal information, please contact us through the official details provided on our website.
          </p>
        </div>
      </div>
    </div>
  );
}
