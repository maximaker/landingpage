'use client'

import { useEffect, useRef } from "react"
import { Navigation } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { HowWeDoItSection } from './components/HowWeDoItSection'
import { SimplicitySection } from './components/SimplicitySection'
import { ContactNextStepsSection } from './components/ContactNextStepsSection'
import { ProcessSection } from './components/ProcessSection'
import { FeaturedServicesSection } from './components/FeaturedServicesSection'
import { AdvertisingMarketingSection } from './components/AdvertisingMarketingSection'
import { ProblemSolution } from './components/ProblemSolution'
import { ServicesOverview } from './components/ServicesOverview'
import { FeaturesBreakdown } from './components/FeaturesBreakdown'
import dynamic from 'next/dynamic'

const Testimonials = dynamic(() => import('./components/Testimonials').then(m => m.Testimonials), { ssr: false })
const BlogResources = dynamic(() => import('./components/BlogResources').then(m => m.BlogResources), { ssr: false })
const FinalCTA = dynamic(() => import('./components/FinalCTA').then(m => m.FinalCTA), { ssr: false })
const Footer = dynamic(() => import('./components/Footer').then(m => m.Footer), { ssr: false })

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create a more performant intersection observer for animations
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Unobserve after animation to improve performance
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '20px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <main className="flex-1 relative z-10">
        <Navigation />
        
        <section id="hero">
          <Hero />
          <HowWeDoItSection />
          <SimplicitySection />
          <ContactNextStepsSection />
          <ProcessSection />
          <FeaturedServicesSection />
          <AdvertisingMarketingSection />
        </section>
        
        <section id="social-proof">
          <SocialProof />
        </section>
        
        <section id="problem-solution">
          <ProblemSolution />
        </section>
        
        <section id="services">
          <ServicesOverview />
        </section>
        
        <section id="features">
          <FeaturesBreakdown />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="resources">
          <BlogResources />
        </section>
        
        <section id="cta">
          <FinalCTA />
        </section>
      </main>
      <Footer />
    </div>
  )
}
