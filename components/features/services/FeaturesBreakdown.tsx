"use client"

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { IntegrationLogos } from './assets/svgs'
import { Heading, Subheading, Body } from "@/components/ui/typography";

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

export function FeaturesBreakdown() {
  const [activeDemo, setActiveDemo] = useState('dashboard')

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Features & Capabilities
          </Badge>
          <Heading as="h2" size="5xl" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Everything You Need to Succeed
          </Heading>
          <Body size="lg" className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools and services to transform your digital product into a market leader
          </Body>
        </div>

        {/* Feature Comparison Grid */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {FEATURE_TIERS.map((tier, index) => (
              <div 
                key={index}
                className={`relative group p-8 rounded-2xl bg-card/50 dark:bg-card/40 border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                  tier.popular 
                    ? 'border-primary/20 scale-105 shadow-lg ring-1 ring-primary/10' 
                    : 'border-border hover:border-primary/20'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <Subheading as="h3" className="text-2xl font-semibold mb-2">{tier.name}</Subheading>
                  <Body className="text-muted-foreground mb-4">{tier.description}</Body>
                  <Heading as="div" size="3xl" className="text-3xl font-bold text-primary">{tier.price}</Heading>
                </div>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className={`flex-shrink-0 ${feature.included ? 'text-primary' : 'text-muted-foreground'}`}>
                        {feature.included ? (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                          </svg>
                        )}
                      </div>
                      <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full mt-8 ${
                    tier.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20'
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Subheading as="h3" className="text-2xl sm:text-3xl font-bold mb-4">See It in Action</Subheading>
            <Body className="text-muted-foreground">Experience our features through interactive demonstrations</Body>
          </div>

          <div className="bg-card/50 dark:bg-card/40 border border-border rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="border-b border-border">
              <div className="flex overflow-x-auto">
                {['dashboard', 'analytics', 'settings'].map((demo) => (
                  <button
                    key={demo}
                    onClick={() => setActiveDemo(demo)}
                    className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      activeDemo === demo
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {demo.charAt(0).toUpperCase() + demo.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {/* Demo content would go here - placeholder for now */}
              <div className="aspect-video bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Subheading as="h3" className="text-2xl sm:text-3xl font-bold mb-4">Success Stories</Subheading>
            <Body className="text-muted-foreground">Real results from real clients</Body>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {USE_CASES.map((useCase, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <Subheading as="h4" className="text-xl font-semibold mb-3">{useCase.title}</Subheading>
                <Body className="text-muted-foreground mb-6">{useCase.description}</Body>

                <div className="space-y-4 mb-6">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between">
                      <Body as="span" size="sm" className="text-sm text-muted-foreground">{metric.label}</Body>
                      <div className="flex items-center space-x-4">
                        <Body as="span" size="sm" className="text-sm text-red-500">{metric.before}</Body>
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        <Body as="span" size="sm" className="text-sm text-green-500">{metric.after}</Body>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {useCase.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <Subheading as="h3" className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Technical Specifications</Subheading>
            <Body className="text-muted-foreground leading-relaxed">Built with modern, scalable technologies</Body>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TECH_SPECS.map((category, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm hover:shadow-lg transition-all duration-300"
              >
                <Subheading as="h4" className="text-lg font-semibold mb-4 text-foreground">{category.category}</Subheading>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex items-center justify-between mb-1">
                        <Body as="span" className="font-medium text-foreground">{item.name}</Body>
                        <Body as="span" size="sm" className="text-sm text-primary">{item.version}</Body>
                      </div>
                      <Body as="p" size="sm" className="text-sm text-muted-foreground leading-relaxed">{item.description}</Body>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Capabilities */}
        <div>
          <div className="text-center mb-12">
            <Subheading as="h3" className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Integration Ecosystem</Subheading>
            <Body className="text-muted-foreground leading-relaxed">Connect with your favorite tools seamlessly</Body>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {/* Analytics */}
            <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <Subheading as="h3" className="text-xl font-semibold mb-6 text-foreground">Analytics & Tracking</Subheading>
              <div className="space-y-6">
                {ANALYTICS_INTEGRATIONS.map(({ name, Logo }) => (
                  <div key={name} className="flex items-center space-x-4 group">
                    <div className="text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary/70">
                      {Logo}
                    </div>
                    <Body as="span" className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{name}</Body>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Processing */}
            <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <Subheading as="h3" className="text-xl font-semibold mb-6 text-foreground">Payment Processing</Subheading>
              <div className="space-y-6">
                {PAYMENT_INTEGRATIONS.map(({ name, Logo }) => (
                  <div key={name} className="flex items-center space-x-4 group">
                    <div className="text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary/70">
                      {Logo}
                    </div>
                    <Body as="span" className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{name}</Body>
                  </div>
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <Subheading as="h3" className="text-xl font-semibold mb-6 text-foreground">Communication</Subheading>
              <div className="space-y-6">
                {COMMUNICATION_INTEGRATIONS.map(({ name, Logo }) => (
                  <div key={name} className="flex items-center space-x-4 group">
                    <div className="text-muted-foreground/50 transition-colors duration-200 group-hover:text-primary/70">
                      {Logo}
                    </div>
                    <Body as="span" className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">{name}</Body>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}