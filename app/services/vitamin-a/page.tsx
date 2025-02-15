"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TimelineDemo } from "@/components/TimelineDemo"
import Link from "next/link"
import { LineChart, Search, Target, Zap } from "lucide-react"
import { useState } from "react"

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

export default function VitaminAPage() {
  const [analysisHoveredIndex, setAnalysisHoveredIndex] = useState<number | null>(null)
  const [strategyHoveredIndex, setStrategyHoveredIndex] = useState<number>(0)
  const [implementationHoveredIndex, setImplementationHoveredIndex] = useState<number | null>(null)
  const [optimizationHoveredIndex, setOptimizationHoveredIndex] = useState<number>(0)

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
              Vitamin A Service
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Awareness & Analysis
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Gain deep insights into your product's health and market position through comprehensive analysis and strategic planning.
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Analysis */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Analysis</h2>
            <p className="text-lg text-muted-foreground">Our systematic approach to understanding and improving your product</p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 h-[800px] md:h-[600px]">
            {FEATURES.map((feature, index) => {
              const isActive = analysisHoveredIndex === index
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-background border border-border rounded-xl overflow-hidden cursor-pointer
                    ${isActive ? 'md:absolute md:inset-0 md:z-10 scale-[1.02]' : 'md:relative scale-100'}
                    hover:border-primary/20 hover:shadow-lg
                    transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                  onMouseEnter={() => setAnalysisHoveredIndex(index)}
                  onMouseLeave={() => setAnalysisHoveredIndex(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b from-background to-background/80
                    transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                  />
                  
                  {/* Compact View - Only visible when not expanded */}
                  <div className={`flex flex-col items-center justify-center h-full p-6
                    transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'opacity-0 md:pointer-events-none scale-75 -translate-y-8' : 'opacity-100 scale-100 translate-y-0'}`}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-background flex items-center justify-center p-4 ${feature.color}
                      transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex-shrink-0 overflow-hidden mb-4
                      ${isActive ? 'scale-150 opacity-0 -translate-y-4' : 'scale-100 opacity-100 translate-y-0'}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={`text-lg font-semibold text-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${isActive ? 'opacity-0 scale-95 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* Expanded View */}
                  <div className={`absolute inset-0 flex p-8
                    transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8 pointer-events-none'}`}
                  >
                    {/* Main Content */}
                    <div className="flex-shrink-0 w-[240px]">
                      <div className={`w-16 h-16 rounded-xl bg-background flex items-center justify-center p-4 ${feature.color} mb-6
                        transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform overflow-hidden relative
                        ${isActive ? 'scale-100 translate-y-0' : 'scale-75 translate-y-4'}`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className={`text-xl font-semibold mb-4 whitespace-nowrap
                        transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                      >
                        {feature.title}
                      </h3>
                      <p className={`text-sm text-muted-foreground leading-relaxed
                        transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                        ${isActive ? 'opacity-100 translate-x-0 delay-[50ms]' : 'opacity-0 -translate-x-8'}`}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Expanded Content */}
                    <div className="flex-1 pl-10 hidden md:block">
                      <div className="h-full flex flex-col justify-center">
                        <div className="space-y-6">
                          {feature.expandedContent.map((item, idx) => (
                            <div 
                              key={idx}
                              className={`flex items-start gap-4
                                transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                ${isActive ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-12 opacity-0 scale-95'}`}
                              style={{ 
                                transitionDelay: `${isActive ? 150 + idx * 100 : 0}ms`
                              }}
                            >
                              <div className={`w-2 h-2 rounded-full ${feature.color} mt-2 flex-shrink-0
                                transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                              />
                              <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Strategy */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Strategic Planning</h2>
            <p className="text-lg text-muted-foreground">Developing actionable strategies for sustainable growth</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 h-[450px]">
            {FEATURES.map((feature, index) => {
              const isActive = strategyHoveredIndex === index
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-background border border-border rounded-xl overflow-hidden cursor-pointer
                    ${isActive ? 'md:w-[60%] p-8' : 'md:w-[10%] p-4'}
                    hover:border-primary/20 hover:shadow-lg
                    transition-all duration-700 ease-in-out`}
                  onMouseEnter={() => setStrategyHoveredIndex(index)}
                  onMouseLeave={() => setStrategyHoveredIndex(0)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b from-background to-background/80
                    transition-[opacity,transform] duration-700 ease-in-out
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
                  />
                  
                  {/* Compact View - Only visible when not expanded */}
                  <div className={`md:absolute inset-0 flex md:flex-col items-center justify-start p-4
                    transition-all duration-700 ease-in-out
                    ${isActive ? 'opacity-0 md:pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
                  >
                    <div className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center ${feature.color}
                      transition-all duration-500 ease-out flex-shrink-0 overflow-hidden`}
                    >
                      <div className="w-6 h-6 saturate-100 opacity-100 transition-all duration-700 ease-out">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold md:mt-6 md:rotate-180 md:whitespace-nowrap [writing-mode:vertical-lr] ml-4 md:ml-0
                      transition-transform duration-500 ease-out">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Expanded View */}
                  <div className={`relative flex h-full
                    transition-all duration-700 ease-in-out
                    ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95 md:pointer-events-none'}`}
                  >
                    {/* Main Content */}
                    <div className="flex-shrink-0 w-[240px]">
                      <div className={`w-24 h-24 rounded-xl bg-background flex items-center justify-center ${feature.color} mb-6
                        transition-all duration-1000 ease-in-out transform overflow-hidden relative
                        ${isActive ? 'scale-100' : 'scale-90'}`}
                      >
                        <div className={`flex items-center justify-center
                          transition-all duration-1000 ease-in-out transform
                          ${isActive ? 'scale-100' : 'scale-0'}`}
                        >
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-4 whitespace-nowrap
                        transition-all duration-500 ease-out"
                      >
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed
                        transition-all duration-500 ease-out delay-100"
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Expanded Content */}
                    <div className="flex-1 pl-10 hidden md:block">
                      <div className="h-full flex flex-col justify-center">
                        <div className="space-y-6">
                          {feature.expandedContent.map((item, idx) => (
                            <div 
                              key={idx}
                              className={`flex items-start gap-4
                                transition-all duration-700 ease-in-out
                                ${isActive ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}`}
                              style={{ 
                                transitionDelay: `${isActive ? 200 + idx * 150 : 0}ms`
                              }}
                            >
                              <div className={`w-2 h-2 rounded-full ${feature.color} mt-2 flex-shrink-0
                                transition-all duration-500 ease-out`}
                              />
                              <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Implementation */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-muted-foreground">Executing the plan with precision and expertise</p>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto">
            {FEATURES.map((feature, index) => {
              const isActive = implementationHoveredIndex === index
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-background border border-border rounded-xl overflow-hidden cursor-pointer
                    ${isActive ? 'min-h-[80px]' : 'h-[80px]'}
                    hover:border-primary/20 hover:shadow-lg
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
                  onMouseEnter={() => setImplementationHoveredIndex(index)}
                  onMouseLeave={() => setImplementationHoveredIndex(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/90
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'opacity-100' : 'opacity-0'}`} 
                  />
                  
                  {/* Base View - Always visible */}
                  <div className={`${isActive ? 'relative' : 'absolute inset-0'} flex items-center px-6 gap-4 border-b border-transparent
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'border-border/40 h-[80px]' : 'h-full'}`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center p-3 ${feature.color}
                      transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex-shrink-0
                      ${isActive ? 'scale-110' : 'scale-100'}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className={`text-lg font-semibold transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${isActive ? 'text-primary' : 'text-foreground'}`}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  {/* Expanded Content */}
                  <div className={`relative px-6 pb-6
                    transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive ? 'opacity-100 visible mt-[80px]' : 'opacity-0 invisible h-0 mt-0'}`}
                  >
                    <div className={`transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                    >
                      <div className="flex gap-8">
                        {/* Left Content */}
                        <div className="w-1/2 min-w-0">
                          <p className="text-sm text-muted-foreground mb-6">{feature.description}</p>
                          <div className="grid grid-cols-1 gap-3">
                            {feature.expandedContent.map((item, idx) => (
                              <div 
                                key={idx}
                                className={`flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted/80
                                  transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                                  ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                                style={{ 
                                  transitionDelay: `${isActive ? 100 + idx * 50 : 0}ms`
                                }}
                              >
                                <div className={`w-1.5 h-1.5 rounded-full ${feature.color} flex-shrink-0`} />
                                <p className="text-xs text-muted-foreground">{item}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Right Image/Illustration */}
                        <div className={`w-1/2 aspect-[4/3] rounded-xl bg-muted/50 flex items-center justify-center overflow-hidden
                          transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                          ${isActive ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'}`}
                        >
                          <div className={`w-32 h-32 ${feature.color} opacity-20 transform transition-transform duration-700
                            ${isActive ? 'scale-100 rotate-0' : 'scale-90 rotate-45'}`}
                          >
                            {feature.icon}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Feature Cards Section - Optimization */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Continuous Optimization</h2>
            <p className="text-lg text-muted-foreground">Refining and enhancing for maximum impact</p>
          </div>

          <div className="flex gap-8">
            {/* Left Column - Button Cards */}
            <div className="w-[35%] space-y-4">
              {FEATURES.map((feature, index) => {
                const isActive = optimizationHoveredIndex === index
                
                return (
                  <div 
                    key={index}
                    className={`group relative bg-background border border-border rounded-xl overflow-hidden cursor-pointer
                      hover:border-primary/20 hover:shadow-lg
                      transition-all duration-500 ease-out`}
                    onMouseEnter={() => setOptimizationHoveredIndex(index)}
                    onMouseLeave={() => setOptimizationHoveredIndex(0)}
                  >
                    <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500
                      ${isActive ? `${feature.color} opacity-100` : 'bg-border opacity-0'}`}
                    />
                    
                    <div className="p-4 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center ${feature.color}
                        transition-all duration-500 ease-out
                        ${isActive ? 'bg-primary/10 scale-110' : 'scale-100'}`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold transition-colors duration-500
                          ${isActive ? 'text-primary' : 'text-foreground'}`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Column - Expanded Content */}
            <div className="w-[65%] relative min-h-[400px] bg-muted/30 rounded-2xl border border-border overflow-hidden">
              {FEATURES.map((feature, index) => {
                const isActive = optimizationHoveredIndex === index
                
                return (
                  <div 
                    key={index}
                    className={`absolute inset-0 p-8
                      transition-all duration-500 ease-out
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    <div className="flex items-start gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-xl bg-background flex items-center justify-center ${feature.color}
                        transition-all duration-500 ease-out`}
                      >
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${feature.color}`}>
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground mt-2">
                          {feature.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {feature.expandedContent.map((item, idx) => (
                        <div 
                          key={idx}
                          className={`flex items-start gap-4 transition-all duration-500
                            ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                          style={{ transitionDelay: `${idx * 100}ms` }}
                        >
                          <div className={`w-8 h-8 rounded-full bg-background flex items-center justify-center flex-shrink-0 ${feature.color}`}>
                            <div className="w-2 h-2 rounded-full bg-current" />
                          </div>
                          <div className="bg-background/50 rounded-xl p-4 flex-1">
                            <p className="text-sm text-muted-foreground">{item}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-muted-foreground">Why choose Vitamin A for your product?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Product Health Audit",
                description: "Comprehensive analysis of your product's current state, identifying strengths and areas for improvement."
              },
              {
                title: "Market Position Analysis",
                description: "Understanding your competitive landscape and identifying opportunities for differentiation."
              },
              {
                title: "Strategic Roadmap",
                description: "Detailed action plan with clear milestones and objectives for product improvement."
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">How we deliver Vitamin A to your product</p>
          </div>

          <TimelineDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to boost your product's health?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Schedule a consultation to discuss how Vitamin A can help your product thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8">
              Schedule Consultation
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