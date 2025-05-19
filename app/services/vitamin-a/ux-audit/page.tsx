"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Search, FileSearch, ListChecks, BarChart, ChevronRight, Target, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { WhySection } from './sections/WhySection'
import { WhatSection } from './sections/WhatSection'
import { WhenSection } from './sections/WhenSection'
import { HowSection } from './sections/HowSection'
import { DeliverablesSection } from './sections/DeliverablesSection'
import { PricingSection } from './sections/PricingSection'
import { FAQSection } from './sections/FAQSection'

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
        return <WhySection />;
      case 'what':
        return <WhatSection />;
      case 'when':
        return <WhenSection />;
      case 'how':
        return <HowSection />;
      case 'deliverables':
        return <DeliverablesSection />;
      case 'pricing':
        return <PricingSection />;
      case 'faq':
        return <FAQSection />;
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