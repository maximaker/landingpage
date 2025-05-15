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
import { PROGRESS_SECTIONS, CASE_STUDY, getPhaseItems, ProcessPhase, ProgressSection } from './data'
import BeforeAfterSlider from './components/BeforeAfterSlider'
import TargetAudienceSection from './components/TargetAudienceSection'
import ProcessSection from './components/ProcessSection'
import VisualTransformationSection from './components/VisualTransformationSection'
import LearningsSection from './components/LearningsSection'
import ResultsSection from './components/ResultsSection'
import TestimonialsSection from './components/TestimonialsSection'

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

          {/* Target Audience Section */}
          <TargetAudienceSection targetAudience={CASE_STUDY.context.target_audience} />

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
          <VisualTransformationSection visualTransformations={CASE_STUDY.visualTransformations} />

          {/* Results Section */}
          <ResultsSection results={CASE_STUDY.results} />

          {/* Learnings Section */}
          <LearningsSection learnings={CASE_STUDY.learnings} />

          {/* Testimonials Section */}
          <TestimonialsSection testimonials={CASE_STUDY.testimonials} />

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