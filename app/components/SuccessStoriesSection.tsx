import { Button } from '@/components/ui/button'
import { SuccessStory } from './SuccessStory'

const SUCCESS_STORIES = [
  {
    company: {
      name: 'HealthTech Pioneer',
      type: 'Healthcare Platform',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      )
    },
    challenge: 'Low user engagement and complex onboarding process leading to high drop-off rates',
    vitamins: [
      { name: 'Vitamin A', link: '/services#vitamin-a' },
      { name: 'Vitamin C', link: '/services#vitamin-c' },
      { name: 'Vitamin E', link: '/services#vitamin-e' }
    ],
    outcomes: [
      { label: 'User Engagement', value: '+150%' },
      { label: 'Patient Satisfaction', value: '95%' },
      { label: 'Onboarding Time', value: '-60%' }
    ]
  },
  {
    company: {
      name: 'SecureFlow',
      type: 'FinTech Solution',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )
    },
    challenge: 'Struggling with scalability issues and security concerns post-MVP launch',
    vitamins: [
      { name: 'Vitamin D', link: '/services#vitamin-d' },
      { name: 'Vitamin K', link: '/services#vitamin-k' },
      { name: 'Vitamin P', link: '/services#vitamin-p' }
    ],
    outcomes: [
      { label: 'Transaction Volume', value: '+200%' },
      { label: 'Security Rating', value: '99.9%' },
      { label: 'Cost Reduction', value: '45%' }
    ]
  },
  {
    company: {
      name: 'EduTech Leader',
      type: 'Learning Platform',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    challenge: 'Low course completion rates and poor student engagement metrics',
    vitamins: [
      { name: 'Vitamin A', link: '/services#vitamin-a' },
      { name: 'Vitamin I', link: '/services#vitamin-i' },
      { name: 'Vitamin P', link: '/services#vitamin-p' }
    ],
    outcomes: [
      { label: 'Student Engagement', value: '+180%' },
      { label: 'Course Completion', value: '+75%' },
      { label: 'User Retention', value: '92%' }
    ]
  }
]

import { Badge } from "@/components/ui/badge"

export function SuccessStoriesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-background border-t border-border transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 sm:mb-24 scroll-animation">
          <Badge variant="secondary" className="mb-8">
            Success Stories Section
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Patient success stories
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped products thrive with our tailored vitamin prescriptions
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SUCCESS_STORIES.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 scroll-animation">
          <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            Read more success stories
          </Button>
        </div>
      </div>
    </section>
  )
}
