"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {



    e.preventDefault();



    

emailjs
  .sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    formRef.current!,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  )
  .then(
        (result) => {
          console.log("SUCCESS:", result.status, result.text);
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error details:", error.status, error.text || error);
        }
      );
  };

 return (
    <main className="px-4">
      <div className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-bold py-8 md:py-16">Contact</h1>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg leading-8 text-muted-foreground">
            Have a question, an idea, or want to work together?
            <br />
            Feel free to reach out! I'm always happy to connect and explore new opportunities.
          </p>
        </div>

        <div className="pt-8 md:pt-12 contact-box max-w-md w-full">
          <p className="pb-4 text-center">
            For general inquiries please send me a message below!
          </p>

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col space-y-4 items-center">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-2 border rounded"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-2 border rounded"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-2 border rounded"
            />

            <button
              type="submit"
              className="mt-4 text-center rounded-md bg-[#0D3AF2] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0316AB]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}