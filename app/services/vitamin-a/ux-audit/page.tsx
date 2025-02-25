"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Search, FileSearch, ListChecks, BarChart, ChevronRight, CheckCircle2, Target, Lightbulb, Clock } from 'lucide-react'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import { useState, useEffect } from 'react'

const AUDIT_SECTIONS = [
  {
    title: "Understand",
    description: "Understand the functional and emotional issues customers face.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Benchmark",
    description: "Benchmark performance against best practice and competitors.",
    icon: <BarChart className="w-6 h-6" />
  },
  {
    title: "Prioritise",
    description: "Prioritise action points based on impact, effort and ROI.",
    icon: <ListChecks className="w-6 h-6" />
  }
]

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Understand the ecosystem",
    description: "Deep dive into your product, business goals, and user needs",
    items: [
      "Stakeholder interviews",
      "Business goals analysis",
      "User research review",
      "Analytics data analysis",
      "Competitive analysis"
    ]
  },
  {
    number: "2",
    title: "Developing findings into theories",
    description: "Analyze patterns and identify opportunities for improvement",
    items: [
      "Usability evaluation",
      "Information architecture review",
      "User flow analysis",
      "Content assessment",
      "Technical limitations review"
    ]
  },
  {
    number: "3",
    title: "Creating a design roadmap",
    description: "Prioritized recommendations and actionable next steps",
    items: [
      "Prioritized recommendations",
      "Quick wins identification",
      "Long-term improvements",
      "Implementation roadmap",
      "Resource requirements"
    ]
  }
]

const DELIVERABLES = [
  {
    title: "Screen by screen analysis",
    description: "Detailed review of every key screen and user flow in your product",
    icon: <FileSearch className="w-6 h-6" />
  },
  {
    title: "Identify crucial UX flaws",
    description: "Comprehensive list of usability issues and their impact on users",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Quick win UX changes",
    description: "Immediate improvements that can be implemented quickly",
    icon: <Lightbulb className="w-6 h-6" />
  }
]

const FAQ_ITEMS = [
  {
    question: "How long does a UX audit take?",
    answer: "A typical UX audit takes 2-3 weeks, depending on the complexity of your product. This includes research, analysis, and preparation of deliverables."
  },
  {
    question: "What do I need to provide?",
    answer: "Access to your product, analytics data if available, and any existing user research. We'll also need brief sessions with key stakeholders."
  },
  {
    question: "Is this different from user testing?",
    answer: "Yes. While user testing observes actual users, a UX audit is an expert evaluation based on established principles and best practices. Both are valuable and complementary."
  },
  {
    question: "What happens after the audit?",
    answer: "You'll receive a detailed report with actionable recommendations. We can then discuss implementation support or hand over to your team."
  }
]

const WHEN_QUESTIONS = [
  "Why aren't people signing up for our product?",
  "What's stopping free accounts from converting to paid customers?",
  "Why aren't they completing key user-flows?"
]

const PRICING_OPTIONS = [
  {
    title: "Just",
    price: "$2,499",
    description: "Perfect for startups and small businesses",
    timeline: "2 weeks",
    timelineWeeks: 2,
    features: [
      "Core user flows analysis",
      "Basic usability review",
      "Key recommendations",
      "Executive summary",
      "Implementation roadmap",
      "1 stakeholder interview",
      "Basic analytics review"
    ]
  },
  {
    title: "Enjoy",
    price: "$4,999",
    description: "Ideal for growing companies",
    timeline: "3 weeks",
    timelineWeeks: 3,
    features: [
      "Comprehensive UX analysis",
      "Detailed recommendations",
      "Implementation roadmap",
      "Executive summary",
      "Competitive analysis",
      "3 stakeholder interviews",
      "Full analytics deep-dive",
      "User flow optimization",
      "Content strategy review"
    ],
    isPopular: true
  },
  {
    title: "The Ride",
    price: "Custom",
    description: "For enterprise and complex products",
    timeline: "4+ weeks",
    timelineWeeks: 4,
    features: [
      "Full product ecosystem analysis",
      "Competitive benchmarking",
      "Detailed action plan",
      "Executive summary",
      "Unlimited stakeholder interviews",
      "Advanced analytics review",
      "User research synthesis",
      "Conversion optimization",
      "Content & IA deep-dive",
      "Custom requirements"
    ]
  }
]

// Update the tab order to follow a more logical flow
const TAB_ORDER = ['what', 'why', 'when', 'how', 'deliverables', 'pricing', 'faq'] as const

