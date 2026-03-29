export default function Professional() {
  const experiences = [
    { id: 1, role: "Coding Instructor", company: "Genius Camp Inc.", date: "Sep. 2024 - March. 2025", desc: "Developed and delivered interactive lesson plans that introduced young students to foundational programming concepts and computational logic. I guided students through hands-on projects, including games and animations, while customizing the curriculum to ensure each student could progress and gain confidence in their coding abilities." },
    { id: 2, role: "Service Desk & Infra Analyst Intern", company: "Give & Go Prepared Foods", date: "March. 2025 - Aug. 2025", desc: "Provided technical hardware and software support for a multi-location workforce, using PowerShell and Batch scripting to automate repetitive tasks. I managed user accounts and device compliance through Active Directory and Microsoft Intune, and developed technical SOPs." },
    { id: 3, role: "Database Administrator Co-op", company: "Ontario Government", date: "Jan. 2026 - Present", desc: "In my current role, I oversee end-to-end deployments and data fixes to keep our systems running smoothly across various environments. I also handle security audits and user access to stay compliant with internal standards, while managing EBS updates and patching to make sure our data remains reliable and consistent." }
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Professional Experience</h1>

      <div className="flex flex-col gap-6"> 
        {experiences.reverse().map((exp) => (
          <div 
            key={exp.id} 
            className="flex flex-col p-6 border border-black rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            {/* Top Row: Role/Company on Left, Date on Right */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-black">{exp.role}</h2>
                <p className="text-lg font-medium text-black">{exp.company}</p>
              </div>
              <span className="text-black text-sm mt-1 md:mt-0  px-3 py-1 rounded-full">
                {exp.date}
              </span>
            </div>

            {/* Bottom Row: Description sits alone underneath */}
            <div className="border-t border-black pt-4">
              <p className="text-black leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}