import employees from "./employeeData";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList() {
  return (
    <section className="py-20 bg-[#f3f3f3] min-h-screen">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-orange-500">
          Meet Our Team
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-10">
        {employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>

    </section>
  );
}