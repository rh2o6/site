import Image from "next/image";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-8 md:pt-16 px-4">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <p className="mt-2">
          Detailed overview of my professional background and skills.
        </p>
      </div>

      
      <div className="w-full max-w-[700px] p-[4px] rounded-lg bg-gradient-to-r from-[#0D3AF2] via-[#0DF2C5] to-[#0D3AF2] bg-[length:300%_300%] animate-borderMove">
        <Image
          src="/images/robertresumefall-1.png"
          alt="Resume"
          width={700}
          height={990}
          className="w-full h-auto rounded-lg shadow-lg bg-white"
          priority
        />
      </div>

      <button className="mt-6 mb-12 text-center rounded-md bg-[#0D3AF2] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0316AB]">
        <a href="/resume.pdf" download="Robert_Hollander_Resume.pdf">
          Download Resume
        </a>
      </button>
    </main>
  );
}