'use client'

import { useEffect, useRef } from "react"
import { Navigation } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { ProblemSolution } from './components/ProblemSolution'
import { ServicesOverview } from './components/ServicesOverview'
import { FeaturesBreakdown } from './components/FeaturesBreakdown'
import { Testimonials } from './components/Testimonials'
import { BlogResources } from './components/BlogResources'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

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
