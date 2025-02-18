"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Users, TrendingUp, Sparkles, ChevronRight, Clock, Target, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CASE_STUDIES = [
  {
    client: "TechFlow",
    industry: "SaaS / Project Management",
    href: "/about/case-studies/techflow",
    description: "Transforming user engagement and retention through intuitive UX design",
    challenge: "TechFlow's project management platform was experiencing high churn rates and low user engagement, despite having powerful features.",
    duration: "12 weeks",
    images: [
      "/case-studies/techflow/hero.jpg",
      "/case-studies/techflow/dashboard.jpg",
      "/case-studies/techflow/mobile.jpg"
    ],
    metrics: [
      {
        label: "User Retention",
        value: "+45%",
        icon: <Users className="w-4 h-4" />
      },
      {
        label: "Feature Adoption",
        value: "+60%",
        icon: <Sparkles className="w-4 h-4" />
      },
      {
        label: "Revenue Growth",
        value: "+35%",
        icon: <TrendingUp className="w-4 h-4" />
      }
    ],
    services: ["UX Research", "UI Design", "Development", "Analytics"],
    testimonial: {
      quote: "The transformation in our user engagement metrics was remarkable. The team helped us identify and fix critical UX issues we weren't even aware of.",
      author: "Sarah Chen",
      role: "Product Director",
      company: "TechFlow"
    }
  },
  {
    client: "HealthHub",
    industry: "Healthcare",
    href: "/about/case-studies/healthhub",
    description: "Scaling telemedicine platform to handle 10x more concurrent users",
    challenge: "HealthHub's telemedicine platform was struggling with performance issues during peak hours, affecting patient care quality.",
    duration: "16 weeks",
    images: [
      "/case-studies/healthhub/hero.jpg",
      "/case-studies/healthhub/interface.jpg",
      "/case-studies/healthhub/mobile.jpg"
    ],
    metrics: [
      {
        label: "Response Time",
        value: "-70%",
        icon: <Zap className="w-4 h-4" />
      },
      {
        label: "User Capacity",
        value: "10x",
        icon: <Users className="w-4 h-4" />
      },
      {
        label: "Uptime",
        value: "99.99%",
        icon: <Shield className="w-4 h-4" />
      }
    ],
    services: ["Infrastructure", "Performance", "DevOps", "Security"],
    testimonial: {
      quote: "Our platform's performance has been transformed. We can now handle peak loads with confidence, and our deployment process is seamless.",
      author: "Dr. James Wilson",
      role: "CTO",
      company: "HealthHub"
    }
  },
  {
    client: "EcoShop",
    industry: "E-commerce",
    href: "/about/case-studies/ecoshop",
    description: "Optimizing conversion rates for sustainable products marketplace",
    challenge: "EcoShop was experiencing high cart abandonment rates and struggling to convert environmentally conscious browsers into buyers.",
    duration: "10 weeks",
    images: [
      "/case-studies/ecoshop/hero.jpg",
      "/case-studies/ecoshop/product.jpg",
      "/case-studies/ecoshop/checkout.jpg"
    ],
    metrics: [
      {
        label: "Conversion Rate",
        value: "+85%",
        icon: <Target className="w-4 h-4" />
      },
      {
        label: "Cart Recovery",
        value: "+40%",
        icon: <Sparkles className="w-4 h-4" />
      },
      {
        label: "AOV Growth",
        value: "+25%",
        icon: <TrendingUp className="w-4 h-4" />
      }
    ],
    services: ["CRO", "UX Design", "Analytics", "A/B Testing"],
    testimonial: {
      quote: "The impact on our bottom line was immediate. The team helped us turn browsers into buyers with smart, data-driven optimizations.",
      author: "Emma Rodriguez",
      role: "E-commerce Director",
      company: "EcoShop"
    }
  }
]

function ImageCarousel({ images, client, testimonial }: { 
  images: string[]
  client: string
  testimonial: {
    quote: string
    author: string
    role: string
    company: string
  }
}) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative h-full bg-muted overflow-hidden rounded-r-2xl">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
      
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
            {client} Image {currentIndex + 1}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Testimonial Overlay */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-8 pb-16">
        <blockquote className="text-white/90 italic text-lg max-w-2xl">
          "{testimonial.quote}"
          <footer className="mt-3 text-sm not-italic">
            <div className="font-medium text-white">
              {testimonial.author}
            </div>
            <div className="text-white/80">
              {testimonial.role}, {testimonial.company}
            </div>
          </footer>
        </blockquote>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-4 right-4 z-30 flex gap-1.5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CaseStudiesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <Badge 
              variant="secondary" 
              className="mb-8 px-4 py-2 text-base bg-muted text-foreground border-border backdrop-blur-sm"
            >
              Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Real Results for{' '}
              <span className="text-primary">Real Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover how we've helped companies transform their digital products and achieve remarkable growth
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {CASE_STUDIES.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Link 
                  href={study.href}
                  className="block h-full"
                >
                  <div className="relative bg-card/50 rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-lg group-hover:scale-[1.01]">
                    <div className="grid lg:grid-cols-[34fr,66fr]">
                      {/* Content Section */}
                      <div className="p-6 lg:p-8">
                        {/* Header */}
                        <div className="mb-8">
                          <Badge variant="secondary" className="mb-4">
                            {study.industry}
                          </Badge>
                          <h2 className="text-2xl font-semibold mb-3">
                            {study.client}
                          </h2>
                          <p className="text-lg text-muted-foreground">
                            {study.description}
                          </p>
                        </div>

                        {/* Services */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {study.services.map((service) => (
                            <Badge 
                              key={service}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {study.metrics.map((metric) => (
                            <div 
                              key={metric.label}
                              className="text-center p-4 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors"
                            >
                              <div className="flex items-center justify-center mb-2 text-primary">
                                {metric.icon}
                              </div>
                              <div className="text-xl font-semibold text-foreground mb-1">
                                {metric.value}
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                {metric.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between text-sm border-t border-border/40 mt-8 pt-6">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{study.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <span>View Case Study</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>

                      {/* Image Carousel Section */}
                      <ImageCarousel 
                        images={study.images} 
                        client={study.client} 
                        testimonial={study.testimonial}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help transform your digital product.
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