// Add section headers for better content organization
const SECTION_HEADERS = {
  what: {
    title: "Understanding UX Audits",
    subtitle: "A strategic evaluation of your digital product's user experience"
  },
  why: {
    title: "Why You Need a UX Audit",
    subtitle: "Transform user frustration into business growth"
  },
  when: {
    title: "Perfect Timing for an Audit",
    subtitle: "Recognize the signs that your product needs expert evaluation"
  },
  how: {
    title: "Our Proven Process",
    subtitle: "A systematic approach to uncovering and solving UX challenges"
  },
  deliverables: {
    title: "What You'll Receive",
    subtitle: "Comprehensive deliverables that drive real results"
  },
  pricing: {
    title: "Investment & Timeline",
    subtitle: "Flexible options tailored to your needs"
  },
  faq: {
    title: "Common Questions",
    subtitle: "Everything you need to know about our UX audit service"
  }
}

export default function UXAuditPage() {
  const [activeSection, setActiveSection] = useState<typeof TAB_ORDER[number]>('what')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as typeof TAB_ORDER[number])
        }
      })
    }, {
      rootMargin: '-50% 0px -50% 0px'
    })

    TAB_ORDER.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (section: typeof TAB_ORDER[number]) => {
    const element = document.getElementById(section)
    if (element) {
      const navHeight = 56 // Height of the sticky nav
      const top = element.offsetTop - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const renderTabContent = (tab: typeof TAB_ORDER[number]) => {
    switch (tab) {
      case 'why':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Delightful user experiences create valuable brands
              </h2>
              <p className="text-lg text-muted-foreground">
                But how do you provide these experiences for all of the users you serve? By designing just for them.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You're too close to the product to spot the issues. You keep guessing what's wrong, but can't pinpoint the exact problems.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  The Solution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A fresh set of eyes to surface UX flaws with your usability, information architecture, visual design, messaging and content.
                </p>
              </div>
            </div>
          </div>
        )
      case 'what':
        return (
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileSearch className="w-5 h-5 text-primary" />
                  </div>
                  Expert Evaluation
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A user experience audit is an expert evaluation of how your potential clients interact with your website or application.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ListChecks className="w-5 h-5 text-primary" />
                  </div>
                  Actionable Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We identify interface flaws and UX logic issues, then develop a plan with clear recommendations on how to solve them.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold mb-6">What makes our audit different?</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Data-Driven Insights</h4>
                    <p className="text-sm text-muted-foreground">Backed by analytics and user behavior patterns</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Expert Analysis</h4>
                    <p className="text-sm text-muted-foreground">Years of UX expertise across industries</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Actionable Steps</h4>
                    <p className="text-sm text-muted-foreground">Clear, prioritized recommendations</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Quick Implementation</h4>
                    <p className="text-sm text-muted-foreground">Focus on high-impact, achievable changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'when':
        return (
          <div className="space-y-12">
            <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
              <h3 className="text-xl font-semibold">Common Signs You Need a UX Audit</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {WHEN_QUESTIONS.map((question, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 group hover:bg-muted transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-muted-foreground leading-relaxed">
                  These are symptoms of larger issues. It's actually good that they got on your radar. 
                  It means you are aware that there's a problem that needs your attention. Before it becomes a business risk.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Should you handle the audit internally?</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    It would definitely be cheaper, if you already have an expert or a dedicated design team. 
                    They are already familiar with your product and the role it plays in your business. 
                    They know who to ask for details if necessary, the tasks would be piped right into Jira.
                  </p>
                  <p className="text-lg text-primary font-medium">But is that enough?</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'how':
        return (
          <div className="space-y-12">            
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all"
                >
                  <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
                    <div className="text-center md:text-left">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto md:mx-0">
                        <span className="text-3xl font-bold">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="grid gap-4">
                      {step.items.map((item, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
      case 'deliverables':
        return (
          <div className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              {DELIVERABLES.map((deliverable, index) => (
                <motion.div
                  key={deliverable.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                      {deliverable.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {deliverable.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {deliverable.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">What's included in the report?</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Executive Summary</h4>
                      <p className="text-sm text-muted-foreground">Key findings and recommendations at a glance</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Detailed Analysis</h4>
                      <p className="text-sm text-muted-foreground">In-depth review of each issue found</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Visual Examples</h4>
                      <p className="text-sm text-muted-foreground">Screenshots and annotations of issues</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">Action Plan</h4>
                      <p className="text-sm text-muted-foreground">Prioritized list of improvements</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-6">Download a sample report</h3>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
                    />
                  </div>
                  <Button className="w-full">Download Sample</Button>
                </form>
              </div>
            </div>
          </div>
        )
      case 'pricing':
        return (
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <p className="text-lg text-muted-foreground">
                Flexible engagement options to match your product's needs and timeline.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Just",
                  price: "$2,499",
                  description: "Perfect for startups and small businesses",
                  timeline: "2 weeks",
                  timelineWeeks: 2,
                  features: [
                    "Core user flows analysis",
                    "Basic usability review",
                    "Key recommendations",
                    "Executive summary",
                    "Implementation roadmap",
                    "1 stakeholder interview",
                    "Basic analytics review"
                  ]
                },
                {
                  title: "Enjoy",
                  price: "$4,999",
                  description: "Ideal for growing companies",
                  timeline: "3 weeks",
                  timelineWeeks: 3,
                  features: [
                    "Comprehensive UX analysis",
                    "Detailed recommendations",
                    "Implementation roadmap",
                    "Executive summary",
                    "Competitive analysis",
                    "3 stakeholder interviews",
                    "Full analytics deep-dive",
                    "User flow optimization",
                    "Content strategy review"
                  ],
                  isPopular: true
                },
                {
                  title: "The Ride",
                  price: "Custom",
                  description: "For enterprise and complex products",
                  timeline: "4+ weeks",
                  timelineWeeks: 4,
                  features: [
                    "Full product ecosystem analysis",
                    "Competitive benchmarking",
                    "Detailed action plan",
                    "Executive summary",
                    "Unlimited stakeholder interviews",
                    "Advanced analytics review",
                    "User research synthesis",
                    "Conversion optimization",
                    "Content & IA deep-dive",
                    "Custom requirements"
                  ]
                }
              ].map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
                    option.isPopular 
                      ? 'border-primary shadow-lg scale-[1.02]' 
                      : 'border-border hover:border-primary/20'
                  }`}
                >
                  {option.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-bold">{option.price}</span>
                      {option.price !== "Custom" && <span className="text-muted-foreground">/audit</span>}
                    </div>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Timeline: {option.timeline}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1">
                        {Array.from({ length: option.timelineWeeks }).map((_, i) => (
                          <div 
                            key={i}
                            className="h-1 rounded-full bg-primary/20"
                          />
                        ))}
                        {option.timeline.includes('+') && (
                          <div className="h-1 rounded-full bg-primary/20 animate-pulse" />
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {option.features.map((feature, i) => (
                        <div 
                          key={i}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full rounded-full ${option.isPopular ? '' : 'variant-outline'}`}
                      asChild
                    >
                      <Link href="/contact">
                        Get started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
                  <p className="text-muted-foreground mb-6">
                    Have specific requirements or a larger project? Let's create a tailored plan that perfectly fits your needs.
                  </p>
                  <Button 
                    variant="outline"
                    className="rounded-full"
                    asChild
                  >
                    <Link href="/contact">
                      Contact us for custom pricing
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Money back guarantee</h3>
                  <p className="text-muted-foreground">
                    Not satisfied with our audit? Get a full refund within 30 days if you're not completely happy with our recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'faq':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">Have more questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Feel free to reach out to us directly.
                </p>
                <Button 
                  variant="outline"
                  className="rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Contact us
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="bg-muted/50 rounded-2xl p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation to discuss your product's needs.
                </p>
                <Button 
                  className="rounded-full"
                  asChild
                >
                  <Link href="/contact">
                    Schedule consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <Accordion.Root type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-lg border border-border overflow-hidden group"
                >
                  <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none">
                    <span className="font-medium group-hover:text-primary transition-colors">{item.question}</span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90" />
                  </Accordion.Trigger>
                  <Accordion.Content className="px-6 pb-4">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        )
      default:
        return null
    }
  }

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
              Expert UX Evaluation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transform Your Product with a{' '}
              <span className="text-primary">UX Audit</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Uncover usability issues, improve conversion rates, and deliver exceptional value to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button 
                size="lg" 
                className="rounded-full px-8"
                asChild
              >
                <Link href="/contact">
                  Schedule Your Audit
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full px-8"
                asChild
              >
                <Link href="#process">
                  Learn Our Process
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[100px] z-50 bg-muted/40 backdrop-blur-sm border-b border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center h-[26px] gap-4">
            {TAB_ORDER.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors
                  ${activeSection === section 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Grid */}
      <section className="py-24 relative bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">The UX Audit Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach ensures no stone is left unturned in improving your product's user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AUDIT_SECTIONS.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {section.title}
                </h3>
                <p className="text-muted-foreground">
                  {section.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {TAB_ORDER.map((section) => (
          <section
            key={section}
            id={section}
            className="py-24 scroll-mt-32"
          >
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">
                  {SECTION_HEADERS[section].title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {SECTION_HEADERS[section].subtitle}
                </p>
              </div>
              {renderTabContent(section)}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Badge 
            variant="secondary" 
            className="mb-8 inline-block px-4 py-2 text-base bg-muted text-foreground border-border"
          >
            Get Started Today
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Ready to transform your user experience?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your product's needs and discover how our UX audit can drive meaningful improvements.
          </p>
          <div className="inline-flex flex-col items-center">
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
              asChild
            >
              <Link href="/contact">
                Schedule Your Free Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No commitment required. Let's explore how we can help your product succeed.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
} 