"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#0d3af2] text-white">
            <div className="w-full px-4 md:px-6 py-4">
                
                <div className="flex justify-between items-center">
                    
                
                    <Link href="/" className="nav-link text-xl md:text-2xl font-bold">
                        Home
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex gap-6">
                            <li><Link href="/professional" className="nav-link">Professional Experience</Link></li>
                            <li><Link href="/ec" className="nav-link">Extracurriculars</Link></li>
                            <li><Link href="/projects" className="nav-link">Projects</Link></li>
                            <li><Link href="/services" className="nav-link">Services</Link></li>
                            <li><Link href="/skills" className="nav-link">Skills</Link></li>
                            <li><Link href="/contact" className="nav-link">Contact</Link></li>
                            <li>
                                <Link 
                                    href="/resume" 
                                    className="nav-link"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                        <span className="w-6 h-0.5 bg-white"></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <nav className="mt-4 md:hidden">
                        <ul className="flex flex-col gap-4 border-t border-na-400 pt-4">
                            <li><Link href="/professional">Professional Experience</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href='/skills'>Skills</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li>
                                <Link 
                                    href="/resume.pdf" 
                                    target="_blank" 
                                    download="My_Resume.pdf"
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}