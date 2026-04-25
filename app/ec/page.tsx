import ExperienceCard from "@/components/ExperienceCard";

export default function Ec() {
  const experiences = [
    {
      id: 1,
      role: "Technology Tutor",
      company: "Vaughan Public Libraries",
      date: "Nov. 2023 - Feb. 2024",
      desc:
        "Volunteered in tutoring elderly folks and program participants one-on-one to learn how to use internet applications and navigate their personal devices. Additionally informed participants of best practices and cyber security knowledge for using the internet."
    },
    {
      id: 2,
      role: "Hackathon Mentor + Organizer",
      company: "Multiple Hackathons",
      date: "2025 - Present",
      desc:
        "I have organized, mentored and assisted in the organization of multiple Hackathons such as CSHub Local Hack day, Ellehacks, & CTRL HACK DEL with initiatives such as Logistics, Development and Marketing."
    },
    {
      id: 3,
      role: "President",
      company: "The Computing Students Hub",
      date: "Jun. 2025 - Present",
      desc:
        "As the President of York University's Computer Science club, I lead teams and collaborate on initiatives to serve our student base such as Hackathons, Social & Academic Events, Guest Speakers and Networking Opportunities."
    }
  ];

  return (
    <main className="p-8 mx-auto max-w-4xl lg:max-w-5xl xl:max-w-6xl">
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 pb-2">
          Volunteering & Extracurricular Experience
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