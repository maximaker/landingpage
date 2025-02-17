"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

// For now, we'll focus on a single transformation
const TRANSFORMATION = {
  problem: {
    title: 'Poor User Engagement',
    manifestation: 'Users struggle to find value in your product, leading to reduced usage and increased abandonment.',
    symptoms: [
      'High bounce rates on key features',
      'Low session duration',
      'Poor feature discovery',
      'Minimal user interactions',
      'Low repeat visit rate'
    ],
    impact: [
      'Increased customer churn',
      'Reduced revenue potential',
      'Poor word-of-mouth',
      'Higher acquisition costs',
      'Decreased market share'
    ]
  },
  solution: {
    title: 'Enhanced User Experience',
    motivation: 'A data-driven approach to user engagement that creates meaningful, intuitive interactions aligned with user needs.',
    vitamins: [
      {
        name: 'Vitamin A',
        subtitle: 'Awareness & Analysis',
        description: "Gain deep insights into your product's performance and user behavior patterns to identify key improvement opportunities.",
        services: [
          'User Behavior Analysis',
          'Engagement Metrics Audit',
          'User Journey Mapping'
        ]
      },
      {
        name: 'Vitamin B',
        subtitle: 'Build & Boost',
        description: "Transform insights into action with targeted improvements to your product's features and performance.",
        services: [
          'Interface Optimization',
          'Feature Enhancement',
          'Performance Improvements'
        ]
      },
      {
        name: 'Vitamin C',
        subtitle: 'Convert & Capitalize',
        description: "Optimize your product's conversion funnel and implement data-driven engagement strategies.",
        services: [
          'A/B Testing Program',
          'Conversion Funnel Optimization',
          'Engagement Triggers Implementation'
        ]
      }
    ],
    benefits: [
      'Increased user satisfaction',
      'Higher retention rates',
      'Improved feature adoption',
      'Better user activation',
      'Stronger user loyalty'
    ]
  }
}

export function ProblemSolutionV2() {
  const [activeTab, setActiveTab] = useState('problem')

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 sm:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-muted text-foreground border-border backdrop-blur-sm"
          >
            Transform Your Digital Product
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            From Challenges to{' '}
            <span className="text-foreground">Proven Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we transform common challenges into opportunities for growth
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Tabs.Root 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="relative bg-card rounded-2xl border border-border/50"
            >
              <Tabs.List className="flex p-1 gap-1 border-b border-border/50">
                <Tabs.Trigger
                  value="problem"
                  className={`flex-1 px-6 py-4 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'problem'
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  PROBLEM
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="solution"
                  className={`flex-1 px-6 py-4 text-sm font-medium rounded-t-lg transition-colors ${
                    activeTab === 'solution'
                      ? 'text-foreground bg-muted'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  SOLUTION
                </Tabs.Trigger>
              </Tabs.List>

              <div className="p-8 sm:p-10">
                <Tabs.Content value="problem" className="outline-none">
                  <div className="max-w-2xl">
                    <h4 className="text-2xl font-semibold mb-2">
                      {TRANSFORMATION.problem.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                      {TRANSFORMATION.problem.manifestation}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h5 className="text-sm font-medium text-foreground tracking-wide">SYMPTOMS</h5>
                      <div className="space-y-4">
                        {TRANSFORMATION.problem.symptoms.map((symptom, i) => (
                          <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                            <span className="leading-relaxed">{symptom}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h5 className="text-sm font-medium text-foreground tracking-wide">IMPACT</h5>
                      <div className="space-y-4">
                        {TRANSFORMATION.problem.impact.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tabs.Content>

                <Tabs.Content value="solution" className="outline-none">
                  <div className="max-w-2xl">
                    <h4 className="text-2xl font-semibold mb-2">
                      {TRANSFORMATION.solution.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                      {TRANSFORMATION.solution.motivation}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <h5 className="text-sm font-medium text-foreground tracking-wide">SERVICES</h5>
                      <Tabs.Root defaultValue="vitamin-a" className="relative">
                        <Tabs.List className="flex gap-2">
                          {TRANSFORMATION.solution.vitamins.map((vitamin, i) => (
                            <Tabs.Trigger
                              key={i}
                              value={`vitamin-${vitamin.name.slice(-1).toLowerCase()}`}
                              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 group hover:bg-muted/50 data-[state=active]:bg-muted data-[state=active]:text-foreground data-[state=active]:shadow-sm`}
                            >
                              {vitamin.name}
                            </Tabs.Trigger>
                          ))}
                        </Tabs.List>

                        <div className="mt-8">
                          {TRANSFORMATION.solution.vitamins.map((vitamin, i) => (
                            <Tabs.Content 
                              key={i}
                              value={`vitamin-${vitamin.name.slice(-1).toLowerCase()}`}
                              className="outline-none"
                            >
                              <div className="mb-6">
                                <div className="text-lg font-medium text-foreground mb-2">
                                  {vitamin.subtitle}
                                </div>
                                <div className="text-sm text-muted-foreground leading-relaxed">
                                  {vitamin.description}
                                </div>
                              </div>
                              
                              <div className="space-y-3 bg-muted/50 rounded-lg p-5 hover:bg-muted transition-colors">
                                {vitamin.services.map((service, j) => (
                                  <div key={j} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                                    <span className="leading-relaxed">{service}</span>
                                  </div>
                                ))}
                              </div>
                            </Tabs.Content>
                          ))}
                        </div>
                      </Tabs.Root>
                    </div>
                    
                    <div className="space-y-8">
                      <h5 className="text-sm font-medium text-foreground tracking-wide">BENEFITS</h5>
                      <div className="space-y-4 bg-muted/50 rounded-lg p-5 hover:bg-muted transition-colors">
                        {TRANSFORMATION.solution.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                            <span className="leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center">
              <Button 
                size="lg" 
                className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <Link href="/contact">
                  Transform Your Product
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                No commitment required. Let's discuss your product's needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 