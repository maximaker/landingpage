import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { useState } from 'react'

const PRICING_PLANS = [
  {
    name: "Essential Checkup",
    description: "Perfect for startups and growing products that need expert guidance.",
    monthlyPrice: "999",
    annualPrice: "899",
    duration: {
      monthly: "per audit",
      annual: "per audit"
    },
    features: [
      "Comprehensive product audit",
      "UX evaluation & recommendations",
      "Performance optimization guide",
      "Security assessment",
      "30-day action plan",
      "2 follow-up consultations"
    ],
    metrics: {
      label: "Average ROI",
      value: "3.5x"
    },
    popular: false
  },
  {
    name: "Wellness Program",
    description: "Ideal for established products requiring ongoing optimization and support.",
    monthlyPrice: "2,499",
    annualPrice: "1,999",
    duration: {
      monthly: "per month",
      annual: "per month"
    },
    features: [
      "Monthly product health checks",
      "Priority UX consultations",
      "Continuous performance monitoring",
      "Security & compliance updates",
      "Quarterly strategy sessions",
      "Dedicated product specialist",
      "Emergency support (24/7)",
      "Team training workshops"
    ],
    metrics: {
      label: "Client Retention",
      value: "94%"
    },
    popular: true
  },
  {
    name: "Enterprise Care",
    description: "Tailored solutions for large-scale products with complex requirements.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    duration: {
      monthly: "custom plan",
      annual: "custom plan"
    },
    features: [
      "Custom audit frequency",
      "Enterprise UX framework",
      "Advanced performance suite",
      "Security hardening program",
      "Dedicated team of specialists",
      "Priority 24/7 support",
      "Custom training program",
      "Quarterly business reviews"
    ],
    metrics: {
      label: "Time to Value",
      value: "-40%"
    },
    popular: false
  }
]

const FAQ_ITEMS = [
  {
    question: "How often should I get a product health check?",
    answer: "We recommend regular health checks every quarter for optimal product performance. However, the frequency can vary based on your product's complexity, user base, and growth rate. Our Wellness Program includes monthly checks to ensure consistent monitoring and early issue detection."
  },
  {
    question: "What's included in the product audit?",
    answer: "Our comprehensive product audit covers UX evaluation, performance analysis, security assessment, and actionable recommendations. We examine user flows, identify friction points, analyze technical debt, and provide a detailed report with prioritized improvements."
  },
  {
    question: "How long does an audit typically take?",
    answer: "A standard product audit takes 2-3 weeks to complete, including thorough analysis and recommendation preparation. This timeline ensures we can provide detailed insights while maintaining quick turnaround for critical improvements."
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Yes, you can upgrade your plan at any time. We'll prorate the cost and ensure a smooth transition. Our team will help you choose the right plan based on your evolving needs and growth trajectory."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Absolutely! Our Enterprise Care plan is fully customizable to meet your specific needs. We'll work with you to create a tailored solution that addresses your unique challenges and requirements."
  }
]

type BillingInterval = 'monthly' | 'annual'

export function Pricing() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>('monthly')

  const calculateSavings = (monthlyPrice: string, annualPrice: string) => {
    if (monthlyPrice === "Custom" || annualPrice === "Custom") return null
    const monthly = parseFloat(monthlyPrice.replace(",", ""))
    const annual = parseFloat(annualPrice.replace(",", ""))
    const monthlySavings = monthly - annual
    const yearlyTotal = monthlySavings * 12
    return yearlyTotal.toLocaleString()
  }

  return (
    <section className="py-40 sm:py-48 lg:py-56 px-8 sm:px-12 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.01] via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/3 w-1/2 h-1/2 bg-primary/1 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-40">
          <Badge variant="secondary" className="mb-10 px-5 py-1.5 text-sm tracking-wide uppercase">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-foreground tracking-tight max-w-3xl mx-auto">
            Invest in your product's <span className="text-primary">health</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-xl mx-auto leading-relaxed">
            Choose the perfect plan to keep your digital product thriving and users happy.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mb-20">
          <div className="inline-flex rounded-full bg-muted p-1 relative mb-4">
            <button 
              onClick={() => setBillingInterval('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                billingInterval === 'monthly' 
                  ? 'text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBillingInterval('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative z-10 ${
                billingInterval === 'annual' 
                  ? 'text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Annual
            </button>
            <div 
              className={`absolute inset-y-1 w-[50%] bg-primary rounded-full transition-transform duration-200 ${
                billingInterval === 'annual' ? 'translate-x-full' : 'translate-x-0'
              }`} 
            />
          </div>
          {billingInterval === 'annual' && (
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary px-3 py-1 rounded-full text-sm">
              <Check className="w-4 h-4" />
              Save up to 20% with annual billing
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-40">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`group relative ${
                plan.popular 
                  ? 'bg-slate-900 text-slate-50 border-slate-800 hover:border-slate-700 lg:scale-105'
                  : 'bg-card dark:bg-card/95 text-foreground border-border hover:border-primary/20'
              } p-10 rounded-[32px] border shadow-sm hover:shadow-md dark:hover:shadow-primary/5 transition-all duration-200 scroll-animation`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Plan header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.popular ? (
                  <div className="bg-white/10 text-slate-50 px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                ) : (
                  <div className="text-sm text-muted-foreground font-medium px-3 py-1 rounded-full bg-muted dark:bg-muted/20">
                    {index === 0 ? 'For Startups' : 'Enterprise Grade'}
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold tracking-tight ${plan.popular ? 'text-slate-50' : 'text-foreground'}`}>
                    ${billingInterval === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className={`text-base ${plan.popular ? 'text-slate-300' : 'text-muted-foreground'}`}>
                    /{plan.duration[billingInterval]}
                  </span>
                </div>
                {billingInterval === 'annual' && plan.monthlyPrice !== "Custom" && (
                  <div className={`text-sm mt-2 font-medium ${plan.popular ? 'text-slate-300' : 'text-primary'}`}>
                    Save ${calculateSavings(plan.monthlyPrice, plan.annualPrice)} per year
                  </div>
                )}
                <p className={`mt-4 text-base leading-relaxed ${plan.popular ? 'text-slate-300' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <Button 
                className={`w-full mb-10 ${
                  plan.popular
                    ? 'bg-white hover:bg-slate-100 text-slate-900'
                    : 'bg-primary/5 dark:bg-primary/10 hover:bg-primary/10 dark:hover:bg-primary/20 text-primary'
                } py-6 px-8 rounded-2xl text-base font-medium transition-all duration-200`}
              >
                Get Started <span aria-hidden="true" className="ml-2">→</span>
              </Button>

              {/* Features */}
              <div className="space-y-8">
                <div>
                  <div className={`text-base font-medium mb-4 ${plan.popular ? 'text-slate-200' : ''}`}>
                    {index === 0 ? "What's included:" : "Everything in previous plan, plus:"}
                  </div>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-4 text-base ${
                        plan.popular ? 'text-slate-300' : 'text-muted-foreground'
                      }`}>
                        <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-slate-400' : 'text-primary/70'}`} 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2"
                        >
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className={`pt-8 border-t ${plan.popular ? 'border-slate-800' : 'border-border dark:border-border/50'}`}>
                  <div className={`text-sm ${plan.popular ? 'text-slate-400' : 'text-muted-foreground'}`}>
                    {plan.metrics.label}
                  </div>
                  <div className={`text-2xl font-bold ${plan.popular ? 'text-slate-50' : 'text-foreground'}`}>
                    {plan.metrics.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card dark:bg-card/95 border border-border dark:border-border/50 rounded-xl px-6 py-4"
              >
                <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
