"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Zap, Clock, Target, LineChart, Award, Star } from 'lucide-react'
import Link from 'next/link'

const IMPACT_METRICS = [
  {
    metric: "45%",
    label: "Average Conversion Rate Increase",
    description: "Across all client projects",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    metric: "2.5x",
    label: "User Engagement Growth",
    description: "Typical improvement in 6 months",
    icon: <Users className="w-6 h-6" />
  },
  {
    metric: "60%",
    label: "Development Speed Increase",
    description: "Through optimized processes",
    icon: <Zap className="w-6 h-6" />
  },
  {
    metric: "30%",
    label: "Cost Reduction",
    description: "In maintenance and operations",
    icon: <Clock className="w-6 h-6" />
  }
]

const SUCCESS_STORIES = [
  {
    client: "TechFlow",
    industry: "SaaS",
    project: "Platform Optimization",
    challenge: "Struggling with user engagement and high churn rates in their project management platform.",
    solution: "Implemented comprehensive UX improvements and feature enhancements based on user behavior analysis.",
    results: [
      { metric: "+45%", label: "User Retention" },
      { metric: "+60%", label: "Feature Adoption" },
      { metric: "+35%", label: "Revenue Growth" }
    ],
    testimonial: {
      quote: "The transformation in our user engagement metrics was remarkable. The team helped us identify and fix critical UX issues we weren't even aware of.",
      author: "Sarah Chen",
      role: "Product Director"
    }
  },
  {
    client: "HealthHub",
    industry: "Healthcare",
    project: "Infrastructure Scaling",
    challenge: "Needed to scale their telemedicine platform to handle 10x more concurrent users during peak hours.",
    solution: "Optimized infrastructure, implemented efficient caching, and established a robust CI/CD pipeline.",
    results: [
      { metric: "-70%", label: "Response Time" },
      { metric: "10x", label: "User Capacity" },
      { metric: "99.99%", label: "Uptime" }
    ],
    testimonial: {
      quote: "Our platform's performance has been transformed. We can now handle peak loads with confidence, and our deployment process is seamless.",
      author: "Dr. James Wilson",
      role: "CTO"
    }
  },
  {
    client: "EcoShop",
    industry: "E-commerce",
    project: "Conversion Optimization",
    challenge: "Low conversion rates and abandoned carts were affecting their sustainable products marketplace.",
    solution: "Optimized the conversion funnel, enhanced payment flow, and implemented smart cart recovery strategies.",
    results: [
      { metric: "+85%", label: "Conversion Rate" },
      { metric: "+40%", label: "Cart Recovery" },
      { metric: "+25%", label: "Average Order Value" }
    ],
    testimonial: {
      quote: "The impact on our bottom line was immediate. The team helped us turn browsers into buyers with smart, data-driven optimizations.",
      author: "Emma Rodriguez",
      role: "E-commerce Director"
    }
  }
]

const AWARDS_AND_RECOGNITION = [
  {
    year: "2023",
    awards: [
      "Best Digital Transformation Agency",
      "Excellence in UX Design",
      "Top Tech Innovator"
    ]
  },
  {
    year: "2022",
    awards: [
      "Industry Leader in Product Development",
      "Best Client Satisfaction",
      "Innovation Award"
    ]
  }
]

export default function ImpactPage() {
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
              Our Impact
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Transforming Vision into{' '}
              <span className="text-primary">Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Discover the measurable impact we've created for businesses across industries
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Impact by Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to delivering value
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {IMPACT_METRICS.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card/50 border border-border hover:border-primary/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {item.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {item.metric}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients who trusted us with their digital transformation
            </p>
          </div>

          <div className="space-y-16">
            {SUCCESS_STORIES.map((story, index) => (
              <motion.div
                key={story.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-2xl border border-border hover:border-primary/20 p-8 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Project Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-primary font-medium mb-2">
                        {story.industry}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {story.client}
                      </h3>
                      <div className="text-lg text-muted-foreground">
                        {story.project}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">The Challenge</h4>
                        <p className="text-muted-foreground">{story.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Our Solution</h4>
                        <p className="text-muted-foreground">{story.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Results & Testimonial */}
                  <div className="space-y-8">
                    <div className="grid grid-cols-3 gap-4">
                      {story.results.map((result, i) => (
                        <div 
                          key={i}
                          className="bg-muted/50 rounded-lg p-4 text-center"
                        >
                          <div className="text-2xl font-bold text-primary mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="relative">
                      <div className="text-lg italic text-muted-foreground mb-4">
                        "{story.testimonial.quote}"
                      </div>
                      <footer>
                        <div className="font-medium text-foreground">
                          {story.testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {story.testimonial.role}
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry recognition for our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {AWARDS_AND_RECOGNITION.map((yearGroup, index) => (
              <motion.div
                key={yearGroup.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card/50 rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{yearGroup.year}</h3>
                </div>

                <ul className="space-y-4">
                  {yearGroup.awards.map((award, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to create your success story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve remarkable results.
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