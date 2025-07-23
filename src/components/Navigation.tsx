import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navigation = ({ darkMode, setDarkMode }: NavigationProps) => {
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
          ? 'backdrop-blur-md bg-background/80 border-b border-purple-500/20' 
          : ''
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold neon-text cursor-pointer"
          >
            Sowmya
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`nav-link text-lg font-medium ${
                  activeSection === section 
                    ? 'text-purple-400' 
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
              className="border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-400" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              onClick={() => setDarkMode(!darkMode)}
              variant="outline"
              size="icon"
              className="border-purple-500/30 hover:bg-purple-500/10"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-purple-400" />
              )}
            </Button>
            
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="outline"
              size="icon"
              className="border-purple-500/30 hover:bg-purple-500/10"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
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
            className="md:hidden mt-4 p-4 rounded-lg border border-purple-500/30 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4">
              {sections.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-purple-400' 
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