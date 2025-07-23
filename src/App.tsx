import { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { About } from './components/About';
import { Button } from './components/ui/button';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
        {/* Global background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 pointer-events-none" />
        
        <Navigation 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
        />
        
        <main className="relative z-10">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>

        {/* Floating Social Links */}
        <div className="fixed bottom-0 left-0 z-50 w-full md:w-auto md:left-8 md:bottom-8">
          <div className="flex justify-center space-x-4 p-4 bg-background/80 backdrop-blur-md rounded-t-lg md:rounded-lg border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-purple-500/30 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-110 transition-all"
            >
              <a 
                href="https://github.com/Sowmyabvbsn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-cyan-500/30 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-110 transition-all"
            >
              <a 
                href="https://www.linkedin.com/in/bommisetti-venkata-bala-sai-naga-sowmya-86002a285/"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        <footer className="relative z-10 py-12 text-center border-t border-purple-500/20 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground mb-4">
              © {new Date().getFullYear()} Bommisetti Venkata Bala Sai Naga Sowmya
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;