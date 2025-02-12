'use client'

import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/ContactForm"
import { FAQSection } from "@/components/FAQSection"
import { QuickContact } from "@/components/QuickContact"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Let's Connect
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Let's create the right <span className="text-primary">treatment plan</span> for your product
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Whether you need a quick consultation or a long-term strategy, we're here to help. 
            Tell us about your product, and let's get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Fill out the form below to get started
              <svg 
                className="w-4 h-4 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="#quick-contact">
                Schedule a consultation
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M4 5v11a4 4 0 0 0 4 4h12"/>
                  <path d="M15 5l5 5-5 5"/>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <QuickContact />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-24 sm:py-32 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Tell us about your product</h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below, and we'll get back to you within 24-48 hours.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Let's take the <span className="text-primary">next step</span> together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Your product deserves expert care. Whether it's a quick fix or a full treatment plan, 
            we're ready to help you make it thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              onClick={() => {
                const formSection = document.getElementById('contact-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get started now
              <svg 
                className="w-4 h-4 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="#quick-contact">
                Schedule a consultation
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M4 5v11a4 4 0 0 0 4 4h12"/>
                  <path d="M15 5l5 5-5 5"/>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}