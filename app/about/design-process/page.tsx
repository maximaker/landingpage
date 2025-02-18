"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Lightbulb, Code, Rocket } from 'lucide-react'
import Link from 'next/link'

const PROCESS_STEPS = [
  {
    title: "What's the opportunity?",
    phase: "discover",
    subtitle: "Awareness & Analysis",
    description: "We begin by gaining deep insights into your product's performance, user behavior, and market position. Our comprehensive analysis identifies key opportunities and challenges.",
    details: [
      "User behavior analysis",
      "Performance metrics audit",
      "Market positioning review",
      "Stakeholder interviews",
      "Customer journey mapping"
    ],
    icon: <Eye className="w-5 h-5" />
  },
  {
    title: "What should we build?",
    phase: "define",
    subtitle: "Strategy & Planning",
    description: "Based on our analysis, we develop a strategic roadmap that aligns with your business goals and user needs, ensuring every enhancement delivers measurable value.",
    details: [
      "Feature prioritization",
      "Success metrics definition",
      "Technical feasibility assessment",
      "Resource planning",
      "Timeline development"
    ],
    icon: <Lightbulb className="w-5 h-5" />
  },
  {
    title: "How do we build it?",
    phase: "develop",
    subtitle: "Build & Enhance",
    description: "We implement solutions using an iterative approach, continuously testing and refining to ensure optimal performance and user satisfaction.",
    details: [
      "Interface optimization",
      "Feature enhancement",
      "Performance improvements",
      "A/B testing",
      "User feedback integration"
    ],
    icon: <Code className="w-5 h-5" />
  },
  {
    title: "How do we ensure success?",
    phase: "deliver",
    subtitle: "Launch & Optimize",
    description: "We monitor, measure, and optimize post-launch, ensuring sustained improvement in user engagement and business metrics.",
    details: [
      "Performance monitoring",
      "User adoption tracking",
      "Conversion optimization",
      "Ongoing support",
      "Knowledge transfer"
    ],
    icon: <Rocket className="w-5 h-5" />
  }
]

export default function DesignProcessPage() {
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
              Our Design Process
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              From Vision to{' '}
              <span className="text-foreground">Reality</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              A systematic approach to transforming your digital product, typically completed in 8-12 weeks
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[280px] top-0 bottom-0 w-px bg-border" />
            
            <div className="space-y-24">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-[280px_40px_1fr] items-center">
                    {/* Question */}
                    <div className="text-xl font-medium text-foreground">
                      {step.title}
                    </div>

                    {/* Timeline icon */}
                    <div className="relative flex justify-center">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-4 border-background bg-background flex items-center justify-center text-foreground">
                        {step.icon}
                      </div>
                    </div>

                    {/* Subtitle */}
                    <h2 className="text-xl font-medium text-foreground">
                      {step.subtitle}
                    </h2>
                  </div>

                  <div className="mt-8 ml-[320px]">
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.details.map((detail, i) => (
                          <div 
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                            <span className="leading-relaxed">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your product?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how our process can help achieve your goals.
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