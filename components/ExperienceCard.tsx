"use client";

function ExperienceCard({ experience }) {
  const { role, company, date, desc } = experience;

  return (
    <div className="flex flex-col p-6 border border-black rounded-xl shadow-sm hover:shadow-md transition-all bg-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-black">{role}</h2>
          <p className="text-lg font-medium text-black">{company}</p>
        </div>
        <span className="text-black text-sm mt-1 md:mt-0 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>

      <div className="border-t border-black pt-4">
        <p className="text-black leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ExperienceCard;