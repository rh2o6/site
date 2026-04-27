"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

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
    () => {
      alert("Message sent successfully!");
      e.target.reset();
    },
    (error) => {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  );
  }

  return (

    <main>
      <div className="flex min-h-screen flex-col items-center">
        <h1 className="text-4xl font-bold pt-20 pb-20">Contact</h1>

        <div className="space-y-4 text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            You can reach me below for any inquiries, collaborations, or just
            to say hello! I’m always open to connecting with like-minded
            individuals and exploring new opportunities.
          </p>
        </div>

        <p className="pt-20">
          For business inquiries please reach out via E-Mail:
        </p>
        <a href="mailto:business@robertslab.top">
          business@robertslab.top
        </a>

        <div className="pt-20 contact-box max-w-md w-full">
          <p className="pb-4">
            For general inquiries please send me a message below!
          </p>

          
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
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
              className="w-full bg-black text-white p-2 rounded hover:opacity-80"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
