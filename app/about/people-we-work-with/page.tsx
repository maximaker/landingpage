"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Target, Users, Briefcase, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const PERSONAS = [
  {
    id: "solopreneur",
    title: "Solopreneur",
    subtitle: "With a bold mission",
    description: "Aiming for brand clarity and likeminded clients",
    context: "The road seems shaky at first. Even if you have plenty of professional expertise, developing a business on your own may prove to be your biggest challenge yet.",
    valueProposition: "Let's get the basics right: you have something valuable to offer, and they need to know about it.",
    challenge: "But why would they choose you?",
    journeyPoints: [
      {
        title: "Identity & Communication",
        points: [
          "Define my professional identity",
          "Communicate my offer",
          "Generate enough leads",
          "Work with the right clients"
        ]
      },
      {
        title: "Process & Delivery",
        points: [
          "Successfully onboard new clients",
          "Structure my process",
          "Deliver, on time and on budget",
          "Create a decent experience for them"
        ]
      }
    ],
    icon: <Target className="w-6 h-6" />
  },
  {
    id: "founder",
    title: "Founder",
    subtitle: "Looking for end-to-end design",
    description: "For a validated business idea",
    context: "Bringing a product to life requires attention, patience and care.",
    valueProposition: "Most decisions run through you. You know a good leader empowers people and delegates. This way you can focus on the bigger picture.",
    challenge: "You realize you need help and you should offload a part of your plans, concerns, and vision to a passionate professional.",
    questions: [
      "Why are visitors dropping off?",
      "How do I stack up against my competition?",
      "How usable is the site or mobile app?",
      "Is my product ready to go to market?",
      "Should I invest more in SEO or advertising?"
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "product-owner",
    title: "Product Owner",
    subtitle: "Who wants to increase",
    description: "User engagement and satisfaction",
    context: "You invested time, energy, and a bit of your soul to make sure it grows healthy and strong.",
    valueProposition: "You need somebody that can appreciate and expand on stakeholders' ideas while having the talent and confidence to present and support with arguments relevant concepts and approaches.",
    benefits: [
      {
        title: "Time & Cost",
        points: [
          "saving time for your dev team",
          "cutting costs to repair user flows",
          "reducing the amount of support tickets",
          "increasing conversion rate of your shop"
        ]
      },
      {
        title: "Experience & Growth",
        points: [
          "decreasing the training requirements",
          "speeding users' workflow",
          "reducing errors and frustration in use",
          "growing loyalty of customers"
        ]
      }
    ],
    icon: <Briefcase className="w-6 h-6" />
  }
]

export default function PeopleWeWorkWithPage() {
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
              People We Work With
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hello, you must be...
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              We partner with ambitious individuals and teams who are ready to transform their digital presence
            </p>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid gap-12 md:gap-16">
            {PERSONAS.map((persona, index) => (
              <motion.div
                key={persona.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 items-start"
              >
                {/* Left Column - Intro */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 text-primary">
                    {persona.icon}
                    <span className="text-sm font-medium uppercase tracking-wider">A {persona.subtitle.split(" ")[0]}</span>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold mb-3">{persona.title}</h2>
                    <p className="text-xl text-muted-foreground">{persona.description}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{persona.context}</p>
                    <p className="text-foreground leading-relaxed">{persona.valueProposition}</p>
                    <p className="text-primary font-medium">{persona.challenge}</p>
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="bg-muted/50 rounded-2xl p-8 space-y-8">
                  {persona.journeyPoints ? (
                    // For Solopreneur
                    <div className="space-y-8">
                      <h3 className="text-lg font-medium">I've been through the journey myself:</h3>
                      {persona.journeyPoints.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-sm font-medium text-primary">{section.title}</h4>
                          <ul className="space-y-3">
                            {section.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                                <ChevronRight className="w-4 h-4 mt-1 text-primary/40 group-hover:text-primary transition-colors" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : persona.questions ? (
                    // For Founder
                    <div className="space-y-6">
                      <h3 className="text-lg font-medium">I can help you answer:</h3>
                      <ul className="space-y-3">
                        {persona.questions.map((question, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                            <ChevronRight className="w-4 h-4 mt-1 text-primary/40 group-hover:text-primary transition-colors" />
                            <span>{question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    // For Product Owner
                    <div className="space-y-8">
                      <h3 className="text-lg font-medium">I help you by:</h3>
                      {persona.benefits?.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-sm font-medium text-primary">{section.title}</h4>
                          <ul className="space-y-3">
                            {section.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                                <ChevronRight className="w-4 h-4 mt-1 text-primary/40 group-hover:text-primary transition-colors" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    size="lg" 
                    className="w-full rounded-full"
                    asChild
                  >
                    <Link href="/contact">
                      Let's connect
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your digital presence?</h2>
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