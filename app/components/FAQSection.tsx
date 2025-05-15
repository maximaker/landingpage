'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Heading, Subheading } from "./ui/typography"

type FAQ = {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "What kind of clients do you work with?",
    answer: "We work with funded startups and scaling ventures that are past the MVP stage and looking to refine, optimize, or scale their digital products."
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on your needs. Some projects (like UX audits) take a few weeks, while others (like full design systems) take several months. We'll work with you to create a timeline that makes sense for your goals."
  },
  {
    question: "Do you only work on UX and design?",
    answer: "While our focus is on UX/UI and digital product strategy, we also collaborate with development teams to ensure seamless implementation and long-term success."
  },
  {
    question: "How do I know which service I need?",
    answer: "Not sure? Take our quick interactive quiz to find the best prescription for your product's needs!"
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            FAQ
          </Badge>
          <Heading size="3xl" className="mb-4">Got questions? We've got answers.</Heading>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
              >
                <Subheading as="span" className="pr-8">{faq.question}</Subheading>
                <svg
                  className={`w-6 h-6 text-primary transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}
              >
                <div className="px-6 text-muted-foreground">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
            asChild
          >
            <Link href="/quiz">
              Take the quiz
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