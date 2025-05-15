import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTASection: React.FC = () => (
  <section className="py-32 bg-gradient-to-b from-muted/50 to-background relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Service?</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Learn how we can help you streamline your professional services and increase revenue through intelligent automation and user-centric design.
      </p>
      <div className="space-y-6">
        <Button 
          size="lg" 
          className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all group"
          asChild
        >
          <Link href="/contact">
            Schedule a Free Strategy Session
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
        <p className="text-sm text-muted-foreground">
          Limited spots available. No commitment required.
        </p>
      </div>
    </div>
  </section>
)

export default CTASection 