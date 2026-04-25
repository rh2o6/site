"use client";
import { useState } from "react";
function ExperienceCard({ experience, showViewMore = false}) {
  const { role, company, date, desc } = experience;
  const [open,setOpen] = useState(false);


  return (
    <>
 
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
          <p className="text-black leading-relaxed line-clamp-3">
            {desc}
          </p>

          {showViewMore && (
            <button
              onClick={() => setOpen(true)}
              className="mt-2 text-sm font-medium text-blue-600 hover:underline"
            >
              View More
            </button>
          )}
        </div>
      </div>

    
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-lg w-full p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            
          </div>
        </div>
      )}
    </>
  );
}

export default ExperienceCard;
