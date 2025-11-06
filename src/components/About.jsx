import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Trophy, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const skills = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Frontend Development',
    items: ['HTML', 'React.js', 'Redux', 'Javascript', 'TailwindCSS'],
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Backend & Languages',
    items: ['Node.js', 'Python', 'Java', 'Express', 'REST APIs', 'MongoDB', 'Spring', 'Spring Boot', 'Hibernate', 'Microservices'],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Data & Algorithms',
    items: ['DSA', 'SQL', 'MongoDB'],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Tools & Practices',
    items: ['Git', 'Postman'],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background elements */}
      <div className="floating-orb w-60 h-60 bg-indigo-200 dark:bg-indigo-900 top-40 right-10" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-44 h-44 bg-teal-200 dark:bg-teal-900 bottom-20 left-10" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            <Target className="inline-block w-6 h-6 mr-2 text-primary" />
            About Me
          </h2>
          <div className="bg-card border rounded-lg p-6 mb-6">
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              IT student with a <span className="text-primary font-medium">strong foundation</span> in algorithms, 
              data structures, and web development. Actively looking for opportunities and building 
              <span className="text-primary font-medium"> scalable projects</span>.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="soft" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                550+ LeetCode Problems
              </Badge>
              <Badge variant="soft" className="text-xs">
                <Code2 className="w-3 h-3 mr-1" />
                Full Stack Developer
              </Badge>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-3">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                  </div>
                  <CardTitle className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {skill.items.map((item, itemIndex) => (
                      <Badge
                        key={item}
                        variant={itemIndex % 2 === 0 ? 'soft' : 'muted'}
                        className="text-xs"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-3">
              <Trophy className="inline-block w-5 h-5 mr-2 text-primary" />
              Achievements
            </h3>
            <Separator className="max-w-24 mx-auto bg-primary h-0.5 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border rounded-lg p-6 text-center group cursor-pointer"
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                7+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
              <div className="mt-3 h-1 bg-primary/20 rounded-full">
                <div className="h-full bg-primary rounded-full w-3/4 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-card border rounded-lg p-6 text-center group cursor-pointer"
            >
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                8.80
              </div>
              <div className="text-sm text-muted-foreground">
                GPA in Information Technology
              </div>
              <div className="mt-3 h-1 bg-primary/20 rounded-full">
                <div className="h-full bg-primary rounded-full w-4/5 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
