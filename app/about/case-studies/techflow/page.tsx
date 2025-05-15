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