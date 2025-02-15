"use client"

import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { InteractiveQuiz } from "@/components/InteractiveQuiz"
import { ProblemSolution } from "@/components/ProblemSolution"
import { SuccessStories } from "@/components/SuccessStories"
import { Badge } from "@/components/ui/badge"
import { BentoDemo } from "@/components/BentoDemo"
import { ServicesOverview } from "@/components/ServicesOverview"
import { ScrollToQuizButton } from "@/components/ScrollToQuizButton"
import { ServiceButtons, ServiceCTAButtons } from "@/components/ui/service-buttons"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SERVICES = [
  {
    name: "Vitamin A",
    subtitle: "Awareness & Analysis",
    description: "Gain deep insights into your product's health and market position through comprehensive analysis and strategic planning.",
    href: "/services/vitamin-a",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    name: "Vitamin B",
    subtitle: "Build & Boost",
    description: "Transform your product with expert development, enhanced features, and optimized performance.",
    href: "/services/vitamin-b",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    name: "Vitamin C",
    subtitle: "Convert & Capitalize",
    description: "Optimize your conversion funnel and maximize revenue through data-driven improvements.",
    href: "/services/vitamin-c",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Vitamin D",
    subtitle: "Develop & Deploy",
    description: "Scale your product with robust architecture, seamless deployment, and reliable infrastructure.",
    href: "/services/vitamin-d",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 9l-7 7-7-7" />
        <path d="M12 16V4" />
        <path d="M5 20h14" />
      </svg>
    )
  }
]

export default function ServicesPage() {
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
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Digital Vitamins for Your Product
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to enhance, optimize, and scale your digital product.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link 
                key={service.name}
                href={service.href}
                className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20 dark:group-hover:bg-primary/30">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{service.name}</h2>
                    <p className="text-primary">{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which vitamin you need?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take our quick assessment to get a personalized recommendation for your product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8">
              Take Assessment
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