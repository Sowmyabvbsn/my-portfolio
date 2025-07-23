import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const containerRef = useRef(null);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background orbs */}
      <div className="floating-orb w-64 h-64 bg-blue-200 dark:bg-blue-900 top-20 left-20" style={{ animationDelay: '0s' }} />
      <div className="floating-orb w-72 h-72 bg-purple-200 dark:bg-purple-900 top-40 right-20" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-56 h-56 bg-pink-200 dark:bg-pink-900 bottom-20 left-40" style={{ animationDelay: '4s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4 max-w-5xl mx-auto"
      >
        <motion.div 
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-secondary/50 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-3 h-3 text-primary" />
          <span className="text-xs tracking-wider text-muted-foreground">CREATIVE DEVELOPER</span>
          <Code2 className="w-3 h-3 text-primary" />
        </motion.div>

        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="block text-foreground mb-2">Bommisetti Venkata</span>
          <span className="block text-foreground mb-2">Bala Sai Naga</span>
          <span className="block text-4xl md:text-6xl text-primary">
            Sowmya
          </span>
        </motion.h1>
        
        <motion.p
          className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-primary font-medium">IT Student</span> • 
          <span className="text-primary font-medium"> Web Developer</span> • 
          <span className="text-primary font-medium"> Problem Solver</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <Button 
            asChild
            size="lg"
            className="group"
          >
            <a href="#projects" className="flex items-center gap-2">
              <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              View My Work
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline" 
            size="lg"
          >
            <a href="#contact" className="flex items-center gap-2">
              Let's Connect
              <ArrowDown className="w-3 h-3 rotate-[-45deg]" />
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-xl mx-auto"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">400+</div>
            <div className="text-xs text-muted-foreground">LeetCode Problems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">7+</div>
            <div className="text-xs text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">8.80</div>
            <div className="text-xs text-muted-foreground">GPA</div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="p-2 rounded-full border bg-secondary/50 backdrop-blur-sm"
        >
          <ArrowDown className="w-4 h-4 text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;