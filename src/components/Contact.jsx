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
    <section id="contact" className="py-20 relative">
      {/* Background elements */}
      <div className="floating-orb w-56 h-56 bg-rose-200 dark:bg-rose-900 top-20 left-20" style={{ animationDelay: '1s' }} />
      <div className="floating-orb w-48 h-48 bg-amber-200 dark:bg-amber-900 bottom-20 right-20" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            <MessageCircle className="inline-block w-6 h-6 mr-2 text-primary" />
            Let's Connect
          </h2>
          <Separator className="max-w-24 mx-auto bg-primary h-0.5 rounded-full mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">
                <Sparkles className="inline-block w-5 h-5 mr-2 text-primary" />
                Ready to Collaborate?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Let's work together to create something exceptional. 
                Get in touch to start the conversation and bring your ideas to life.
              </p>

              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/20">
                          <Mail className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-1">Email</div>
                          <a
                            href="mailto:bommisowmya684@gmail.com"
                            className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-2"
                          >
                            bommisowmya684@gmail.com
                            <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  <Card className="border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-primary/20">
                          <MessageCircle className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-muted-foreground mb-1">LinkedIn</div>
                          <a
                            href="https://www.linkedin.com/in/bommisetti-venkata-bala-sai-naga-sowmya-86002a285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium group-hover:text-primary transition-colors flex items-center gap-2"
                          >
                            Connect on LinkedIn
                            <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="mailto:bommisowmya684@gmail.com"
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-background border border-input rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="sm"
                    className="w-full group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
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