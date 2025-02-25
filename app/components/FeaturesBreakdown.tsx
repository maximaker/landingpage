"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { IntegrationLogos } from './assets/svgs'
import { motion } from "framer-motion"
import { Check, Clock, Code, Cpu, BarChart, Sparkles, ExternalLink, Lightbulb, Rocket, Zap, Users, RefreshCw, ArrowRight } from "lucide-react"
import Link from "next/link"

const FEATURE_TIERS = [
  {
    name: 'Essential',
    description: 'Perfect for startups and small teams',
    price: '$499',
    features: [
      { name: 'Product Health Check', included: true },
      { name: 'Basic UX Optimization', included: true },
      { name: 'Performance Analysis', included: true },
      { name: 'Technical Debt Review', included: true },
      { name: 'Custom Integration', included: false },
      { name: 'Architecture Planning', included: false },
      { name: 'Team Training', included: false },
      { name: '24/7 Priority Support', included: false },
    ]
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: '$999',
    popular: true,
    features: [
      { name: 'Product Health Check', included: true },
      { name: 'Advanced UX Optimization', included: true },
      { name: 'Performance Analysis', included: true },
      { name: 'Technical Debt Review', included: true },
      { name: 'Custom Integration', included: true },
      { name: 'Architecture Planning', included: true },
      { name: 'Team Training', included: false },
      { name: '24/7 Priority Support', included: false },
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    features: [
      { name: 'Product Health Check', included: true },
      { name: 'Advanced UX Optimization', included: true },
      { name: 'Performance Analysis', included: true },
      { name: 'Technical Debt Review', included: true },
      { name: 'Custom Integration', included: true },
      { name: 'Architecture Planning', included: true },
      { name: 'Team Training', included: true },
      { name: '24/7 Priority Support', included: true },
    ]
  }
]

const USE_CASES = [
  {
    title: 'E-commerce Platform Optimization',
    description: 'Increased conversion rates by 45% through UX improvements and performance optimization',
    metrics: [
      { label: 'Conversion Rate', before: '2.1%', after: '3.8%' },
      { label: 'Page Load Time', before: '4.2s', after: '1.8s' },
      { label: 'Cart Abandonment', before: '68%', after: '42%' },
    ],
    tags: ['E-commerce', 'UX Design', 'Performance']
  },
  {
    title: 'SaaS Dashboard Redesign',
    description: 'Simplified complex data visualization, leading to 60% increase in user engagement',
    metrics: [
      { label: 'User Engagement', before: '12 min', after: '28 min' },
      { label: 'Feature Adoption', before: '34%', after: '72%' },
      { label: 'Support Tickets', before: '250/mo', after: '95/mo' },
    ],
    tags: ['SaaS', 'UI Design', 'Analytics']
  },
  {
    title: 'Mobile App Performance',
    description: 'Optimized app architecture and reduced crash rate by 90% while improving load times',
    metrics: [
      { label: 'Crash Rate', before: '4.8%', after: '0.3%' },
      { label: 'App Size', before: '85MB', after: '42MB' },
      { label: 'Launch Time', before: '3.5s', after: '1.2s' },
    ],
    tags: ['Mobile', 'Performance', 'Architecture']
  }
]

const TECH_SPECS = [
  {
    category: 'Frontend Technologies',
    items: [
      { name: 'React', version: '18.x', description: 'Modern UI development' },
      { name: 'Next.js', version: '14.x', description: 'Server-side rendering' },
      { name: 'TailwindCSS', version: '3.x', description: 'Styling framework' },
    ]
  },
  {
    category: 'Backend Services',
    items: [
      { name: 'Node.js', version: '18.x LTS', description: 'Server runtime' },
      { name: 'PostgreSQL', version: '15.x', description: 'Database' },
      { name: 'Redis', version: '7.x', description: 'Caching layer' },
    ]
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Docker', version: 'Latest', description: 'Containerization' },
      { name: 'Kubernetes', version: '1.26+', description: 'Orchestration' },
      { name: 'AWS/GCP', version: 'Latest', description: 'Cloud platform' },
    ]
  }
]

const ANALYTICS_INTEGRATIONS = [
  { name: 'Google Analytics', Logo: IntegrationLogos.GA },
  { name: 'Mixpanel', Logo: IntegrationLogos.Mixpanel },
  { name: 'Amplitude', Logo: IntegrationLogos.Amplitude }
]

