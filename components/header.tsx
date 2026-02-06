import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    
                    {/* Logo / Home Button */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            Home
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <Link href="/" className="text-gray-700 hover:text-gray-900">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-700 hover:text-gray-900">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-700 hover:text-gray-900">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-700 hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    );
}
