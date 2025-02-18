"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Users, FileCheck, Zap, Calendar, Briefcase, LineChart, Settings } from 'lucide-react'
import Link from 'next/link'

const COLLABORATION_STEPS = [
  {
    title: "Initial Consultation",
    description: "We start with a deep dive into your goals, challenges, and vision for your product.",
    activities: [
      "Understanding your business objectives",
      "Identifying key challenges",
      "Discussing timeline and budget",
      "Exploring potential solutions"
    ],
    icon: <MessageSquare className="w-6 h-6" />,
    duration: "1-2 hours"
  },
  {
    title: "Team Alignment",
    description: "We align our team with your needs and establish clear communication channels.",
    activities: [
      "Team introduction and roles",
      "Communication protocol setup",
      "Tool and platform access",
      "Milestone definition"
    ],
    icon: <Users className="w-6 h-6" />,
    duration: "2-3 days"
  },
  {
    title: "Project Planning",
    description: "We create a detailed roadmap and set clear expectations for deliverables.",
    activities: [
      "Scope definition",
      "Timeline creation",
      "Resource allocation",
      "Risk assessment"
    ],
    icon: <FileCheck className="w-6 h-6" />,
    duration: "3-5 days"
  },
  {
    title: "Active Development",
    description: "We execute the plan with regular check-ins and iterative improvements.",
    activities: [
      "Daily progress updates",
      "Weekly review meetings",
      "Continuous feedback loop",
      "Quality assurance"
    ],
    icon: <Zap className="w-6 h-6" />,
    duration: "Ongoing"
  }
]

const ENGAGEMENT_MODELS = [
  {
    title: "Project-Based",
    description: "Perfect for defined projects with clear scope and timeline.",
    features: [
      "Fixed scope and budget",
      "Dedicated project team",
      "Milestone-based delivery",
      "Clear timeline and deliverables"
    ],
    bestFor: [
      "New product launches",
      "Major feature additions",
      "Complete redesigns",
      "Performance optimization"
    ],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Retainer",
    description: "Ideal for ongoing support and continuous improvement.",
    features: [
      "Monthly hour allocation",
      "Flexible task prioritization",
      "Regular maintenance",
      "Priority support"
    ],
    bestFor: [
      "Continuous optimization",
      "Regular updates",
      "Ongoing maintenance",
      "Growth support"
    ],
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Growth Partnership",
    description: "Strategic partnership focused on scaling and optimization.",
    features: [
      "Performance-based model",
      "Strategic planning",
      "Growth optimization",
      "Regular strategy sessions"
    ],
    bestFor: [
      "Scaling operations",
      "Market expansion",
      "Revenue optimization",
      "Long-term growth"
    ],
    icon: <LineChart className="w-6 h-6" />
  }
]

const TOOLS_AND_PROCESSES = [
  {
    category: "Communication",
    tools: ["Slack", "Zoom", "Email"],
    description: "Real-time communication and video conferencing for effective collaboration."
  },
  {
    category: "Project Management",
    tools: ["Jira", "Trello", "Notion"],
    description: "Task tracking and project organization for transparency and efficiency."
  },
  {
    category: "Design",
    tools: ["Figma", "Adobe Creative Suite"],
    description: "Collaborative design tools for seamless feedback and iteration."
  },
  {
    category: "Development",
    tools: ["GitHub", "GitLab", "Bitbucket"],
    description: "Version control and code collaboration platforms."
  },
  {
    category: "Analytics",
    tools: ["Google Analytics", "Mixpanel", "Hotjar"],
    description: "Data tracking and analysis for informed decision-making."
  }
]

export default function HowWeWorkTogetherPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="mb-8 px-4 py-2 text-base bg-muted text-foreground border-border backdrop-blur-sm"
            >
              How We Work Together
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A Partnership Built on{' '}
              <span className="text-primary">Trust</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover our collaborative approach to turning your vision into reality
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Process */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Collaboration Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured yet flexible approach that ensures efficient delivery and clear communication
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-16">
              {COLLABORATION_STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative ${index % 2 === 0 ? 'sm:pr-1/2' : 'sm:pl-1/2 sm:ml-auto'}`}
                >
                  <div className="sm:max-w-lg">
                    {/* Timeline dot */}
                    <div 
                      className={`absolute left-8 sm:left-1/2 top-0 w-4 h-4 rounded-full border-4 border-background bg-primary ${
                        index % 2 === 0 ? 'sm:translate-x-[-50%]' : 'sm:translate-x-[-50%]'
                      }`}
                    />

                    <div className="pl-20 sm:pl-0">
                      <div className="bg-card/50 border border-border hover:border-primary/20 rounded-2xl p-6 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {step.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{step.title}</h3>
                            <p className="text-sm text-primary">{step.duration}</p>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        <ul className="space-y-2">
                          {step.activities.map((activity, i) => (
                            <li 
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-muted/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Engagement Models</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible collaboration options tailored to your needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{model.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  {model.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Features</h4>
                    <ul className="space-y-2">
                      {model.features.map((feature, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-primary mb-3">Best For</h4>
                    <ul className="space-y-2">
                      {model.bestFor.map((item, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Processes */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tools & Processes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-standard tools and efficient processes for seamless collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TOOLS_AND_PROCESSES.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card/50 rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>

                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start our journey together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help bring your vision to life.
          </p>
          <div className="inline-flex flex-col items-center">
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <Link href="/contact">
                Schedule a Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No commitment required. Let's explore the possibilities together.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 