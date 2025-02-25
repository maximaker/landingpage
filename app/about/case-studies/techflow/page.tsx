"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Users, TrendingUp, Sparkles, ChevronRight, ChevronLeft, Clock, Target, Zap, Shield, CheckCircle2, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'
import { useState, useEffect, useRef } from 'react'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import * as Accordion from '@radix-ui/react-accordion'

type ProcessPhase = {
  title: string
  duration: string
  activities: string[]
  deliverables: string[]
  phase: 'discovery' | 'planning' | 'design' | 'development'
} & (
  | { phase: 'discovery'; findings: string[] }
  | { phase: 'planning'; improvements: string[] }
  | { phase: 'design'; improvements: string[] }
  | { phase: 'development'; technical: string[] }
)

function getPhaseItems(phase: ProcessPhase): string[] {
  switch (phase.phase) {
    case 'discovery':
      return phase.findings
    case 'planning':
      return phase.improvements
    case 'design':
      return phase.improvements
    case 'development':
      return phase.technical
  }
}

// Add new type for progress tracking
type ProgressSection = {
  id: string
  label: string
}

const PROGRESS_SECTIONS: ProgressSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'approach', label: 'Approach' },
  { id: 'process', label: 'Process' },
  { id: 'transformation', label: 'Transformation' },
  { id: 'results', label: 'Results' },
  { id: 'learnings', label: 'Learnings' }
]

