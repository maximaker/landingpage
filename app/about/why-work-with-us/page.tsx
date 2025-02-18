"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Zap, Clock, Target, Users, Sparkles, LineChart } from 'lucide-react'
import Link from 'next/link'

const VALUE_PROPS = [
  {
    title: "Expertise & Experience",
    description: "Deep expertise in digital product development, UX design, and growth optimization.",
    benefits: [
      "10+ years of industry experience",
      "Proven track record of success",
      "Cross-industry knowledge",
      "Continuous learning and innovation"
    ],
    icon: <Star className="w-6 h-6" />
  },
  {
    title: "Trusted Partnership",
    description: "We work as an extension of your team, fully invested in your success.",
    benefits: [
      "Transparent communication",
      "Strategic collaboration",
      "Long-term partnership focus",
      "Shared success metrics"
    ],
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Rapid Results",
    description: "Our efficient processes and proven methodologies deliver value faster.",
    benefits: [
      "Quick implementation",
      "Iterative improvements",
      "Regular progress updates",
      "Measurable outcomes"
    ],
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Flexible Engagement",
    description: "Tailored collaboration models that adapt to your needs and timeline.",
    benefits: [
      "Custom engagement models",
      "Scalable solutions",
      "Flexible scheduling",
      "Resource optimization"
    ],
    icon: <Clock className="w-6 h-6" />
  }
]

const DIFFERENTIATORS = [
  {
    title: "Results-Driven Approach",
    description: "We focus on delivering measurable improvements to your key metrics.",
    stats: [
      { value: "45%", label: "Average Conversion Rate Increase" },
      { value: "60%", label: "User Engagement Improvement" },
      { value: "30%", label: "Development Time Reduction" }
    ],
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "User-Centric Focus",
    description: "Every decision is made with your users' needs and experience in mind.",
    stats: [
      { value: "98%", label: "User Satisfaction Rate" },
      { value: "65%", label: "Feature Adoption Rate" },
      { value: "40%", label: "Support Ticket Reduction" }
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Innovation & Quality",
    description: "We combine innovative solutions with robust, production-ready code.",
    stats: [
      { value: "99.9%", label: "Code Quality Score" },
      { value: "Zero", label: "Critical Security Issues" },
      { value: "100%", label: "Test Coverage" }
    ],
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Growth Partnership",
    description: "We're invested in your long-term success and sustainable growth.",
    stats: [
      { value: "85%", label: "Client Retention Rate" },
      { value: "3.5x", label: "Average ROI" },
      { value: "24/7", label: "Support Availability" }
    ],
    icon: <LineChart className="w-6 h-6" />
  }
]

const PRINCIPLES = [
  {
    title: "Transparency",
    description: "Clear communication and regular updates keep you informed every step of the way.",
    points: [
      "Weekly progress reports",
      "Open access to project tools",
      "Direct communication channels",
      "Regular review meetings"
    ]
  },
  {
    title: "Quality",
    description: "Uncompromising commitment to excellence in every aspect of our work.",
    points: [
      "Rigorous testing protocols",
      "Best practice adherence",
      "Code review standards",
      "Performance optimization"
    ]
  },
  {
    title: "Collaboration",
    description: "Working together as one team to achieve your goals.",
    points: [
      "Regular brainstorming sessions",
      "Shared decision making",
      "Knowledge transfer",
      "Team integration"
    ]
  }
]

export default function WhyWorkWithUsPage() {
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
              Why Work With Us?
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Success Is Our{' '}
              <span className="text-primary">Mission</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Partner with a team that's invested in your growth and committed to delivering exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring together expertise, dedication, and proven methodologies to help you succeed
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VALUE_PROPS.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{prop.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {prop.description}
                </p>

                <ul className="space-y-3">
                  {prop.benefits.map((benefit, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24 bg-muted/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our unique approach and commitment to excellence deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {DIFFERENTIATORS.map((diff, index) => (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {diff.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{diff.title}</h3>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {diff.stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Working Principles</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The foundations that guide our work and ensure your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground mb-6">{principle.description}</p>

                <ul className="space-y-3">
                  {principle.points.map((point, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your transformation?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your goals.
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