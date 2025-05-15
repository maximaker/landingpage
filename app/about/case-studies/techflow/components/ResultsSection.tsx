import { Badge } from '@/components/ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import * as Tabs from '@radix-ui/react-tabs'
import { TrendingUp, Users, CheckCircle2 } from 'lucide-react'
import React from 'react'

interface Metric {
  label: string
  value: string
  description: string
  icon: React.ReactNode
}

interface Results {
  metrics: Metric[]
  impact: {
    business: string[]
    users: string[]
  }
  highlights: string[]
}

interface ResultsSectionProps {
  results: Results
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ results }) => (
  <section id="results" className="py-24 relative scroll-mt-20">
    <div className="max-w-5xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <Badge variant="secondary" className="mb-4">Results & Impact</Badge>
        <h2 className="text-3xl font-bold mb-6">Transforming Metrics</h2>
        <p className="text-lg text-muted-foreground">
          Measurable improvements in efficiency, revenue, and user satisfaction.
        </p>
      </div>
      <Tabs.Root defaultValue="metrics" className="w-full">
        <div className="grid grid-cols-[200px_1fr] gap-8">
          <Tabs.List className="flex flex-col space-y-2">
            <Tabs.Trigger
              value="metrics"
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-left transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
            >
              Key Metrics
            </Tabs.Trigger>
            <Tabs.Trigger
              value="impact"
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-left transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
            >
              Business Impact
            </Tabs.Trigger>
            <Tabs.Trigger
              value="highlights"
              className="w-full px-6 py-3 rounded-lg text-sm font-medium text-left transition-all data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm text-muted-foreground hover:text-foreground"
            >
              Key Highlights
            </Tabs.Trigger>
          </Tabs.List>
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {/* Metrics Tab */}
              <Tabs.Content value="metrics" className="outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {results.metrics.map((metric, index) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 relative">
                          <div className="text-primary/60 group-hover:text-primary transition-colors mb-6 text-3xl">
                            {metric.icon}
                          </div>
                          <motion.div 
                            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-3"
                            initial={{ scale: 0.5 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                          >
                            {metric.value}
                          </motion.div>
                          <div className="text-base font-medium text-foreground mb-2">
                            {metric.label}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {metric.description}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tabs.Content>
              {/* Impact Tab */}
              <Tabs.Content value="impact" className="outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="max-w-3xl">
                    <Tabs.Root defaultValue="business" className="w-full">
                      <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center rounded-full p-1 bg-muted">
                          <Tabs.List className="flex space-x-1">
                            <Tabs.Trigger
                              value="business"
                              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground"
                            >
                              Business Impact
                            </Tabs.Trigger>
                            <Tabs.Trigger
                              value="user"
                              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm text-muted-foreground"
                            >
                              User Impact
                            </Tabs.Trigger>
                          </Tabs.List>
                        </div>
                      </div>
                      <div className="relative">
                        <Tabs.Content value="business" className="outline-none">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div className="flex items-center gap-3 justify-center mb-8">
                              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <TrendingUp className="w-5 h-5" />
                              </div>
                              <h3 className="text-xl font-semibold">Business Impact</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {results.impact.business.map((item, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="group relative"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  <div className="relative flex items-start gap-3 p-4 rounded-xl bg-card border border-border group-hover:border-primary/20 text-muted-foreground hover:text-foreground transition-all cursor-default">
                                    <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover:text-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </Tabs.Content>
                        <Tabs.Content value="user" className="outline-none">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div className="flex items-center gap-3 justify-center mb-8">
                              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Users className="w-5 h-5" />
                              </div>
                              <h3 className="text-xl font-semibold">User Impact</h3>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {results.impact.users.map((item, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                  className="group relative"
                                >
                                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  <div className="relative flex items-start gap-3 p-4 rounded-xl bg-card border border-border group-hover:border-primary/20 text-muted-foreground hover:text-foreground transition-all cursor-default">
                                    <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover:text-primary shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </Tabs.Content>
                      </div>
                    </Tabs.Root>
                  </div>
                </motion.div>
              </Tabs.Content>
              {/* Highlights Tab */}
              <Tabs.Content value="highlights" className="outline-none">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group cursor-default"
                      >
                        <div className="relative h-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="bg-card rounded-xl p-6 border border-border group-hover:border-primary/20 transition-all duration-300 h-full relative">
                            <div className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                                <CheckCircle2 className="w-4 h-4" />
                              </div>
                              <span>{highlight}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tabs.Content>
            </AnimatePresence>
          </div>
        </div>
      </Tabs.Root>
    </div>
  </section>
)

export default ResultsSection 