"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceButtons() {
  const handleExploreClick = () => {
    const servicesSection = document.getElementById('services-overview')
    servicesSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDiagnosisClick = () => {
    const quizSection = document.getElementById('quiz-section')
    quizSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button 
        size="lg" 
        className="w-full sm:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={handleExploreClick}
      >
        Explore our services
      </Button>
      <Button
        variant="outline"
        className="w-full sm:w-auto px-8 py-6 text-lg"
        onClick={handleDiagnosisClick}
      >
        Get your diagnosis
      </Button>
    </div>
  )
}

export function ServiceCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button 
        size="lg" 
        className="w-full sm:w-auto px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
        onClick={() => {
          const quizSection = document.getElementById('quiz-section')
          quizSection?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        Get your diagnosis
      </Button>
      <Button 
        size="lg" 
        variant="outline"
        className="w-full sm:w-auto px-8 py-6 text-lg"
        asChild
      >
        <Link href="/contact">
          Schedule a consultation
        </Link>
      </Button>
    </div>
  )
}