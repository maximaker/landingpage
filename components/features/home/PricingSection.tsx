'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PRICING_TIERS = [
  {
    name: 'Starter',
    description: 'Perfect for early-stage products',
    price: '$499',
    features: [
      'Basic Health Check',
      'Performance Analysis',
      'UX Review',
      'Security Assessment',
      'Basic Support'
    ]
  },
  {
    name: 'Pro',
    description: 'For growing digital products',
    price: '$999',
    popular: true,
    features: [
      'Advanced Health Check',
      'Deep Performance Analysis',
      'Comprehensive UX Review',
      'Enhanced Security Assessment',
      'Priority Support',
      'Custom Integration',
      'Monthly Consultation'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large products',
    price: 'Custom',
    features: [
      'Full Product Assessment',
      'Custom Performance Solutions',
      'Complete UX Overhaul',
      'Advanced Security Suite',
      '24/7 Premium Support',
      'Unlimited Integrations',
      'Weekly Consultation',
      'Dedicated Account Manager'
    ]
  }
]

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Choose your <span className="text-primary">treatment</span> plan
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Select the perfect prescription for your product's needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_TIERS.map((tier, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-2xl bg-card/30 dark:bg-card/20 backdrop-blur-sm border transition-all duration-300 hover:shadow-xl ${
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
                <h3 className="text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-4">{tier.description}</p>
                <div className="text-3xl font-bold text-primary">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <svg 
                      className="w-5 h-5 mr-3 text-primary" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${tier.popular 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20'}`}
                asChild
              >
                <Link href="/contact">
                  Get started
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Contact us for a tailored treatment plan.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
            asChild
          >
            <Link href="/contact">
              Contact Sales
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}