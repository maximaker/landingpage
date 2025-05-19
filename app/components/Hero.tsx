"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Microscope, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-20 sm:pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl opacity-70 animate-first"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-70 animate-second"></div>
      </div>

      <div className="container max-w-7xl relative z-10 px-4 sm:px-6 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start text-left"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm rounded-full">
              Digital Product Enhancement
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Vitamins for your <span className="relative text-primary whitespace-nowrap">
                digital product
                <motion.span 
                  className="absolute left-0 -bottom-2 w-full h-1 bg-primary/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
            </span>
          </h1>

            <p className="text-xl mb-8 leading-relaxed text-muted-foreground max-w-lg">
              Transform your digital product with clarity, strategy, and care. Each product needs essential vitamins to reach its full potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/services/vitamin-a/ux-audit">
              Get your diagnosis
                  <Microscope className="ml-2 h-5 w-5" />
                </Link>
            </Button>
              
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/services">
              Explore the vitamins
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            </div>
          </motion.div>
          
          {/* Right column - Digital Vitamins Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative aspect-square max-w-xl mx-auto lg:ml-auto rounded-2xl bg-gradient-to-br from-muted/80 via-muted/50 to-transparent p-1"
          >
            <div className="absolute inset-0 rounded-2xl bg-muted/20 backdrop-blur-sm border border-muted/30 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Digital Vitamins SVG Illustration */}
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full h-full"
                  style={{ maxWidth: "400px" }}
                >
                  {/* Background Elements */}
                  <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="160" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeDasharray="4 4" 
                    className="text-primary/10"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <motion.circle 
                    cx="200" 
                    cy="200" 
                    r="120" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1" 
                    strokeDasharray="8 8" 
                    className="text-primary/20"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Digital Circuit Elements */}
                  <g className="text-primary/30">
                    <path d="M100,200 L160,200" stroke="currentColor" strokeWidth="2" />
                    <path d="M240,200 L300,200" stroke="currentColor" strokeWidth="2" />
                    <path d="M200,100 L200,160" stroke="currentColor" strokeWidth="2" />
                    <path d="M200,240 L200,300" stroke="currentColor" strokeWidth="2" />
                    
                    <motion.circle 
                      cx="100" 
                      cy="200" 
                      r="4" 
                      fill="currentColor"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.circle 
                      cx="300" 
                      cy="200" 
                      r="4" 
                      fill="currentColor"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    />
                    <motion.circle 
                      cx="200" 
                      cy="100" 
                      r="4" 
                      fill="currentColor"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
                    />
                    <motion.circle 
                      cx="200" 
                      cy="300" 
                      r="4" 
                      fill="currentColor"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.7, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
                    />
                  </g>
                  
                  {/* Vitamin Capsules */}
                  <g>
                    {/* Vitamin A Capsule */}
                    <motion.g
                      initial={{ y: -5 }}
                      animate={{ y: 5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    >
                      <ellipse cx="200" cy="200" rx="50" ry="25" style={{ fill: 'hsl(var(--primary))', opacity: 0.7 }} />
                      <text x="200" y="205" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">A</text>
                    </motion.g>
                    
                    {/* Vitamin B Capsule */}
                    <motion.g
                      initial={{ y: 10 }}
                      animate={{ y: -10 }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
                    >
                      <ellipse cx="140" cy="240" rx="40" ry="20" style={{ fill: 'hsl(var(--accent))', opacity: 0.7 }} />
                      <text x="140" y="245" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">B</text>
                    </motion.g>
                    
                    {/* Vitamin C Capsule */}
                    <motion.g
                      initial={{ y: 5 }}
                      animate={{ y: -5 }}
                      transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 }}
                    >
                      <ellipse cx="260" cy="240" rx="40" ry="20" style={{ fill: 'hsl(var(--muted))', opacity: 0.7 }} />
                      <text x="260" y="245" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">C</text>
                    </motion.g>
                    
                    {/* Vitamin D Capsule */}
                    <motion.g
                      initial={{ y: -8 }}
                      animate={{ y: 8 }}
                      transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.9 }}
                    >
                      <ellipse cx="200" cy="150" rx="40" ry="20" style={{ fill: 'hsl(var(--secondary))', opacity: 0.7 }} />
                      <text x="200" y="155" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">D</text>
                    </motion.g>
                  </g>
                  
                  {/* Digital Product (Screen) */}
                  <motion.rect
                    x="160" 
                    y="185" 
                    width="80" 
                    height="60" 
                    rx="4"
                    fill="currentColor"
                    className="text-background"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: 0.9 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />
                  
                  {/* Data Pulse Animation */}
                  <g>
                    <motion.path
                      d="M175,215 L185,205 L195,225 L205,195 L215,215 L225,215"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                      strokeDasharray="100"
                      strokeDashoffset="100"
                      initial={{ strokeDashoffset: 100 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                  </g>
                  
                  {/* Growth Indicators */}
                  <g>
                    <motion.path
                      d="M330,220 L330,170 L320,180 L330,170 L340,180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary/60"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.5 }}
                    />
                    
                    <motion.path
                      d="M70,220 L70,170 L60,180 L70,170 L80,180"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                      className="text-primary/60"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </g>
                </svg>
                
                {/* Enhance Your Product Card */}
                <div className="absolute bottom-8 w-4/5 max-w-xs">
                  <motion.div 
                    className="text-center p-6 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg border border-border/50 transform hover:scale-105 transition-transform duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1">Enhance Your Product</h3>
                    <p className="text-xs text-muted-foreground">
                      Diagnose and strengthen your digital product with our specialized vitamins
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Metrics display */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {[
            { value: '97%', label: 'Client satisfaction rate' },
            { value: '250+', label: 'Products enhanced' },
            { value: '80%', label: 'Average engagement increase' },
            { value: '8-12', label: 'Weeks to transform' }
          ].map((metric, i) => (
            <div key={i} className="bg-muted/50 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-muted/80 transition-colors duration-200">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
