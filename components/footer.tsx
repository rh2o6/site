import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-900 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Column 1: About */}
                <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <p className="text-gray-400 text-sm">
                    Your company description goes here.
                </p>
                </div>

                {/* Column 2: Links */}
                <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
                </div>

                {/* Column 3: Social */}
                <div>
                <h3 className="text-lg font-semibold mb-4">Follow</h3>
                <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                    <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; {currentYear} Robert Hollander.</p>
            </div>
            </div>
        </footer>
    );
}