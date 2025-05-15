import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Heading } from "./ui/typography"

const PRICING_PLANS = [
  {
    name: 'Starter',
    price: {
      monthly: 499,
      annual: 449
    },
    description: 'Perfect for early-stage startups and small teams',
    features: [
      { name: 'Product Health Check', included: true },
      { name: 'Basic UX Optimization', included: true },
      { name: 'Performance Analysis', included: true },
      { name: 'Technical Debt Review', included: true },
      { name: 'Custom Integration', included: false },
      { name: 'Architecture Planning', included: false },
      { name: 'Team Training', included: false },
      { name: '24/7 Priority Support', included: false },
    ],
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: {
      monthly: 999,
      annual: 899
    },
    description: 'Ideal for growing businesses and established teams',
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
    ],
    cta: 'Get Started'
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 'Custom',
      annual: 'Custom'
    },
    description: 'Tailored solutions for large organizations',
    features: [
      { name: 'Product Health Check', included: true },
      { name: 'Advanced UX Optimization', included: true },
      { name: 'Performance Analysis', included: true },
      { name: 'Technical Debt Review', included: true },
      { name: 'Custom Integration', included: true },
      { name: 'Architecture Planning', included: true },
      { name: 'Team Training', included: true },
      { name: '24/7 Priority Support', included: true },
    ],
    cta: 'Contact Sales'
  }
]

const BILLING_FAQ = [
  {
    question: 'How does the billing cycle work?',
    answer: 'Billing cycles are monthly or annual, starting from the day you subscribe. Annual subscriptions include a 10% discount.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any payments.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Yes, we offer a 30-day money-back guarantee for all plans. No questions asked.'
  }
]

const ENTERPRISE_FEATURES = [
  {
    title: 'Custom Development',
    description: 'Tailored solutions built specifically for your organization'
  },
  {
    title: 'Dedicated Support',
    description: '24/7 priority support with a dedicated account manager'
  },
  {
    title: 'Advanced Security',
    description: 'Enhanced security features and compliance requirements'
  },
  {
    title: 'Custom Training',
    description: 'Personalized training sessions for your team'
  }
]

const SPECIAL_OFFERS = [
  {
    title: 'Startup Special',
    description: '50% off first 3 months for verified startups',
    code: 'STARTUP50'
  },
  {
    title: 'Annual Discount',
    description: '10% off when billed annually',
    code: 'ANNUAL10'
  },
  {
    title: 'Team Discount',
    description: '15% off for teams of 10+ users',
    code: 'TEAM15'
  }
]

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Flexible Pricing
          </Badge>
          <Heading size="3xl" className="sm:text-4xl lg:text-5xl mb-6 text-foreground">
            Choose Your Plan
          </Heading>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden fees. Choose the plan that best fits your needs.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={`text-sm font-medium transition-colors duration-200 ${billingCycle === 'monthly' ? 'text-primary' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <Button
            type="button"
            onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'annual' : 'monthly')}
            variant="ghost"
            size="icon"
            className="relative w-14 h-7 bg-primary/10 rounded-full p-1 transition-colors duration-200 hover:bg-primary/20"
          >
            <span className={`block w-5 h-5 rounded-full bg-primary shadow-sm transition-transform duration-200 ${
              billingCycle === 'annual' ? 'translate-x-7' : ''
            }`} />
          </Button>
          <span className={`text-sm font-medium transition-colors duration-200 ${billingCycle === 'annual' ? 'text-primary' : 'text-muted-foreground'}`}>
            Annual
          </span>
          <span className="ml-2 inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full shadow-sm">
            Save 10%
          </span>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`relative group p-8 rounded-2xl bg-card/50 dark:bg-card/40 border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-card/80 dark:hover:bg-card/60 ${
                plan.popular 
                  ? 'border-primary/20 scale-105 shadow-lg ring-1 ring-primary/10' 
                  : 'border-border hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-sm">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2 text-foreground tracking-tight">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
                <div className="text-4xl font-bold text-primary mb-2 tracking-tight">
                  {typeof plan.price[billingCycle] === 'number' 
                    ? `$${plan.price[billingCycle]}` 
                    : plan.price[billingCycle]
                  }
                </div>
                {typeof plan.price[billingCycle] === 'number' && (
                  <div className="text-sm text-muted-foreground/80">
                    per month, billed {billingCycle}
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center space-x-3 group/item"
                  >
                    <div className={`flex-shrink-0 transition-colors duration-200 ${feature.included ? 'text-primary' : 'text-muted-foreground/60'}`}>
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
                    <span className={`transition-colors duration-200 ${feature.included ? 'text-foreground group-hover/item:text-foreground/90' : 'text-muted-foreground/80'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow' 
                    : 'bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20 shadow-sm hover:shadow'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground tracking-tight">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {BILLING_FAQ.map((faq, index) => (
              <div 
                key={index}
                className="rounded-lg border border-border overflow-hidden bg-card/50 dark:bg-card/40 backdrop-blur-sm hover:border-primary/20 transition-all duration-200"
              >
                <Button
                  type="button"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  variant="ghost"
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-primary transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Enterprise Features
            </h3>
            <p className="text-muted-foreground">
              Customized solutions for large organizations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ENTERPRISE_FEATURES.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">
              Special Offers
            </h3>
            <p className="text-muted-foreground">
              Take advantage of our limited-time offers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {SPECIAL_OFFERS.map((offer, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-lg font-semibold text-primary mb-2">
                  {offer.title}
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <div className="flex items-center justify-between p-2 rounded bg-primary/5">
                  <code className="text-sm font-mono text-primary">
                    {offer.code}
                  </code>
                  <Button className="text-sm text-primary hover:text-primary/80 transition-colors">
                    Copy
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 