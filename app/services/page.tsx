"use client"

import { ProblemSolution } from "@/components/ProblemSolution"
import { ProblemSolutionV2 } from "@/components/ProblemSolutionV2"
import { SuccessStories } from "@/components/SuccessStories"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Target, Palette, Code, TrendingUp, PenTool, BarChart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const VITAMIN_SERVICES = [
  {
    name: "Vitamin A",
    subtitle: "Awareness & Analysis",
    description: "Gain deep insights into your product's health and market position through comprehensive analysis and strategic planning.",
    href: "/services/vitamin-a",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    name: "Vitamin B",
    subtitle: "Build & Boost",
    description: "Transform your product with expert development, enhanced features, and optimized performance.",
    href: "/services/vitamin-b",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    name: "Vitamin C",
    subtitle: "Convert & Capitalize",
    description: "Optimize your conversion funnel and maximize revenue through data-driven improvements.",
    href: "/services/vitamin-c",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Vitamin D",
    subtitle: "Deploy & Deliver",
    description: "Scale your product with robust architecture, seamless deployment, and reliable infrastructure.",
    href: "/services/vitamin-d",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 9l-7 7-7-7" />
        <path d="M12 16V4" />
        <path d="M5 20h14" />
      </svg>
    )
  }
]

const CORE_CAPABILITIES = [
  {
    title: "Digital Strategy",
    description: "Data-driven strategic planning and roadmap development to guide your digital transformation journey.",
    icon: <Target className="w-6 h-6" />,
    benefits: ["Market Analysis", "Competitive Positioning", "Growth Planning"],
    color: "blue"
  },
  {
    title: "UX/UI Design",
    description: "User-centered design solutions that create engaging, intuitive, and delightful experiences.",
    icon: <Palette className="w-6 h-6" />,
    benefits: ["User Research", "Interface Design", "Usability Testing"],
    color: "purple"
  },
  {
    title: "Development",
    description: "Full-stack development services using cutting-edge technologies and best practices.",
    icon: <Code className="w-6 h-6" />,
    benefits: ["Modern Tech Stack", "Scalable Architecture", "Clean Code"],
    color: "green"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing strategies to grow your digital presence and acquire customers.",
    icon: <TrendingUp className="w-6 h-6" />,
    benefits: ["Growth Strategy", "Conversion Optimization", "Analytics"],
    color: "orange"
  },
  {
    title: "Content Creation",
    description: "Compelling content strategy and creation that tells your story and engages your audience.",
    icon: <PenTool className="w-6 h-6" />,
    benefits: ["Brand Storytelling", "Content Strategy", "Visual Design"],
    color: "pink"
  },
  {
    title: "Analytics & Insights",
    description: "Deep insights and analytics to measure performance and drive data-informed decisions.",
    icon: <BarChart className="w-6 h-6" />,
    benefits: ["Performance Tracking", "User Behavior", "ROI Analysis"],
    color: "cyan"
  }
]

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const lastScrollTime = useRef<number>(0)
  const scrollTimeout = useRef<NodeJS.Timeout>()
  const isScrollLocked = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting) {
          isScrollLocked.current = true
        }
      },
      {
        threshold: 0.5,
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleWheel = (e: Event) => {
      if (!isInView || !isScrollLocked.current) return

      const wheelEvent = e as WheelEvent
      const now = Date.now()
      if (now - lastScrollTime.current < 100) return
      lastScrollTime.current = now
      const isMobile = window.innerWidth < 640 // sm breakpoint

      e.preventDefault()

      if (wheelEvent.deltaY > 0) {
        if (isMobile || activeIndex < CORE_CAPABILITIES.length - 1) {
          setDirection(1)
          setActiveIndex((prev) => 
            isMobile && prev === CORE_CAPABILITIES.length - 1 ? 0 : prev + 1
          )
        } else {
          isScrollLocked.current = false
          document.body.classList.remove(styles.scrollLocked)
        }
      } else if (wheelEvent.deltaY < 0) {
        if (isMobile || activeIndex > 0) {
          setDirection(-1)
          setActiveIndex((prev) => 
            isMobile && prev === 0 ? CORE_CAPABILITIES.length - 1 : prev - 1
          )
        } else {
          isScrollLocked.current = false
          document.body.classList.remove(styles.scrollLocked)
        }
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        if (isInView) {
          isScrollLocked.current = true
          document.body.classList.add(styles.scrollLocked)
        }
      }, 1000)
    }

    const options: AddEventListenerOptions = { passive: false }
    window.addEventListener('wheel', handleWheel, options)

    return () => {
      window.removeEventListener('wheel', handleWheel, options)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      document.body.classList.remove(styles.scrollLocked)
    }
  }, [isInView, activeIndex])

  return (
    <main className="flex-1 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
            >
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Digital Vitamins for Your Product
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to enhance, optimize, and scale your digital product.
            </p>
          </div>
        </div>
      </section>

      {/* Vitamin Services Grid */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Vitamin Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach to digital product enhancement
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {VITAMIN_SERVICES.map((service) => (
              <Link 
                key={service.name}
                href={service.href}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{service.name}</h2>
                    <p className="text-primary">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - Stacked Cards */}
      <section ref={sectionRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Core Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the digital product lifecycle, delivering excellence at every stage.
            </p>
          </div>

          <div className="relative h-[400px] sm:h-[450px] max-w-2xl mx-auto">
            {/* Card Indicators - Responsive badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6 sm:mb-8 px-2 sm:px-0">
              {CORE_CAPABILITIES.map((capability, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                  }}
                  className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-transparent'
                  }`}
                  aria-label={`Go to ${capability.title}`}
                >
                  {capability.title}
                </button>
              ))}
            </div>

            {/* Card Stack */}
            <div className="relative w-full h-[280px] sm:h-[320px]">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                {CORE_CAPABILITIES.map((capability, index) => {
                  if (
                    index !== activeIndex && 
                    index !== (activeIndex + 1) % CORE_CAPABILITIES.length && 
                    index !== (activeIndex + 2) % CORE_CAPABILITIES.length
                  ) {
                    return null
                  }

                  const offset = ((index - activeIndex + CORE_CAPABILITIES.length) % CORE_CAPABILITIES.length)
                  
                  return (
                    <motion.div
                      key={capability.title}
                      custom={direction}
                      initial={{
                        scale: 1 - offset * 0.05,
                        y: offset * 30,
                        opacity: 1 - offset * 0.2,
                        zIndex: CORE_CAPABILITIES.length - offset
                      }}
                      animate={{
                        scale: 1 - offset * 0.05,
                        y: offset * 30,
                        opacity: 1 - offset * 0.2,
                        zIndex: CORE_CAPABILITIES.length - offset
                      }}
                      exit={{
                        scale: 1 - offset * 0.05,
                        y: offset * 30,
                        opacity: 0,
                        zIndex: 0
                      }}
                      drag={index === activeIndex ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.7}
                      dragMomentum={false}
                      onDragEnd={(_, info) => {
                        const swipe = info.offset.x
                        const isMobile = window.innerWidth < 640 // sm breakpoint
                        
                        if (swipe < -100) {
                          setDirection(1)
                          if (isMobile) {
                            setActiveIndex(prev => 
                              prev === CORE_CAPABILITIES.length - 1 ? 0 : prev + 1
                            )
                          } else if (activeIndex < CORE_CAPABILITIES.length - 1) {
                            setActiveIndex(prev => prev + 1)
                          }
                        } else if (swipe > 100) {
                          setDirection(-1)
                          if (isMobile) {
                            setActiveIndex(prev => 
                              prev === 0 ? CORE_CAPABILITIES.length - 1 : prev - 1
                            )
                          } else if (activeIndex > 0) {
                            setActiveIndex(prev => prev - 1)
                          }
                        }
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                      }}
                      className="bg-card hover:bg-muted p-4 sm:p-6 rounded-2xl border border-border/50 hover:border-primary/20 transition-colors duration-300 cursor-grab active:cursor-grabbing select-none"
                      whileTap={{ cursor: "grabbing" }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="relative h-full">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                        
                        <div className="relative h-full flex flex-col">
                          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary`}>
                              {capability.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold">
                              {capability.title}
                            </h3>
                          </div>
                          
                          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                            {capability.description}
                          </p>

                          <div className="space-y-1 sm:space-y-1.5 flex-grow">
                            {capability.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-center text-xs sm:text-sm text-muted-foreground/80">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary/40 mr-1.5 sm:mr-2" />
                                {benefit}
                              </div>
                            ))}
                          </div>

                          <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-border/50">
                            <Button 
                              variant="ghost" 
                              className="group p-0 h-auto hover:bg-transparent"
                            >
                              <span className="text-primary text-xs sm:text-sm font-medium group-hover:mr-2 transition-all">
                                Learn more
                              </span>
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Mobile swipe indicator */}
            <div className="mt-4 sm:hidden flex items-center justify-center text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <ChevronLeft className="w-3 h-3" />
                Swipe to navigate
                <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Original Problem Solution Section */}
      <ProblemSolution />

      {/* Enhanced Problem Solution Section */}
      <div className="relative py-12 sm:py-16">
        <div className="absolute inset-0 bg-muted/50" />
        <div className="relative">
          <ProblemSolutionV2 />
        </div>
      </div>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which vitamin you need?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our quick assessment to get a personalized recommendation for your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8">
              Take Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8"
              asChild
            >
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}