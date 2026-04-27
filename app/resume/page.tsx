
export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <p className="mt-2">Detailed overview of my professional background and skills.</p>
      </div>

      <iframe
        src="/resume.pdf"
        title="Resume PDF"
        className="h-[90vh] w-full max-w-4xl rounded-lg shadow-lg"
      />
    </main>
  );
}
