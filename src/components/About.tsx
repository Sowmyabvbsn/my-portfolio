import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Trophy, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const skills = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'Frontend Development',
    items: ['HTML', 'React.js', 'Redux', 'Javascript', 'TailwindCSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: 'Backend & Languages',
    items: ['Node.js', 'Python', 'Java', 'Express', 'REST APIs', 'MongoDB', 'Spring', 'Spring Boot', 'Hibernate', 'Microservices'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data & Algorithms',
    items: ['DSA', 'SQL', 'MongoDB'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Tools & Practices',
    items: ['Git', 'Postman'],
    color: 'from-orange-500 to-red-500',
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background elements */}
      <div className="floating-orb w-80 h-80 bg-pink-500 top-40 right-10" style={{ animationDelay: '2s' }} />
      <div className="floating-orb w-56 h-56 bg-cyan-500 bottom-20 left-10" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="section-heading mb-8">
            <Target className="inline-block w-12 h-12 mr-4 text-purple-400" />
            About Me
          </h2>
          <div className="glow-card p-8 mb-8">
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              IT student with a <span className="text-cyan-400 font-semibold">strong foundation</span> in algorithms, 
              data structures, and web development. Actively looking for opportunities and building 
              <span className="text-purple-400 font-semibold"> scalable projects</span>.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="neon" className="text-sm px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                400+ LeetCode Problems
              </Badge>
              <Badge variant="purple" className="text-sm px-4 py-2">
                <Code2 className="w-4 h-4 mr-2" />
                Full Stack Developer
              </Badge>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="glow-card h-full transition-all duration-300 hover:scale-105 border-0">
                <CardHeader className="text-center">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${skill.color} mb-4 group-hover:animate-pulse`}>
                    <div className="text-white">
                      {skill.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, itemIndex) => (
                      <Badge
                        key={item}
                        variant={itemIndex % 3 === 0 ? 'neon' : itemIndex % 3 === 1 ? 'purple' : 'green'}
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold neon-text mb-4">
              <Trophy className="inline-block w-8 h-8 mr-3 text-yellow-400" />
              Achievements
            </h3>
            <Separator className="max-w-xs mx-auto bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glow-card p-8 text-center group cursor-pointer"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 group-hover:animate-pulse">
                7+
              </div>
              <div className="text-lg text-muted-foreground">
                Projects Completed
              </div>
              <div className="mt-4 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotateY: -5 }}
              className="glow-card p-8 text-center group cursor-pointer"
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4 group-hover:animate-pulse">
                8.80
              </div>
              <div className="text-lg text-muted-foreground">
                GPA in Information Technology
              </div>
              <div className="mt-4 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}