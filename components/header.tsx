"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-blue-600 text-white">
            <div className="w-full px-4 md:px-6 py-4">
                
                {/* Top Bar */}
                <div className="flex justify-between items-center">
                    
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-bold">
                        Home
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-6">
                            <li><Link href="/professional" className="hover:text-blue-200">Professional</Link></li>
                            <li><Link href="/ec" className="hover:text-blue-200">Extracurriculars</Link></li>
                            <li><Link href="/projects" className="hover:text-blue-200">Projects</Link></li>
                            <li><Link href="/goals" className="hover:text-blue-200">Goals</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-200">Contact</Link></li>
                            <li>
                                <Link 
                                    href="/resume.pdf" 
                                    target="_blank" 
                                    download="My_Resume.pdf"
                                    className="hover:text-blue-200"
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
                        <ul className="flex flex-col gap-4 border-t border-blue-400 pt-4">
                            <li><Link href="/professional">Professional</Link></li>
                            <li><Link href="/ec">Extracurriculars</Link></li>
                            <li><Link href="/projects">Projects</Link></li>
                            <li><Link href="/goals">Goals</Link></li>
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