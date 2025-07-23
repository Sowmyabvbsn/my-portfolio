import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, ExternalLink, Github, X, ChevronRight, Star, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: 'TrackTogether',
    description: 'Developed a full-stack web application enabling real-time group location tracking, distance-based alerts, and in-app chat integrated with Google Maps API and geolocation services to ensure accurate mapping and responsive user experiences across devices.',
    tags: ['React.js', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Nodemon', 'Google Maps API', 'REST APIs'],
    github: 'https://github.com/Sowmyabvbsn/track-together',
    featured: true,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'AI Powered Content Generation Platform',
    description: 'An AI app that turns user prompts into real-time creative content like movie scripts, songs, roasts, jokes etc.',
    tags: ['React', 'Node.js', 'Gemini 1.5 flash model', 'Supabase'],
    github: 'https://github.com/Sowmyabvbsn/ImagineAIre',
    featured: true,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'GreenBid',
    description: 'A sustainable auction platform where users can buy or sell eco friendly products with order tracking functionality.',
    tags: ['React.js', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/Sowmyabvbsn/Ecoverse',
    featured: false,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Real-time movie ticketing system',
    description: 'A multi-threaded ticket booking system implemented in Java with a Spring boot backend. It simulates real time ticket purchasing where vendor threads add tickets to a shared pool and customer thread concurrently purchase them.',
    tags: ['Java', 'Spring Boot'],
    github: 'https://github.com/Sowmyabvbsn/java-multithreading-demo-project',
    featured: false,
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Spring AI Chatbot',
    description: 'A simple chatbot built using OpenRouter AI model',
    tags: ['Java', 'Spring Boot', 'Spring AI'],
    github: 'https://github.com/Sowmyabvbsn/spring-ai-chatbot',
    featured: false,
    color: 'from-indigo-500 to-purple-500',
  }
];

const ProjectModal = ({ project, onClose }: { project: typeof projects[0], onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="glow-card max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-4xl font-bold neon-text mb-2">{project.title}</h3>
            {project.featured && (
              <Badge variant="neon" className="mb-4">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="hover:bg-red-500/20 hover:text-red-400"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant={tagIndex % 3 === 0 ? 'neon' : tagIndex % 3 === 1 ? 'purple' : 'green'}
              className="text-sm px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          <Button asChild variant="gradient" size="lg">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.featured
  );

  return (
    <section id="projects" className="py-32 relative">
      {/* Background elements */}
      <div className="floating-orb w-64 h-64 bg-purple-500 top-20 right-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-48 h-48 bg-cyan-500 bottom-40 left-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            <Zap className="inline-block w-12 h-12 mr-4 text-yellow-400" />
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-xl leading-relaxed">
            A collection of my recent projects showcasing cutting-edge web development and innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-16">
          <Button
            onClick={() => setActiveFilter('all')}
            variant={activeFilter === 'all' ? 'gradient' : 'outline'}
            size="lg"
            className="relative overflow-hidden"
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter('featured')}
            variant={activeFilter === 'featured' ? 'neon' : 'outline'}
            size="lg"
            className="relative overflow-hidden"
          >
            <Star className="w-4 h-4 mr-2" />
            Featured
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="glow-card h-full transition-all duration-300 hover:scale-105 cursor-pointer border-0">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 rounded-t-xl`} />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        {project.featured && (
                          <Badge variant="neon" className="animate-pulse">
                            <Star className="w-3 h-3" />
                          </Badge>
                        )}
                        <ArrowUpRight className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-muted-foreground group-hover:text-purple-400" />
                      </div>
                    </div>
                    
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description.length > 120 
                        ? `${project.description.substring(0, 120)}...` 
                        : project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant={tagIndex % 3 === 0 ? 'neon' : tagIndex % 3 === 1 ? 'purple' : 'green'}
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-purple-500/20 hover:text-purple-400"
                    >
                      Details
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;