"use client";
import React, { useState } from 'react';
import MoreInfo from './moreinfo';
import { createPortal } from "react-dom";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
    projectLink?: string; 
    details?: string;
    technologiesUsed?: React.ElementType[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link,
    projectLink,
    details,
    technologiesUsed

}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const projectUrl = projectLink ?? link;
    const moreInfo = details;

    return (
        

<div
  className="flex flex-col h-full rounded-xl p-6 bg-[#AFC7FB] shadow-lg shadow-black/20 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0D3AF2]/40">


           

{image && (
  <div className="mb-4 h-40 flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="max-h-full max-w-full object-contain rounded-lg"
    />
  </div>
)}


            <div className="flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                    <p className="text-sm text-[#01065A] leading-relaxed mb-4">{description}</p>
                </div>

                {(projectUrl || moreInfo) && (
                    <div className="mt-auto flex items-center justify-between pt-4">
                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0D3AF2] hover:underline"
                            >
                                View Project
                            </a>
                        )}

                        {moreInfo && (
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="text-[#0D3AF2] hover:underline"
                            >
                                View More
                            </button>
                        )}
                    </div>
                )}
            </div>

            
{isPopupOpen && moreInfo &&
  createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
      onClick={() => setPopupOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <MoreInfo
          projectDescription={details}
          technologiesUsed={technologiesUsed ?? []}
          onClose={() => setPopupOpen(false)}
        />
      </div>
    </div>,
    document.body
  )
}

        </div>
    );
};
