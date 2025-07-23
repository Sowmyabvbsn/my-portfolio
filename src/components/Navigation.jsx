import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ['home', 'projects', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-md bg-background/80 border-b border-border' 
          : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-primary cursor-pointer"
          >
            Sowmya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`nav-link text-sm font-medium ${
                  activeSection === section 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
            
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              {darkMode ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
            
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="outline"
              size="icon"
              className="h-8 w-8"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 p-4 rounded-lg border bg-card"
          >
            <div className="flex flex-col space-y-3">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-primary' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Navigation;