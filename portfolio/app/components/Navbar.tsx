import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Works', href: '#works' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll= () => {
            setIsScrolled(window.scrollY>50);
        };

        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[]);     

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}
            `}
        >
            <div className="container mx-auto flex h-15 items-center justify-between px-2 sm:px-6 lg:px-2">
        
        {/* Right Aligned: Creative Developer Title */}
            <div className="text-xl font-extrabold tracking-tight text-gray-900 transition-colors duration-300 hover:text-indigo-600 sm:text-2xl">
            Creative Developer
            </div>

            {/* Left Aligned: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-600 transition duration-150 hover:text-indigo-600 hover:underline underline-offset-4"
                >
                {link.name}
                </a>
            ))}
            </nav>

            {/* MOBILE MENU BUTTON */}
            <button
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {/* MOBILE MENU PANEL */}
        <div 
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-60' : 'max-h-0'}
            `}
        >
            <nav className="flex flex-col space-y-3 p-4 border-t border-gray-100 bg-white shadow-lg">
            {navLinks.map((link) => (
                <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-700 p-2 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition"
                onClick={() => setIsMenuOpen(false)} 
                >
                {link.name}
                </a>
            ))}
            </nav>
        </div>

        </header>
    );
}

export default Navbar