const CASE_STUDY = {
  client: "TechFlow",
  industry: "SaaS",
  duration: "9 weeks",
  services: ["UX Research", "UI Design", "Development", "Analytics"],
  overview: {
    solution: "Revolutionizing time-based billing for professional calls. TechFlow empowers experts to monetize their expertise through seamless phone consultations, building on their success with Skype, WhatsApp, and Telegram integrations.",
    established: "2013",
    sector: "FinTech / Professional Services",
    role: "Lead Product Designer",
    team: ["Product Owner", "UX Designer", "Frontend Dev", "Backend Dev"],
    timeline: "Q2 2023",
    impact_preview: {
      metric1: { value: "1000+", label: "Active Users" },
      metric2: { value: "95%", label: "User Satisfaction" },
      metric3: { value: "35%", label: "Revenue Growth" }
    }
  },
  context: {
    background: "In an increasingly digital world, professionals struggle to efficiently monetize phone consultations. TechFlow identified this gap and sought to extend their successful digital payment platform to serve this untapped market.",
    problem: "Expert consultants and professionals lacked a streamlined way to bill for phone consultations, leading to lost revenue opportunities and administrative overhead. Existing solutions were either too complex or didn't integrate well with their workflow.",
    goal: "Create an intuitive mobile-first solution that seamlessly integrates call tracking with automated billing, enabling professionals to focus on delivering value rather than managing payments.",
    target_audience: [
      {
        type: "Independent consultants",
        persona: {
          name: "Dr. Sarah Mitchell",
          role: "Business Strategy Consultant",
          age: "42",
          experience: "15+ years",
          pain_points: [
            "Spending 8+ hours weekly on manual billing tasks",
            "Losing 20% of billable time to administrative work",
            "Difficulty tracking multiple concurrent projects",
            "Inconsistent payment collection affecting cash flow"
          ],
          goals: [
            "Reduce administrative overhead by 75%",
            "Increase monthly billable hours by 30%",
            "Implement automated payment collection",
            "Scale consulting practice sustainably"
          ],
          quote: "I need a solution that lets me focus on advising clients, not chasing payments."
        }
      },
      {
        type: "Legal professionals",
        persona: {
          name: "James Rodriguez",
          role: "Corporate Lawyer",
          age: "38",
          experience: "10+ years",
          pain_points: [
            "Inefficient time logging",
            "Complex client billing",
            "Compliance concerns",
            "Integration with existing systems"
          ],
          goals: [
            "Accurate time tracking",
            "Automated billing",
            "Regulatory compliance",
            "Professional image"
          ],
          quote: "Security and compliance are non-negotiable in my practice."
        }
      },
      {
        type: "Financial advisors",
        persona: {
          name: "Linda Chen",
          role: "Wealth Management Advisor",
          age: "45",
          experience: "18+ years",
          pain_points: [
            "Time-consuming admin work",
            "Inconsistent billing",
            "Client scheduling conflicts",
            "Revenue leakage"
          ],
          goals: [
            "Maximize billable time",
            "Enhance client experience",
            "Secure communications",
            "Grow client base"
          ],
          quote: "My clients expect a premium experience from first contact to final billing."
        }
      },
      {
        type: "Healthcare providers",
        persona: {
          name: "Dr. Michael Foster",
          role: "Telemedicine Specialist",
          age: "36",
          experience: "8+ years",
          pain_points: [
            "Complex scheduling",
            "Payment processing delays",
            "HIPAA compliance",
            "Patient communication"
          ],
          goals: [
            "Simplified billing",
            "Secure consultations",
            "Patient satisfaction",
            "Practice growth"
          ],
          quote: "I need a HIPAA-compliant solution that makes billing as seamless as the consultation."
        }
      },
      {
        type: "Creative professionals",
        persona: {
          name: "Emma Thompson",
          role: "UX Design Consultant",
          age: "31",
          experience: "6+ years",
          pain_points: [
            "Project scope creep",
            "Irregular payments",
            "Time tracking accuracy",
            "Client expectations"
          ],
          goals: [
            "Clear value communication",
            "Automated invoicing",
            "Professional image",
            "Portfolio growth"
          ],
          quote: "I want to spend more time designing and less time on payment admin."
        }
      }
    ]
  },
  approach: {
    methodology: "We adopted a user-centric, iterative approach focused on rapid validation and continuous feedback. Working closely with the TechFlow team and development partners, we prioritized creating an intuitive mobile experience that would seamlessly integrate with users' existing workflows.",
    principles: [
      "Mobile-first design for busy professionals",
      "Seamless integration with existing tools",
      "Real-time tracking and transparency",
      "Enterprise-grade security and compliance"
    ],
    constraints: [
      "Strict regulatory compliance requirements",
      "Complex integration with telecom systems",
      "Need for real-time payment processing",
      "Cross-platform compatibility needs"
    ]
  },
  process: {
    phases: [
      {
        phase: 'discovery' as const,
        title: "1. Research & Discovery",
        duration: "2 weeks",
        activities: [
          "Conducted 25+ user interviews across target segments",
          "Analyzed competitor solutions and market gaps",
          "Mapped existing user journeys and pain points",
          "Validated initial hypotheses with stakeholders"
        ],
        deliverables: [
          "Comprehensive user research report",
          "Competitive analysis matrix",
          "User journey maps",
          "Initial product requirements"
        ],
        findings: [
          "92% of professionals struggle with payment collection",
          "Average 5-8 hours weekly spent on billing admin",
          "Strong demand for automated payment solutions",
          "Security and compliance are top priorities"
        ]
      },
      {
        phase: 'planning' as const,
        title: "2. Strategy & Planning",
        duration: "2 weeks",
        activities: [
          "Defined core feature set and MVP scope",
          "Created technical architecture blueprint",
          "Established security and compliance framework",
          "Developed project timeline and milestones"
        ],
        deliverables: [
          "Product roadmap",
          "Technical specifications",
          "Security compliance plan",
          "Project timeline"
        ],
        improvements: [
          "Streamlined feature prioritization",
          "Enhanced security measures",
          "Optimized development timeline",
          "Clear success metrics"
        ]
      },
      {
        phase: 'design' as const,
        title: "3. Design & Prototyping",
        duration: "3 weeks",
        activities: [
          "Created low and high-fidelity wireframes",
          "Developed interactive prototypes",
          "Conducted usability testing sessions",
          "Refined UI based on user feedback"
        ],
        deliverables: [
          "UI component library",
          "Interactive prototypes",
          "Usability test results",
          "Design documentation"
        ],
        improvements: [
          "Simplified call initiation flow reduced steps by 60%",
          "Intuitive time tracking increased accuracy by 85%",
          "Streamlined payment process improved conversion by 45%",
          "Enhanced dashboard reduced cognitive load by 40%"
        ]
      },
      {
        phase: 'development' as const,
        title: "4. Development & Launch",
        duration: "2 weeks",
        activities: [
          "Implemented frontend components",
          "Integrated backend services",
          "Conducted performance testing",
          "Deployed to production"
        ],
        deliverables: [
          "Production-ready application",
          "Technical documentation",
          "Performance metrics",
          "Launch strategy"
        ],
        technical: [
          "Achieved 99.9% uptime with distributed architecture",
          "Reduced API response time by 65%",
          "Implemented real-time payment processing",
          "Enhanced security with end-to-end encryption"
        ]
      }
    ] as ProcessPhase[]
  },
  results: {
    metrics: [
      {
        label: "Active Users",
        value: "1000+",
        description: "Achieved in first 3 months",
        icon: <Users className="w-5 h-5" />
      },
      {
        label: "User Satisfaction",
        value: "95%",
        description: "Based on NPS surveys",
        icon: <Sparkles className="w-5 h-5" />
      },
      {
        label: "Revenue Growth",
        value: "+35%",
        description: "Average user revenue increase",
        icon: <TrendingUp className="w-5 h-5" />
      }
    ],
    impact: {
      business: [
        "Successfully entered professional services market",
        "Established new recurring revenue stream",
        "Achieved product-market fit validation",
        "Built foundation for enterprise expansion"
      ],
      users: [
        "Reduced billing administration by 75%",
        "Increased billable time capture by 35%",
        "Improved client payment experience",
        "Enhanced professional credibility"
      ]
    },
    highlights: [
      "Successful market validation with 1000+ active users",
      "95% user satisfaction rate within 3 months",
      "35% average increase in captured revenue",
      "Zero security incidents during launch"
    ]
  },
  learnings: {
    successes: [
      "Rapid MVP validation through user-centric design",
      "Successful integration with existing workflows",
      "Strong security and compliance foundation",
      "Effective cross-functional team collaboration"
    ],
    challenges: [
      "Complex regulatory requirements navigation",
      "Real-time payment processing optimization",
      "Cross-platform compatibility maintenance",
      "User behavior variation management"
    ],
    insights: [
      "Early user involvement crucial for adoption",
      "Security features drive user trust",
      "Automated workflows increase engagement",
      "Mobile-first approach validates market need"
    ]
  },
  testimonials: [
    {
      quote: "TechFlow's solution transformed how I handle client consultations. The automated billing and professional interface have helped me focus on what matters - delivering value to my clients.",
      author: "Sarah Chen",
      role: "Financial Advisor",
      company: "Independent Professional",
      image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=0D8ABC&color=fff"
    },
    {
      quote: "The implementation exceeded our expectations. The team's attention to detail and focus on user experience has resulted in a product that our users genuinely love using.",
      author: "Alex Negru",
      role: "CEO",
      company: "TechFlow",
      image: "https://ui-avatars.com/api/?name=Alex+Negru&background=0D8ABC&color=fff"
    }
  ],
  visualTransformations: [
    {
      title: "Call Management Dashboard",
      description: "Redesigned the call tracking interface to provide clear visibility and control over consultations",
      before: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Original+Dashboard",
        caption: "Original interface with complex navigation and limited insights"
      },
      after: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Improved+Dashboard",
        caption: "Streamlined interface with clear metrics and actions"
      },
      improvements: [
        "Simplified navigation reduced clicks by 40%",
        "Real-time earnings tracker improved visibility",
        "Smart notification system for payment status",
        "Integrated calendar for better scheduling",
        "One-click call initiation and billing",
        "Automated receipt generation and delivery"
      ]
    },
    {
      title: "Client Experience",
      description: "Enhanced the client-facing interface to build trust and professionalism",
      before: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Original+Client+Interface",
        caption: "Basic payment form with limited information"
      },
      after: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Improved+Client+Interface",
        caption: "Professional interface with clear service details"
      },
      improvements: [
        "Transparent pricing and duration display",
        "Secure payment gateway integration",
        "Professional service presentation",
        "Clear consultation history and receipts",
        "Easy scheduling and rescheduling",
        "Automated follow-up communication"
      ]
    }
  ]
}