const PAYMENT_INTEGRATIONS = [
  { name: 'Stripe', Logo: IntegrationLogos.StripeIntegration },
  { name: 'PayPal', Logo: IntegrationLogos.PayPal },
  { name: 'Square', Logo: IntegrationLogos.Square }
]

const COMMUNICATION_INTEGRATIONS = [
  { name: 'Slack', Logo: IntegrationLogos.Slack },
  { name: 'Twilio', Logo: IntegrationLogos.Twilio },
  { name: 'SendGrid', Logo: IntegrationLogos.SendGrid }
]

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export function FeaturesBreakdown() {
  const [activeDemo, setActiveDemo] = useState('dashboard')

  const features = [
    {
      title: "UX Analysis",
      description: "Deep dive into user experience issues with expert-led heuristic evaluations",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-amber-500/10 text-amber-500",
      size: "col-span-1 row-span-1 md:col-span-1",
      link: "/services/vitamin-a/ux-audit"
    },
    {
      title: "Performance Optimization",
      description: "Speed up load times and optimize core web vitals for better search rankings and user satisfaction",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-500",
      size: "col-span-1 row-span-1 md:col-span-1",
      link: "/services/vitamin-d/performance"
    },
    {
      title: "Strategic Product Vision",
      description: "Align your product roadmap with business goals and user needs for focused growth",
      icon: <BarChart className="h-8 w-8" />,
      color: "bg-green-500/10 text-green-500",
      size: "col-span-2 row-span-1 md:col-span-2",
      link: "/services/vitamin-a/product-strategy"
    },
    {
      title: "Tech Stack Review",
      description: "Evaluate your current architecture and recommend future-proof alternatives",
      icon: <Code className="h-8 w-8" />,
      color: "bg-purple-500/10 text-purple-500",
      size: "col-span-1 row-span-1 md:col-span-1",
      link: "/services"
    },
    {
      title: "AI Integration",
      description: "Intelligent automation and data-driven insights to supercharge your product capabilities",
      icon: <Cpu className="h-8 w-8" />,
      color: "bg-rose-500/10 text-rose-500",
      size: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
      link: "/services"
    },
    {
      title: "Conversion Optimization",
      description: "Transform visitors into customers with data-backed CRO strategies",
      icon: <RefreshCw className="h-8 w-8" />,
      color: "bg-indigo-500/10 text-indigo-500",
      size: "col-span-2 row-span-1 md:col-span-2",
      link: "/services/vitamin-c/conversion"
    },
    {
      title: "Team Augmentation",
      description: "Skilled developers and designers ready to join your team and accelerate delivery",
      icon: <Users className="h-8 w-8" />,
      color: "bg-orange-500/10 text-orange-500",
      size: "col-span-1 row-span-1 md:col-span-1",
      link: "/services/vitamin-b/development"
    },
    {
      title: "Launch Acceleration",
      description: "Get to market faster with our proven deployment and optimization strategies",
      icon: <Rocket className="h-8 w-8" />,
      color: "bg-cyan-500/10 text-cyan-500",
      size: "col-span-1 row-span-1 md:col-span-1",
      link: "/services"
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 overflow-hidden bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/20 text-primary">
            Our Vitamins
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Digital product enhancement framework
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive approach addresses every aspect of your product health, 
            from user experience to technical performance.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className={`${feature.size} ${feature.color} group rounded-2xl p-6 bg-card/40 border border-border backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="mb-4 p-3 rounded-xl bg-background/50 w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
              <div className="mt-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild
                  className="px-0 group-hover:text-primary"
                >
                  <Link href={feature.link}>
                    Learn more 
                    <ExternalLink className="ml-1 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center p-1 bg-muted/50 rounded-full mb-8">
            {[
              { icon: <Clock className="h-4 w-4" />, text: "Quick implementation" },
              { icon: <Check className="h-4 w-4" />, text: "Proven results" },
              { icon: <Sparkles className="h-4 w-4" />, text: "Tailored solutions" }
            ].map((item, i) => (
              <div 
                key={i}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium"
              >
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          
          <Button 
            size="lg" 
            asChild
            className="rounded-full px-8"
          >
            <Link href="/services">
              View all vitamins
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}