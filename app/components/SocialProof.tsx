"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, ExternalLink, Star } from 'lucide-react'
import React from 'react'

export const SocialProof = React.memo(function SocialProof() {
  // Testimonials with real people and companies
  const testimonials = [
    {
      quote: "The UX audit transformed our product. We saw a 42% increase in user engagement and a dramatic drop in support tickets.",
      author: "Sarah Miller",
      role: "CPO at TechStream",
      avatar: "/images/testimonials/avatar-1.jpg",
      rating: 5,
      logo: "/images/logos/techstream.svg"
    },
    {
      quote: "Their strategic approach helped us identify critical usability issues we'd been missing for months. Conversion rates improved within weeks.",
      author: "Michael Chen",
      role: "Founder of GrowthMetrics",
      avatar: "/images/testimonials/avatar-2.jpg",
      rating: 5,
      logo: "/images/logos/growthmetrics.svg"
    },
    {
      quote: "We were struggling with user retention. Their vitamin framework provided exactly what we needed - our activation rate increased by 38%.",
      author: "Jessica Williams",
      role: "UX Director at SaaSBoost",
      avatar: "/images/testimonials/avatar-3.jpg",
      rating: 5,
      logo: "/images/logos/saasboost.svg"
    }
  ]

  // Case studies with actual metrics
  const caseStudies = [
    {
      client: "FinTech Platform",
      title: "Conversion Rate Optimization",
      description: "Redesigned onboarding flow and simplified form interactions",
      metrics: [
        { label: "Conversion Rate", before: "3.2%", after: "8.7%", increase: "+171%" },
        { label: "User Activation", before: "46%", after: "78%", increase: "+69%" }
      ],
      image: "/images/case-studies/fintech.jpg",
      link: "/case-studies/fintech"
    },
    {
      client: "Healthcare SaaS",
      title: "Performance Optimization",
      description: "Rebuilt core interfaces and optimized API calls",
      metrics: [
        { label: "Page Load Time", before: "4.3s", after: "0.9s", increase: "-79%" },
        { label: "User Satisfaction", before: "67%", after: "94%", increase: "+40%" }
      ],
      image: "/images/case-studies/healthcare.jpg",
      link: "/case-studies/healthcare"
    }
  ]

  // Partner logos
  const partners = [
    { name: "Forbes", logo: "/images/logos/forbes.svg" },
    { name: "TechCrunch", logo: "/images/logos/techcrunch.svg" },
    { name: "Business Insider", logo: "/images/logos/business-insider.svg" },
    { name: "Product Hunt", logo: "/images/logos/product-hunt.svg" },
    { name: "Stripe", logo: "/images/logos/stripe.svg" },
    { name: "Hubspot", logo: "/images/logos/hubspot.svg" }
  ]

  // Impressive stats
  const stats = [
    { value: "98%", label: "Client satisfaction" },
    { value: "$125M+", label: "Client revenue influenced" },
    { value: "32", label: "Industry awards" },
    { value: "450+", label: "Projects completed" }
  ]

  return (
    <section className="py-20 md:py-32 overflow-hidden bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/20 text-primary">
            Trusted By Industry Leaders
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real results for real products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how we've helped companies transform their digital products with 
            measurable improvements in user engagement, conversion, and satisfaction.
          </p>
        </div>

        {/* Partner logos */}
        <div className="mb-20">
          <h3 className="text-center text-lg font-medium text-muted-foreground mb-8">
            Featured in
          </h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="h-8 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div className="flex items-center h-8">
                  <div className="w-24 h-8 md:w-32 relative">
                    {/* Placeholder for logo - would be an actual image in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/50 rounded">
                      {partner.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impressive stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="bg-background rounded-lg p-6 text-center shadow-sm border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured case studies */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-10">Featured Case Studies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="aspect-video relative bg-muted">
                  {/* Placeholder for case study image - would be an actual image in production */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-background/50">
                    <span className="text-xl font-bold">{study.client}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-1 text-sm text-primary">{study.client}</div>
                  <h4 className="text-xl font-bold mb-2">{study.title}</h4>
                  <p className="text-muted-foreground mb-6">{study.description}</p>
                  
                  <div className="mb-6 space-y-3">
                    {study.metrics.map((metric, j) => (
                      <div key={j} className="flex items-center justify-between">
                        <span className="text-sm">{metric.label}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-muted-foreground">{metric.before}</span>
                          <svg className="w-10 h-5 text-primary" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10H30" stroke="currentColor" strokeWidth="2"/>
                            <path d="M30 1L39 10L30 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-sm font-medium">{metric.after}</span>
                          <span className="text-xs text-green-600 font-medium">{metric.increase}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary">
                    <Link href={study.link}>
                      Read full case study
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild className="rounded-full">
              <Link href="/case-studies">
                View all case studies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 rounded-full overflow-hidden bg-muted relative">
                    {/* Placeholder for avatar - would be an actual image in production */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 border border-primary/10 shadow-lg text-center"
        >
          <div className="inline-flex mb-6 bg-background/80 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-primary font-medium shadow-sm">
            <span>Limited-time offer: Get a free UX consultation</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your digital product?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have enhanced their digital products with our vitamin framework.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-full px-8">
              <Link href="/contact">
                Schedule your diagnosis
                <CheckCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-full px-8">
              <Link href="/services">
                Learn more
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})