function BeforeAfterSlider({ before, after, caption }: { before: string; after: string; caption: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={before}
            alt="Before"
            fill
            className="object-cover"
          />
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-primary cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 text-white text-sm rounded-md backdrop-blur-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 text-white text-sm rounded-md backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center mt-4">{caption}</p>
    </div>
  )
}

export default function TechFlowCaseStudy() {
  const [activeTab, setActiveTab] = useState('discovery')
  const [currentVisual, setCurrentVisual] = useState(0)
  const [activeSection, setActiveSection] = useState('overview')
  const [activePersona, setActivePersona] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const menuTimeoutRef = useRef<NodeJS.Timeout>()
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  // Add intersection observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    PROGRESS_SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isHovering) {
      setIsMenuOpen(true)
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    } else {
      menuTimeoutRef.current = setTimeout(() => {
        setIsMenuOpen(false)
      }, 3000)
    }

    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [isHovering])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollingDown(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <main className="flex min-h-screen">
        {/* Navigation Menu */}
        <div className={`fixed top-[80px] left-0 right-0 bg-background/40 backdrop-blur-sm border-b border-border/10 z-[99] w-full transform transition-all duration-300 ${isScrollingDown ? 'translate-y-[-100%] opacity-0' : 'translate-y-0 opacity-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center h-[44px] justify-center">
              {PROGRESS_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative px-4 h-full text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pl-4 pr-4">
          {/* Hero Section */}
          <section id="overview" className="pt-8 pb-24 relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
            </div>
            
            <div className="max-w-5xl mx-auto relative">
              <div className="flex flex-col items-center text-center">
                <Badge 
                  variant="secondary" 
                  className="mb-6 px-4 py-1.5 text-sm bg-muted text-foreground border-border"
                >
                  Case Study
                </Badge>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                  Revolutionizing Professional<br />Phone Consultations
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                >
                  How we helped TechFlow create a seamless billing solution for professional phone consultations, resulting in 35% revenue growth for users.
                </motion.p>

                {/* Impact Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                  {Object.entries(CASE_STUDY.overview.impact_preview).map(([key, data], index) => (
                    <motion.div 
                      key={key}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="text-center p-6 rounded-lg bg-card border border-border hover:border-border/80 transition-all"
                    >
                      <div className="text-3xl font-bold mb-2">{data.value}</div>
                      <div className="text-sm text-muted-foreground">{data.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Project Info */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex flex-wrap gap-6 justify-center items-center mb-12"
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{CASE_STUDY.duration}</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">{CASE_STUDY.overview.role}</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex flex-wrap gap-2">
                    {CASE_STUDY.services.map((service) => (
                      <Badge 
                        key={service}
                        variant="outline"
                        className="text-xs bg-background/50"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </motion.div>

                {/* Project Details Grid */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Timeline</div>
                    <div className="text-sm font-medium">{CASE_STUDY.overview.timeline}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Industry</div>
                    <div className="text-sm font-medium">{CASE_STUDY.overview.sector}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Team Size</div>
                    <div className="text-sm font-medium">{CASE_STUDY.overview.team.length} people</div>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border">
                    <div className="text-xs text-muted-foreground mb-1">Established</div>
                    <div className="text-sm font-medium">{CASE_STUDY.overview.established}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Target Audience Section with Tabs */}
          <section className="py-24 bg-muted/50 relative">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
                <p className="text-lg text-muted-foreground">
                  Understanding the diverse needs of our professional users.
                </p>
              </div>

              <div className="mb-12">
                <Tabs.Root value={String(activePersona)} onValueChange={(value) => setActivePersona(Number(value))}>
                  <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
                    {CASE_STUDY.context.target_audience.map((audience, index) => (
                      <Tabs.Trigger
                        key={index}
                        value={String(index)}
                        className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                          activePersona === index
                            ? 'bg-primary text-primary-foreground shadow-lg'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        {audience.type}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>

                  <div className="relative">
                    <AnimatePresence mode="wait">
                      {CASE_STUDY.context.target_audience.map((audience, index) => (
                        activePersona === index && (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-start"
                          >
                            {/* Persona Card */}
                            <div className="bg-card rounded-2xl border border-border p-8">
                              <div className="flex items-center gap-6 mb-8">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                                  <Users className="w-10 h-10 text-primary" />
                                </div>
                                <div>
                                  <h3 className="text-2xl font-semibold mb-2">{audience.persona.name}</h3>
                                  <p className="text-muted-foreground text-lg">{audience.persona.role}</p>
                                </div>
                              </div>

                              <div className="space-y-8">
                                {/* Professional Details */}
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-2">
                                    <div className="text-sm text-muted-foreground">Age</div>
                                    <div className="text-lg font-medium">{audience.persona.age}</div>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="text-sm text-muted-foreground">Experience</div>
                                    <div className="text-lg font-medium">{audience.persona.experience}</div>
                                  </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-border" />

                                {/* Quote Section */}
                                <div className="relative">
                                  <div className="absolute -top-3 -left-1 text-4xl text-primary/20">"</div>
                                  <blockquote className="text-lg italic text-muted-foreground pl-6 relative">
                                    {audience.persona.quote}
                                    <div className="absolute -bottom-3 -right-1 text-4xl text-primary/20">"</div>
                                  </blockquote>
                                </div>

                                {/* User Profile */}
                                <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                                  <h4 className="text-sm font-medium text-primary mb-4">Personality Profile</h4>
                                  
                                  {/* Personality Dimensions */}
                                  <div className="space-y-6">
                                    {audience.type === "Independent consultants" && (
                                      <>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>INTROVERT</span>
                                            <span>EXTROVERT</span>
                                          </div>
                                          <div className="h-[2px] bg-border/50 rounded-full relative">
                                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '65%' }} />
                                          </div>
                                        </div>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>INTUITION</span>
                                            <span>SENSING</span>
                                          </div>
                                          <div className="h-[2px] bg-border/50 rounded-full relative">
                                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '40%' }} />
                                          </div>
                                        </div>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>FEELING</span>
                                            <span>THINKING</span>
                                          </div>
                                          <div className="h-[2px] bg-border/50 rounded-full relative">
                                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '80%' }} />
                                          </div>
                                        </div>
                                        <div className="space-y-1">
                                          <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>PERCEIVING</span>
                                            <span>JUDGING</span>
                                          </div>
                                          <div className="h-[2px] bg-border/50 rounded-full relative">
                                            <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '70%' }} />
                                          </div>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Tabs Section */}
                            <div className="bg-card rounded-2xl border border-border p-8">
                              <Accordion.Root
                                type="single"
                                collapsible
                                className="space-y-4 divide-y divide-border"
                                defaultValue="motivations-goals"
                              >
                                <Accordion.Item value="motivations-goals" className="pt-4">
                                  <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                                    Motivations & Goals
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="pt-4 px-2">
                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <h4 className="font-medium mb-2">Motivations</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Desire to deliver high-quality solutions",
                                            "Need for efficient project management",
                                            "Interest in staying competitive",
                                            "Drive for professional growth",
                                            "Commitment to client satisfaction"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-medium mb-2">Goals</h4>
                                        <div className="space-y-2">
                                          {audience.persona.goals.map((goal, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {goal}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item value="pain-points-frustrations" className="pt-4">
                                  <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                                    Pain Points & Frustrations
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="pt-4 px-2">
                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <h4 className="font-medium mb-2">Key Pain Points</h4>
                                        <div className="space-y-2">
                                          {audience.persona.pain_points.map((point, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {point}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-medium mb-2">Frustrations</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Complex, hard-to-use tools",
                                            "Time wasted on administrative tasks",
                                            "Difficulty tracking project progress",
                                            "Lack of integrated solutions",
                                            "Communication barriers with clients"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item value="behaviors" className="pt-4">
                                  <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                                    Behaviors
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="pt-4 px-2">
                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <h4 className="font-medium mb-2">Daily Behaviors</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Project planning and execution",
                                            "Client communication and reporting",
                                            "Resource allocation and tracking",
                                            "Performance monitoring",
                                            "Documentation and knowledge sharing"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-medium mb-2">Work Habits</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Regular client meetings",
                                            "Time tracking and billing",
                                            "Project status updates",
                                            "Professional development",
                                            "Network building"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item value="scenarios-ideal" className="pt-4">
                                  <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                                    Usage & Ideal Experience
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="pt-4 px-2">
                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <h4 className="font-medium mb-2">Usage Scenarios</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Project planning and execution",
                                            "Client communication and reporting",
                                            "Resource allocation and tracking",
                                            "Performance monitoring",
                                            "Documentation and knowledge sharing"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-medium mb-2">Ideal Experience</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Seamless workflow integration",
                                            "Intuitive user interface",
                                            "Real-time collaboration features",
                                            "Automated routine tasks",
                                            "Comprehensive analytics"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Content>
                                </Accordion.Item>

                                <Accordion.Item value="beliefs-expectations" className="pt-4">
                                  <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                                    Beliefs & Expectations
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="pt-4 px-2">
                                    <div className="grid grid-cols-2 gap-8">
                                      <div>
                                        <h4 className="font-medium mb-2">Beliefs</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Quality work leads to long-term success",
                                            "Continuous learning is essential",
                                            "Client relationships are paramount",
                                            "Technology should enhance, not complicate",
                                            "Efficiency drives profitability"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <h4 className="font-medium mb-2">Expectations</h4>
                                        <div className="space-y-2">
                                          {audience.type === "Independent consultants" && [
                                            "Clear and timely communication",
                                            "Reliable and intuitive tools",
                                            "Visible return on investment",
                                            "Professional growth opportunities",
                                            "Streamlined workflow solutions"
                                          ].map((item, i) => (
                                            <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                              • {item}
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Content>
                                </Accordion.Item>
                              </Accordion.Root>
                            </div>
                          </motion.div>
                        )
                      ))}
                    </AnimatePresence>
                  </div>
                </Tabs.Root>
              </div>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="py-32 bg-muted/50 relative scroll-mt-36">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Project Context</h2>
                <p className="text-lg text-muted-foreground">
                  Understanding the challenges and opportunities in professional phone consultations.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="bg-card/50 rounded-2xl border border-border p-8 backdrop-blur-sm">
                  <div className="text-primary mb-6">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {CASE_STUDY.context.background}
                  </p>
                </div>
                <div className="bg-card/50 rounded-2xl border border-border p-8 backdrop-blur-sm">
                  <div className="text-primary mb-6">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {CASE_STUDY.context.problem}
                  </p>
                </div>
                <div className="bg-card/50 rounded-2xl border border-border p-8 backdrop-blur-sm">
                  <div className="text-primary mb-6">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {CASE_STUDY.context.goal}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="py-24 relative scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <p className="text-lg text-muted-foreground">
                  {CASE_STUDY.approach.methodology}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {/* Principles */}
                <div className="space-y-8">
                  <div className="bg-card/50 rounded-2xl border border-border p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Key Principles
                    </h3>
                    <div className="space-y-4">
                      {CASE_STUDY.approach.principles.map((principle, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0 mt-1 text-primary/40 group-hover:text-primary transition-colors" />
                          <span>{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Constraints & Considerations */}
                <div className="space-y-8">
                  <div className="bg-card/50 rounded-2xl border border-border p-8 backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      Key Considerations
                    </h3>
                    <div className="space-y-4">
                      {CASE_STUDY.approach.constraints.map((constraint, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 group-hover:bg-primary transition-colors" />
                          <span>{constraint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section id="process" className="py-24 bg-muted/50 relative scroll-mt-20">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-2xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Our Process</h2>
                <p className="text-base text-muted-foreground">
                  A systematic approach to transforming professional phone consultations through user-centric design and agile development.
                </p>
              </div>

              <div className="relative">
                {/* Timeline Navigation */}
                <div className="flex flex-col items-center mb-12">
                  {/* Progress Bar */}
                  <div className="w-full max-w-3xl mx-auto relative">
                    {/* Background Track */}
                    <div className="h-1 bg-border/30 rounded-full">
                      {/* Progress Fill */}
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-300"
                        style={{ 
                          width: `${(CASE_STUDY.process.phases.findIndex(p => p.phase === activeTab) / (CASE_STUDY.process.phases.length - 1)) * 100}%` 
                        }}
                      />
                    </div>

                    {/* Phase Markers */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                      {CASE_STUDY.process.phases.map((phase, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTab(phase.phase)}
                          className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                          style={{ left: `${(index / (CASE_STUDY.process.phases.length - 1)) * 100}%` }}
                          aria-label={`View ${phase.title}`}
                          aria-current={activeTab === phase.phase ? 'step' : undefined}
                        >
                          {/* Marker Dot */}
                          <div 
                            className={`
                              w-6 h-6 rounded-full border-4 transition-all duration-300
                              ${activeTab === phase.phase 
                                ? 'bg-primary border-primary scale-100' 
                                : 'bg-background border-border hover:border-primary/50 scale-75 hover:scale-90'
                              }
                            `}
                          />
                          
                          {/* Phase Label */}
                          <div className={`
                            absolute top-8 left-1/2 -translate-x-1/2 w-32
                            text-center transition-all duration-300
                            ${activeTab === phase.phase 
                              ? 'text-primary font-medium translate-y-0 opacity-100' 
                              : 'text-muted-foreground translate-y-1 opacity-70 group-hover:opacity-100'
                            }
                          `}>
                            <div className="text-sm font-medium mb-1 whitespace-nowrap">
                              {phase.title.split('. ')[1]}
                            </div>
                            <div className="text-xs opacity-70">
                              {phase.duration}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center gap-4 mt-20">
                    <button
                      onClick={() => {
                        const currentIndex = CASE_STUDY.process.phases.findIndex(p => p.phase === activeTab)
                        if (currentIndex > 0) {
                          setActiveTab(CASE_STUDY.process.phases[currentIndex - 1].phase)
                        }
                      }}
                      disabled={activeTab === CASE_STUDY.process.phases[0].phase}
                      className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Previous phase"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = CASE_STUDY.process.phases.findIndex(p => p.phase === activeTab)
                        if (currentIndex < CASE_STUDY.process.phases.length - 1) {
                          setActiveTab(CASE_STUDY.process.phases[currentIndex + 1].phase)
                        }
                      }}
                      disabled={activeTab === CASE_STUDY.process.phases[CASE_STUDY.process.phases.length - 1].phase}
                      className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Next phase"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Phase Content */}
                <div className="relative mt-8">
                  <AnimatePresence mode="wait">
                    {CASE_STUDY.process.phases.map((phase) => (
                      activeTab === phase.phase && (
                        <motion.div
                          key={phase.phase}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="bg-card rounded-xl border border-border shadow-lg"
                        >
                          <div className="p-8">
                            <div className="grid lg:grid-cols-2 gap-12">
                              <div className="space-y-8">
                                <div>
                                  <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">Activities</h4>
                                  <div className="space-y-4">
                                    {phase.activities.map((activity, i) => (
                                      <div 
                                        key={i} 
                                        className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                                      >
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary/40 group-hover:text-primary transition-colors" />
                                        <span>{activity}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">Deliverables</h4>
                                  <div className="space-y-4">
                                    {phase.deliverables.map((deliverable, i) => (
                                      <div 
                                        key={i} 
                                        className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                                      >
                                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary/40 group-hover:text-primary transition-colors" />
                                        <span>{deliverable}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">
                                  {phase.phase === 'discovery' ? 'Key Findings' : 
                                   phase.phase === 'planning' ? 'Improvements' :
                                   phase.phase === 'design' ? 'Improvements' : 
                                   'Technical Details'}
                                </h4>
                                <div className="grid gap-4">
                                  {getPhaseItems(phase).map((item, i) => (
                                    <div 
                                      key={i} 
                                      className="p-4 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                                    >
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Transformation Section */}
          <section id="transformation" className="py-32 bg-muted/50 relative scroll-mt-36">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Visual Transformation</h2>
                <p className="text-lg text-muted-foreground">
                  See how we transformed the user experience through thoughtful design and attention to detail.
                </p>
              </div>

              <Tabs.Root value={String(currentVisual)} onValueChange={(value) => setCurrentVisual(Number(value))}>
                <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
                  {CASE_STUDY.visualTransformations.map((transform, index) => (
                    <Tabs.Trigger
                      key={index}
                      value={String(index)}
                      className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                        currentVisual === index
                          ? 'bg-primary text-primary-foreground shadow-lg'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {transform.title}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>

                <div className="relative">
                  <AnimatePresence mode="wait">
                    {CASE_STUDY.visualTransformations.map((transform, index) => (
                      currentVisual === index && (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-16"
                        >
                          <div className="max-w-3xl mx-auto text-center">
                            <h3 className="text-2xl font-semibold mb-4">{transform.title}</h3>
                            <p className="text-muted-foreground">{transform.description}</p>
                          </div>
                          
                          <div className="max-w-5xl mx-auto">
                            <BeforeAfterSlider
                              before={transform.before.image}
                              after={transform.after.image}
                              caption={`${transform.before.caption} → ${transform.after.caption}`}
                            />
                          </div>

                          <div className="max-w-3xl mx-auto">
                            <h4 className="text-sm font-medium text-primary mb-6 text-center">KEY IMPROVEMENTS</h4>
                            <div className="grid sm:grid-cols-2 gap-4">
                              {transform.improvements.map((improvement, i) => (
                                <div 
                                  key={i} 
                                  className="p-4 rounded-xl bg-muted border border-border text-foreground hover:bg-card hover:border-primary/20 transition-all"
                                >
                                  {improvement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )
                    ))}
                  </AnimatePresence>
                </div>
              </Tabs.Root>
            </div>
          </section>

          {/* Results Section */}
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
                            {CASE_STUDY.results.metrics.map((metric, index) => (
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
                                      {CASE_STUDY.results.impact.business.map((item, i) => (
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
                                      {CASE_STUDY.results.impact.users.map((item, i) => (
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
                            {CASE_STUDY.results.highlights.map((highlight, i) => (
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

          {/* Learnings Section */}
          <section id="learnings" className="py-32 relative scroll-mt-36">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-16 text-center">Key Learnings</h2>

              <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">What Worked Well</h3>
                  <div className="space-y-4">
                    {CASE_STUDY.learnings.successes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Challenges Faced</h3>
                  <div className="space-y-4">
                    {CASE_STUDY.learnings.challenges.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-xl font-semibold">Key Insights</h3>
                  <div className="space-y-4">
                    {CASE_STUDY.learnings.insights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 bg-muted/50 relative">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
                <p className="text-lg text-muted-foreground">
                  Hear what our clients have to say about their experience and results.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {CASE_STUDY.testimonials.map((testimonial, index) => (
                  <motion.blockquote
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative bg-card/50 rounded-2xl border border-border p-8 hover:border-primary/20 transition-colors group"
                  >
                    <div className="relative z-10 text-lg italic text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
                      "{testimonial.quote}"
                    </div>
                    <footer className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 bg-gradient-to-b from-muted/50 to-background relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Service?</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Learn how we can help you streamline your professional services and increase revenue through intelligent automation and user-centric design.
              </p>
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
                  asChild
                >
                  <Link href="/contact">
                    Schedule a Free Strategy Session
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Limited spots available. No commitment required.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
} 