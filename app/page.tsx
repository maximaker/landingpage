'use client'

import { useEffect, useRef } from "react"
import { Navigation } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { ProblemSolution } from './components/ProblemSolution'
import { FeaturesBreakdown } from './components/FeaturesBreakdown'
import { TrustElements } from './components/TrustElements'
import { SocialProofExpansion } from './components/SocialProofExpansion'
import { EducationalContent } from './components/EducationalContent'
import { PricingSection } from './components/PricingSection'
import { DigitalMagic } from './components/DigitalMagic'
import { AIPortraits } from './components/AIPortraits'
import { TopReasons } from './components/TopReasons'
import { CollaborationProcess } from './components/CollaborationProcess'
import { Features } from './components/Features'
import { ServicesOverview } from './components/ServicesOverview'
import { InteractiveQuiz } from './components/InteractiveQuiz'
import { Testimonials } from './components/Testimonials'
import { BlogResources } from './components/BlogResources'
import { FinalCTA } from './components/FinalCTA'
import { OurExpertise } from './components/OurExpertise'
import { SuccessStoriesSection } from './components/SuccessStoriesSection'
import { TimelineDemo } from './components/TimelineDemo'
import { Footer } from './components/Footer'
import { BentoDemo } from './components/BentoDemo'

export default function Page() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);


  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <main className="flex-1 relative [&>section:nth-child(odd)]:bg-background [&>section:nth-child(even)]:bg-muted z-50">
        <Navigation />
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <FeaturesBreakdown />
        <TrustElements />
        <SocialProofExpansion />
        <EducationalContent />
        <PricingSection />
        <DigitalMagic />
        <AIPortraits />
        <TopReasons />
        <CollaborationProcess />
        <Features />
        <ServicesOverview />
        <InteractiveQuiz />
        <Testimonials />
        <BlogResources />
        <FinalCTA />
        <OurExpertise />
        <SuccessStoriesSection />
        <TimelineDemo />
        <BentoDemo />
      </main>
      <Footer />
    </div>
  )
}
