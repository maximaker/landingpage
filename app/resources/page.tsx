'use client'

import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { BlogResources } from "@/components/BlogResources"
import { EducationalContent } from "@/components/EducationalContent"
import { InteractiveQuiz } from "@/components/InteractiveQuiz"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function ResourcesPage() {
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
            Resource Hub
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Your go-to resource for building <span className="text-primary">healthier, scalable</span> digital products
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore expert insights, practical guides, and tools designed to help you refine, optimize, and grow your digital product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              onClick={() => {
                const resourcesSection = document.getElementById('featured-resources');
                resourcesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore resources
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
              <Link href="#quiz-section">
                Get personalized insights
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

      {/* Featured Resources Section */}
      <section id="featured-resources" className="py-16 sm:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Featured insights & tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                type: "Free Guide",
                title: "The UX Audit Checklist",
                description: "Spot usability issues before they cost you users.",
                icon: "📋"
              },
              {
                type: "Blog Post",
                title: "5 signs your product needs a check-up",
                description: "Learn to identify and fix common product issues.",
                icon: "📝"
              },
              {
                type: "Interactive Tool",
                title: "Feature Prioritization Matrix",
                description: "Make data-backed decisions on what to build next.",
                icon: "🎯"
              },
              {
                type: "Webinar Replay",
                title: "Scaling a digital product",
                description: "Strategies for long-term success.",
                icon: "🎥"
              }
            ].map((resource, index) => (
              <div 
                key={index}
                className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <Badge className="mb-3 bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20">
                  {resource.type}
                </Badge>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-6">
                  {resource.description}
                </p>
                <Button 
                  variant="link" 
                  className="group/btn text-primary p-0 hover:no-underline"
                >
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
            >
              See all resources
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Resources */}
      <BlogResources />

      {/* Educational Content */}
      <EducationalContent />

      {/* Interactive Quiz Section */}
      <section id="quiz-section">
        <InteractiveQuiz />
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-muted/50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Get expert guidance for your <span className="text-primary">product's next stage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Our resources are just the start. Let's create a personalized treatment plan to refine, optimize, and scale your digital product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="/contact">
                Get your diagnosis
                <svg 
                  className="w-4 h-4 ml-2" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="/contact">
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