import {
  LayoutDashboard,
  Building2,
  Shield,
  Factory,
  Landmark,
} from "lucide-react";

export default function WhoWillPay() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#020024] to-white text-white py-20">

      {/* CONTAINER (VERY IMPORTANT FIX) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-light text-black mb-4 tracking-wide">
          Who Will Pay
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-800 mb-14 text-sm md:text-xl max-w-xl leading-relaxed">
          Key municipal stakeholders ready to invest in urban intelligence solutions.
        </p>

        {/* GRID */}
      {/* GRID */}
<div className="space-y-6">

  {/* FIRST ROW */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      icon={<LayoutDashboard size={20} />}
      title="Smart City Command Centers"
      desc="Centralized operations hubs coordinating city-wide initiatives and emergency response."
    />

    <Card
      icon={<Building2 size={20} />}
      title="Municipal Corporations"
      desc="Local government bodies managing infrastructure, services and urban development."
    />

    <Card
      icon={<Shield size={20} />}
      title="Traffic & Police Departments"
      desc="Law enforcement and traffic management agencies ensuring public safety and mobility."
    />
  </div>

  {/* SECOND ROW (CENTERED) */}
  <div className="flex flex-col sm:flex-row justify-center gap-6">
    <div className="w-full sm:w-[48%] lg:w-[32%]">
      <Card
        icon={<Factory size={20} />}
        title="Pollution Control Boards"
        desc="Environmental agencies monitoring air quality and enforcing environmental regulations."
      />
    </div>

    <div className="w-full sm:w-[48%] lg:w-[32%]">
      <Card
        icon={<Landmark size={20} />}
        title="Urban Planning Authorities"
        desc="Planning commissions designing future city layouts and zoning regulations."
      />
    </div>
  </div>

</div>
      </div>
    </section>
  );
}


/* =========================================
   CARD COMPONENT (PREMIUM + BALANCED)
========================================= */
function Card({ icon, title, desc }) {
  return (
    <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">

      {/* INNER CARD */}
      <div className="relative h-full min-h-[170px] rounded-2xl bg-[#050509] p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1">

        {/* GLOW */}
        <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(236,72,153,0.25)] pointer-events-none"></div>

        {/* ICON */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-300 mb-4">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-medium text-white mb-2 leading-snug">
          {title}
        </h3>

        {/* DESC */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}