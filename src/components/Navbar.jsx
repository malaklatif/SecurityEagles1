import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../Image/Logo1.png';
import { Button } from './ui/button.jsx';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Certify', href: '/certify' },
    { name: 'Documentation', href: '/documentation' },
    { name: 'News', href: '/new' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-9xl mx-auto px-9">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Security Eagles Logo" className="h-12 w-auto" />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-xl text-white leading-tight">SecurityEagles</span>
              <span className="text-xs text-green-400 mt-0.5 ml-14" style={{lineHeight: '1'}}>By Atlas Defender</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ease-out group ${
                    isActive ? "text-green-400" : "text-gray-300 hover:text-green-400"
                  }`}
                >
                  {link.name}
                  {/* Animated underline (now further below the text) */}
                  <span
                    className={`absolute left-0 bottom-[-30px] h-1 bg-green-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/login">
              <Button
                variant="ghost"
                className="relative text-gray-300 hover:text-white hover:bg-transparent font-medium text-sm px-0 transition-all duration-300 ease-out hover:scale-105
                  after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-green-400 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left
                  hover:after:scale-x-100"
                style={{ overflow: 'visible' }}
              >
                Login
              </Button>
            </Link>
            <Link to="/guest">
              <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-2 rounded-md text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 transform">
                Get Started 
              </Button>
            </Link>
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-slate-800/50 p-2 rounded-md transition-all duration-300 ease-out hover:scale-110 hover:rotate-12"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-all duration-300 ease-out hover:scale-110 hover:bg-slate-800/30 p-2 rounded-md"
            >
              {isOpen ? (
                <X size={24} className="transition-transform duration-300 ease-out rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 ease-out hover:rotate-180" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ease-out py-2 group ${
                    isActive ? "text-green-400" : "text-gray-300 hover:text-green-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {/* Mobile animated underline (now further below the text) */}
                  <span
                    className={`absolute left-0 bottom-[-6px] h-1.5 bg-green-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              )
            })}
            <div className="flex flex-col space-y-4 pt-4 border-t border-slate-700/50">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-slate-800/30 font-medium text-sm w-full justify-start px-3 py-2 rounded-md transition-all duration-300 ease-out hover:translate-x-1"
                >
                  Login
                </Button>
              </Link>
              <Link to="/guest" onClick={() => setIsOpen(false)}>
                <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold py-3 rounded-md text-sm transition-all duration-300 ease-out w-full hover:scale-105 hover:shadow-lg hover:shadow-green-400/25">
                  Guest
                </Button>
              </Link>
              <Button
                onClick={toggleTheme}
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-slate-800/30 font-medium text-sm w-full justify-start px-3 py-2 rounded-md transition-all duration-300 ease-out hover:translate-x-1"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-4 w-4 mr-2 transition-transform duration-300 ease-out group-hover:rotate-180" />
                    Switch to Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4 mr-2 transition-transform duration-300 ease-out group-hover:rotate-12" />
                    Switch to Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 