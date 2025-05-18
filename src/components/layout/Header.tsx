import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1A2B4C]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl flex items-center">
          <div className="h-8 w-8 bg-[#3CAEA3] rotate-45 mr-2 flex items-center justify-center">
            <span className="text-white font-bold text-lg -rotate-45">YL</span>
          </div>
          <span className="hidden sm:block">Yingchao Li</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-[#3CAEA3] transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-[#3CAEA3] transition-colors">About</Link>
          <Link to="/experience" className="text-white hover:text-[#3CAEA3] transition-colors">Experience</Link>
          <Link to="/projects" className="text-white hover:text-[#3CAEA3] transition-colors">Projects</Link>
          <Link to="/research" className="text-white hover:text-[#3CAEA3] transition-colors">Research</Link>
          <Link to="/contact" className="px-4 py-2 bg-[#3CAEA3] text-white rounded hover:bg-[#3CAEA3]/80 transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-[#1A2B4C]/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4">
          <Link 
            to="/" 
            className="text-white hover:text-[#3CAEA3] transition-colors py-2 border-b border-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-[#3CAEA3] transition-colors py-2 border-b border-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/experience" 
            className="text-white hover:text-[#3CAEA3] transition-colors py-2 border-b border-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link 
            to="/projects" 
            className="text-white hover:text-[#3CAEA3] transition-colors py-2 border-b border-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link 
            to="/research" 
            className="text-white hover:text-[#3CAEA3] transition-colors py-2 border-b border-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Research
          </Link>
          <Link 
            to="/contact" 
            className="text-white bg-[#3CAEA3] py-2 px-4 rounded text-center hover:bg-[#3CAEA3]/80 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
