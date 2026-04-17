import employees from "./employeeData";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeList() {
  return (
   <section className="py-20 bg-[#f3f3f3] min-h-screen px-4">
  
  {/* Header */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold text-orange-500">
      Our Team
    </h2>
  </div>

  {/* Wrapper (IMPORTANT) */}
  <div className="max-w-6xl mx-auto">
    
    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
      {employees.map((emp) => (
        <EmployeeCard key={emp.id} employee={emp} />
      ))}
    </div>

  </div>

</section>
  );
}