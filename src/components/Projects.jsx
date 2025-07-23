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
  },
  {
    title: 'AI Powered Content Generation Platform',
    description: 'An AI app that turns user prompts into real-time creative content like movie scripts, songs, roasts, jokes etc.',
    tags: ['React', 'Node.js', 'Gemini 1.5 flash model', 'Supabase'],
    github: 'https://github.com/Sowmyabvbsn/ImagineAIre',
    featured: true,
  },
  {
    title: 'GreenBid',
    description: 'A sustainable auction platform where users can buy or sell eco friendly products with order tracking functionality.',
    tags: ['React.js', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/Sowmyabvbsn/Ecoverse',
    featured: false,
  },
  {
    title: 'Real-time movie ticketing system',
    description: 'A multi-threaded ticket booking system implemented in Java with a Spring boot backend. It simulates real time ticket purchasing where vendor threads add tickets to a shared pool and customer thread concurrently purchase them.',
    tags: ['Java', 'Spring Boot'],
    github: 'https://github.com/Sowmyabvbsn/java-multithreading-demo-project',
    featured: false,
  },
  {
    title: 'Spring AI Chatbot',
    description: 'A simple chatbot built using OpenRouter AI model',
    tags: ['Java', 'Spring Boot', 'Spring AI'],
    github: 'https://github.com/Sowmyabvbsn/spring-ai-chatbot',
    featured: false,
  }
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-card border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
            {project.featured && (
              <Badge variant="soft" className="mb-4">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant={tagIndex % 2 === 0 ? 'soft' : 'muted'}
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          <Button asChild size="sm">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.featured
  );

  return (
    <section id="projects" className="py-20 relative">
      {/* Background elements */}
      <div className="floating-orb w-48 h-48 bg-green-200 dark:bg-green-900 top-20 right-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-40 h-40 bg-yellow-200 dark:bg-yellow-900 bottom-40 left-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            <Zap className="inline-block w-6 h-6 mr-2 text-primary" />
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            A collection of my recent projects showcasing web development and innovative solutions.
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12">
          <Button
            onClick={() => setActiveFilter('all')}
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            size="sm"
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter('featured')}
            variant={activeFilter === 'featured' ? 'default' : 'outline'}
            size="sm"
          >
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      {project.featured && (
                        <Badge variant="soft">
                          <Star className="w-3 h-3" />
                        </Badge>
                      )}
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-muted-foreground group-hover:text-primary" />
                    </div>
                  </div>
                  
                  <CardDescription className="text-muted-foreground text-xs leading-relaxed">
                    {project.description.length > 100 
                      ? `${project.description.substring(0, 100)}...` 
                      : project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant={tagIndex % 2 === 0 ? 'soft' : 'muted'}
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    
                    <Button
                      onClick={() => setSelectedProject(project)}
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      Details
                      <ChevronRight className="w-3 h-3" />
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