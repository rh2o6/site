export default function Ec() {
  const experiences = [
    { id: 1, role: "Technology Tutor", company: "Vaughan Public Libraries", date: "Nov. 2023 - Feb. 2024", desc: "Volunteered in tutoring elderly folks and program participants one-on-one to learn how to use internet applications and navigate their personal devices. Additionally informed participants of best practices and cyber security knowledge for using the internet." },
    { id: 2, role: "Hackathon Mentor + Organizer", company: "Multiple Hackathons", date: "2025 - Present", desc: "I have organized, mentored and assisted in the organization of multiple Hackathons such as CSHub Local Hack day, Ellehacks, & CTRL HACK DEL with initiatives such as Logistics, Development and Marketing." },
    { id: 3, role: "President", company: "The Computing Students Hub", date: "Jun. 2025 - Present", desc: "As the President of York University's Computer Science club, I lead teams and collaborate on initiatives to serve our student base such as  Hackathons, Social & Academic Events, Guest Speakers and Networking Opportunities." }
  ];

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">Volunteering & Extracurricular Experience</h1>

      <div className="flex flex-col gap-6"> 
        {experiences.reverse().map((exp) => (
          <div 
            key={exp.id} 
            className="flex flex-col p-6 border border-black rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-black">{exp.role}</h2>
                <p className="text-lg font-medium text-black">{exp.company}</p>
              </div>
              <span className="text-black text-sm mt-1 md:mt-0  px-3 py-1 rounded-full">
                {exp.date}
              </span>
            </div>

           
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