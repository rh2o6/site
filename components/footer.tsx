import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`bg-[#0d3af2] text-white py-6 mt-16 ${inter.className}`}>
            <div className="w-full px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    <div>
                        <p className="font-semibold text-lg">
                            &copy; {currentYear} Robert Hollander.
                        </p>
                        <p className="text-blue-100 text-sm mt-1">
                            Last Updated Apr. 2026
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:justify-end gap-3">
                        <a href="https://www.linkedin.com/in/rh206" className="nav-link">LinkedIn</a>
                        <a href="https://github.com/rh2o6" className="nav-link">Github</a>
                        <a href="mailto:robh206@my.yorku.ca" className="nav-link">Email</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}