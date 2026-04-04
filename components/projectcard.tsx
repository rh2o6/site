"use client";
import React, { useState } from 'react';
import MoreInfo from './moreinfo';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
    projectLink?: string; 
    details?: string;
    technologiesUsed?: React.ElementType[];
    howWhyBuilt?: string; 
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link,
    projectLink,
    details,
    technologiesUsed,
    howWhyBuilt,

}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const projectUrl = projectLink ?? link;
    const moreInfo = details;

    return (
        <div className="bg-blue-600 rounded-lg shadow-md p-6 relative flex flex-col h-full">
           {image && (
  <div className="w-full h-48 rounded-lg mb-4 bg-white/10 flex items-center justify-center p-4">
  <img
    src={image}
    alt={title}
    className="max-w-full max-h-full object-contain rounded-sm" 
  />
</div>
)}

            <div className="flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl text-white font-semibold mb-2">{title}</h3>
                    <p className="text-white">{description}</p>
                </div>

                {(projectUrl || moreInfo) && (
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                        {projectUrl && (
                            <a
                                href={projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:underline"
                            >
                                View Project
                            </a>
                        )}

                        {moreInfo && (
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="text-white hover:underline"
                            >
                                View More
                            </button>
                        )}
                    </div>
                )}
            </div>

            {isPopupOpen && moreInfo && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setPopupOpen(false)}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <MoreInfo
                            projectDescription={details}
                            technologiesUsed={technologiesUsed ?? []}
                            howWhyBuilt={howWhyBuilt ?? ""}
                            onClose={() => setPopupOpen(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
