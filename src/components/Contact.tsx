import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Mail, MessageCircle, Send, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-32 relative">
      {/* Background elements */}
      <div className="floating-orb w-72 h-72 bg-purple-500 top-20 left-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-64 h-64 bg-cyan-500 bottom-20 right-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-6">
            <MessageCircle className="inline-block w-12 h-12 mr-4 text-cyan-400" />
            Let's Connect
          </h2>
          <Separator className="max-w-xs mx-auto bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glow-card p-8">
              <h3 className="text-3xl font-bold neon-text mb-6">
                <Sparkles className="inline-block w-8 h-8 mr-3 text-yellow-400" />
                Ready to Collaborate?
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Let's work together to create something exceptional. 
                Get in touch to start the conversation and bring your ideas to life.
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">Email</div>
                          <a
                            href="mailto:bommisowmya684@gmail.com"
                            className="text-lg font-medium group-hover:text-purple-400 transition-colors flex items-center gap-2"
                          >
                            bommisowmya684@gmail.com
                            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <Card className="border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground mb-1">LinkedIn</div>
                          <a
                            href="https://www.linkedin.com/in/bommisetti-venkata-bala-sai-naga-sowmya-86002a285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium group-hover:text-cyan-400 transition-colors flex items-center gap-2"
                          >
                            Connect on LinkedIn
                            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold neon-text">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="mailto:bommisowmya684@gmail.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-background/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all backdrop-blur-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-background/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all backdrop-blur-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-background/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;