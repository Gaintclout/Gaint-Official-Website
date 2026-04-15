export default function EmployeeCard({ employee }) {
  return (
    <div
      className="bg-[#231e39] text-[#b3b8cd] w-full max-w-sm rounded-lg shadow-lg mx-auto overflow-hidden 
      transform transition duration-500 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* 🔹 Cover */}
      <div
        className="h-36 w-full bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${employee.cover})`,
          backgroundPosition: employee.coverStyle?.position || "center",
        }}
      >
        {/* 🔹 Profile Image */}
        <div className="absolute -bottom-14 left-6">
          <img
            src={employee.image}
            alt={employee.name}
            onError={(e) => (e.target.src = "https://picsum.photos/100")}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#4d2ae9] object-cover shadow-lg"
          />
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="pt-16 pb-5 px-5 text-left">
        {/* Name */}
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">
          {employee.name}
        </h2>

        {/* Role */}
        <div className="mt-2">
          <span className="inline-block px-3 py-1 text-s font-medium bg-[#03bfbc]/20 text-[#03bfbc] rounded-full">
            {employee.role}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          {employee.description}
        </p>

        {/* Experience */}
        {employee.experience && (
          <span className="inline-block mt-4 px-3 py-1 text-xs bg-[#2f2947] text-[#03bfbc] rounded-full">
            {employee.experience}
          </span>
        )}
      </div>
    </div>
  );
}