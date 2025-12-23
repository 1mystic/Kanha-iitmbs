import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Pride', path: '/pride' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Bulletin', path: '/bulletin' },
    { name: 'Creatives', path: '/creatives' },
    { name: 'Library', path: '/library' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? 'pt-2' : 'pt-4'} px-2 md:px-4`}>
      <div className={`max-w-7xl mx-auto bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md rounded-2xl paper-shadow border border-primary/20 dark:border-primary/10 transition-all duration-300 ${scrolled ? 'py-2 px-4 shadow-lg' : 'px-4 md:px-6 py-3'}`}>
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src="/logo.webp" alt="Logo" className="w-10 h-10 rounded-full object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-secondary dark:text-primary leading-none transition-colors">KANHA</span>
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Student House</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors relative group ${isActive(link.path) ? 'text-secondary dark:text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-secondary dark:hover:text-primary'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-1 left-1/2 h-0.5 bg-secondary dark:bg-primary transition-all duration-300 ${isActive(link.path) ? 'w-1/2 left-1/4' : 'w-0 group-hover:w-1/2 group-hover:left-1/4'}`}></span>
              </Link>
            ))}

            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-secondary dark:text-primary"
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined">contrast</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-secondary dark:text-primary"
            >
              <span className="material-symbols-outlined">contrast</span>
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-secondary dark:text-primary p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-2 pb-6 pt-4 border-t border-gray-100 dark:border-gray-800 mt-2 animate-enter">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors ${isActive(link.path)
                    ? 'bg-secondary/10 dark:bg-primary/10 text-secondary dark:text-primary'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;