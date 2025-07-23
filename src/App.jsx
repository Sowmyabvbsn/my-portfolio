import { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import { About } from './components/About';
import { Button } from './components/ui/button';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-x-hidden">
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
      <div className="fixed bottom-0 left-0 z-50 w-full md:w-auto md:left-6 md:bottom-6">
        <div className="flex justify-center space-x-3 p-3 bg-card/80 backdrop-blur-md rounded-t-lg md:rounded-lg border shadow-lg">
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-8 w-8 hover:scale-110 transition-all"
          >
            <a 
              href="https://github.com/Sowmyabvbsn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="icon"
            className="h-8 w-8 hover:scale-110 transition-all"
          >
            <a 
              href="https://www.linkedin.com/in/bommisetti-venkata-bala-sai-naga-sowmya-86002a285/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      <footer className="relative z-10 py-8 text-center border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-muted-foreground mb-2 text-sm">
            © {new Date().getFullYear()} Bommisetti Venkata Bala Sai Naga Sowmya
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;