import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white">
            <div className="w-full px-2 sm:px-4 md:px-6 py-4">
                <div className="flex justify-between items-center w-full">
                    
                 
                    <Link href="/" className="text-2xl font-bold">
                        Home
                    </Link>

                    <nav>
                        <ul className="flex gap-4 sm:gap-6 md:gap-8">
                            <li><Link href="/professional" className="hover:text-blue-200 transition">Professional Experience</Link></li>
                            <li><Link href="/ec" className="hover:text-blue-200 transition">Extracurriculars & Community Involvement</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-200 transition">Contact</Link></li>
                            <li><Link 
  href="/resume.pdf" 
  target="_blank" 
  download="My_Resume.pdf"
  className="hover:text-blue-200 transition"
>
  Resume
</Link></li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}
