import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-blue-600 text-white py-8 mt-12">
            <div className="container mx-auto px-4">
       

            {/* Bottom */}
            <div className="grid grid-cols-2 gap-4 pt-8">

                <div>
                    <p>&copy; {currentYear} Robert Hollander.</p>
                    <p>Last Updated Jan. 2026</p>
                </div>
                <div className="links text-right"> 
                    <a href="/privacy" className="hover:underline mx-2">LinkedIn</a>
                    <a href="/terms" className="hover:underline mx-2">Github</a>
                    <a href="/terms" className="hover:underline mx-2">Email: robert201621@gmail.com</a>
                </div>
            </div>
            </div>
        </footer>
    );
}
