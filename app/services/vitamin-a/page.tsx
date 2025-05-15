"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LineChart, Search, Target, Zap, ArrowRight, FileSearch } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion } from 'framer-motion'

const FEATURES = [
  {
    title: "Product Health Audit",
    description: "Comprehensive analysis of your product's current state, identifying strengths and areas for improvement.",
    expandedContent: [
      "In-depth UX analysis and user journey mapping",
      "Performance metrics and technical health assessment",
      "Competitive analysis and market positioning",
      "Detailed report with actionable recommendations"
    ],
    icon: <Search className="w-6 h-6 transition-all duration-1000 group-[.expanded]:w-[30px] group-[.expanded]:h-[30px] group-[.expanded]:opacity-50 group-[.expanded]:saturate-50" />,
    color: "text-blue-500"
  },
  {
    title: "Market Position Analysis",
    description: "Deep dive into your competitive landscape to identify opportunities for differentiation and growth.",
    expandedContent: [
      "Comprehensive competitor analysis",
      "Market trend identification and assessment",
      "User demographic and behavior analysis",
      "Growth opportunity mapping"
    ],
    icon: <Target className="w-6 h-6 transition-all duration-1000 group-[.expanded]:w-[30px] group-[.expanded]:h-[30px] group-[.expanded]:opacity-50 group-[.expanded]:saturate-50" />,
    color: "text-green-500"
  },
  {
    title: "Performance Metrics",
    description: "Detailed tracking and analysis of key performance indicators to measure product success.",
    expandedContent: [
      "Custom KPI dashboard development",
      "Real-time performance monitoring",
      "User engagement metrics tracking",
      "ROI and conversion analysis"
    ],
    icon: <LineChart className="w-6 h-6 transition-all duration-1000 group-[.expanded]:w-[30px] group-[.expanded]:h-[30px] group-[.expanded]:opacity-50 group-[.expanded]:saturate-50" />,
    color: "text-purple-500"
  },
  {
    title: "Strategic Roadmap",
    description: "Clear action plan with prioritized initiatives to achieve your product goals.",
    expandedContent: [
      "Prioritized feature development plan",
      "Resource allocation recommendations",
      "Timeline and milestone planning",
      "Risk assessment and mitigation strategies"
    ],
    icon: <Zap className="w-6 h-6 transition-all duration-1000 group-[.expanded]:w-[30px] group-[.expanded]:h-[30px] group-[.expanded]:opacity-50 group-[.expanded]:saturate-50" />,
    color: "text-amber-500"
  }
]

const SERVICES = [
  {
    title: "UX Audit",
    description: "Comprehensive evaluation of your product's user experience. Identify pain points and get actionable recommendations.",
    href: "/services/vitamin-a/ux-audit",
    icon: <FileSearch className="w-6 h-6" />
  },
  // Add more services here as they are created
]

export default function VitaminAPage() {
  const [analysisHoveredIndex, setAnalysisHoveredIndex] = useState<number | null>(null)
  const [strategyHoveredIndex, setStrategyHoveredIndex] = useState<number>(0)
  const [implementationHoveredIndex, setImplementationHoveredIndex] = useState<number | null>(null)
  const [optimizationHoveredIndex, setOptimizationHoveredIndex] = useState<number>(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  const scrollSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollSectionRef.current) return

      const rect = scrollSectionRef.current.getBoundingClientRect()
      const scrollableHeight = scrollSectionRef.current.offsetHeight - window.innerHeight
      const scrollPosition = window.scrollY - (rect.top + window.scrollY)
      const progress = Math.max(0, Math.min(1, scrollPosition / scrollableHeight))
      
      // Ease the scroll progress for smoother animation
      const easedProgress = progress < 0.5 
        ? 2 * progress * progress // Ease in
        : -1 + (4 - 2 * progress) * progress // Ease out
      
      setScrollProgress(easedProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              Vitamin A
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Awareness & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Gain deep insights into your product's performance and user behavior patterns to identify key improvement opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to understand and improve your product's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="group block h-full"
                >
                  <div className="h-full p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/20 transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center text-primary font-medium">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to gain deeper insights?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you understand and improve your product.
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