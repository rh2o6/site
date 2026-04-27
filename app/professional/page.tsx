
import ExperienceCard from "@/components/ExperienceCard";

export default function Professional() {
  const experiences = [
    {
      id: 1,
      role: "Coding Instructor",
      company: "Genius Camp Inc.",
      date: "Sep. 2024 - March. 2025",
      desc: "Developed and delivered interactive lesson plans that introduced young students to foundational programming concepts and computational logic. I guided students through hands-on projects, including games and animations, while customizing the curriculum to ensure each student could progress and gain confidence in their coding abilities."
    },
    {
      id: 2,
      role: "Service Desk & Infra Analyst Intern",
      company: "Give & Go Prepared Foods",
      date: "Mar. 2025 - Aug. 2025",
      desc: "Provided technical hardware and software support for a multi-location workforce, using PowerShell and Batch scripting to automate repetitive tasks. I managed user accounts and device compliance through Active Directory and Microsoft Intune, and developed technical SOPs."
    },
    {
      id: 3,
      role: "Database Administrator Co-op",
      company: "Ontario Government",
      date: "Jan. 2026 - Present",
      desc: "In my current role, I oversee end-to-end deployments and data fixes to keep our systems running smoothly across various environments. I also handle security audits and user access to stay compliant with internal standards, while managing EBS updates and patching to make sure our data remains reliable and consistent."
    }
  ];

  return (
    <main className="p-8 mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 pb-2">
          Professional Experience
        </h1>
        <hr className="h-[2px] border-t-0 bg-gradient-to-r from-[#0D3AF2] to-[#0DF2C5]" />
      </div>


      <div className="flex flex-col gap-6">
        {[...experiences].reverse().map((exp) => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            showViewMore
          />
        ))}
      </div>
    </main>
  );
}
