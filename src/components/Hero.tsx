import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const xPercent = (x / width - 0.5) * 2;
      const yPercent = (y / height - 0.5) * 2;
      
      containerRef.current.style.setProperty('--x', `${xPercent * 10}px`);
      containerRef.current.style.setProperty('--y', `${yPercent * 10}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="floating-orb w-72 h-72 bg-purple-500 top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-96 h-96 bg-pink-500 top-40 right-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-64 h-64 bg-cyan-500 bottom-20 left-40" style={{ animationDelay: '4s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4 max-w-6xl mx-auto"
      >
        <motion.div 
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm tracking-wider text-purple-300">CREATIVE DEVELOPER</span>
          <Code2 className="w-4 h-4 text-cyan-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block neon-text mb-4">Bommisetti Venkata</span>
          <span className="block neon-text">Bala Sai Naga</span>
          <span className="block text-6xl md:text-9xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Sowmya
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-cyan-400 font-semibold">IT Student</span> • 
          <span className="text-purple-400 font-semibold"> Web Developer</span> • 
          <span className="text-pink-400 font-semibold"> Problem Solver</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
        >
          <Button 
            asChild
            variant="gradient" 
            size="lg"
            className="group relative overflow-hidden"
          >
            <a href="#projects" className="flex items-center gap-2">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View My Work
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="border-purple-500/50 hover:bg-purple-500/10 hover:border-purple-400"
          >
            <a href="#contact" className="flex items-center gap-2">
              Let's Connect
              <ArrowDown className="w-4 h-4 rotate-[-45deg]" />
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">400+</div>
            <div className="text-sm text-muted-foreground">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">8.80</div>
            <div className="text-sm text-muted-foreground">GPA</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
        >
          <ArrowDown className="w-6 h-6 text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;