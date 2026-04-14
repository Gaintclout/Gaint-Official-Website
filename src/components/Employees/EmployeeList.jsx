import employees from "./employeeData";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList() {
  return (
    <section className="py-16 bg-[#5f5297] min-h-screen">
      
      {/* 🔹 Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-white">
          Our Team
        </h2>

        <p className="text-white mt-3 max-w-xl mx-auto text-m">
          Meet the talented people behind our company who work passionately 
          to deliver the best experience.
        </p>

        <div className="w-16 h-1 bg-[#03bfbc] mx-auto mt-4 rounded"></div>
      </div>

      {/* 🔹 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>

    </section>
  );
}