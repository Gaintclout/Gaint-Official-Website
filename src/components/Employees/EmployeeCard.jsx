export default function EmployeeCard({ employee }) {
  const icons = {
    facebook: "fab fa-facebook-f",
    twitter: "fab fa-twitter",
    instagram: "fab fa-instagram",
  };

  const providedSocials =
    employee.socials && Object.keys(employee.socials).length > 0
      ? employee.socials
      : null;

  const socialEntries = providedSocials
    ? Object.entries(providedSocials)
    : Object.keys(icons).map((key) => [key, null]);

  return (
    <div className="bg-white w-full max-w-[260px] mx-auto rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center px-6 py-6 flex flex-col h-full">
      
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={employee.image}
          alt={employee.name}
          onError={(e) => (e.target.src = "https://picsum.photos/100")}
          className="w-28 h-28 rounded-full border-[3px] border-orange-300 object-cover"
          style={employee.photoStyle || {}}
        />
      </div>

      {/* Name */}
      <h2 className="mt-3 text-[17px] font-normal text-gray-800">
        {employee.name}
      </h2>

      {/* Description */}
      <p className="text-[13px] text-gray-500 mt-2 leading-relaxed px-2">
        {employee.description}
      </p>

      {/* Role */}
      <div className="mt-3">
        <span className="inline-block bg-blue-50 text-blue-600 text-xs font-normal px-3 py-1 rounded-full">
          {employee.role}
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mt-auto pt-3 text-gray-700 text-sm">
        {socialEntries.map(([key, link]) => {
          const iconClass = icons[key];

          if (!iconClass) return null;

          if (link) {
            return (
              <a
                key={key}
                href={link}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
                className="hover:text-orange-400 transition"
              >
                <i className={iconClass}></i>
              </a>
            );
          }

          return (
            <span
              key={key}
              aria-hidden="true"
              className="opacity-60 cursor-not-allowed"
            >
              <i className={iconClass}></i>
            </span>
          );
        })}
      </div>
    </div>
  );
}