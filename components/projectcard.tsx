"use client";
import React, { useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
    viewMore?: string; // additional details shown in popup
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    image,
    link,
    viewMore,
}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    return (
        <div className="bg-cyan-100 rounded-lg shadow-md p-6 relative flex flex-col h-full">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-contain rounded-md mb-4"
                />
            )}

            <div className="flex flex-col flex-1">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                </div>

                {(link || viewMore) && (
                    <div className="mt-auto flex flex-wrap items-center gap-4 pt-4">
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                View Project
                            </a>
                        )}

                        {viewMore && (
                            <button
                                onClick={() => setPopupOpen(true)}
                                className="text-blue-600 hover:underline"
                            >
                                View More
                            </button>
                        )}
                    </div>
                )}
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <h4 className="text-lg font-bold mb-2">More about {title}</h4>
                        <p className="mb-4">{viewMore}</p>
                        <button
                            onClick={() => setPopupOpen(false)}
                            className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
