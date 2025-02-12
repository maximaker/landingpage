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

export default function ServicesPage() {
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
            The Vitamin Cabinet
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Find the perfect prescription for your product's <span className="text-primary">success</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Every product needs the right treatment to thrive. Whether you're diagnosing issues, refining strategy, 
            or scaling for the future, our vitamins (services) are designed to deliver results.
          </p>
          <ServiceButtons />
        </div>
      </section>

      {/* Service Categories - The Vitamin Grid */}
      <ServicesOverview />

      {/* How to Choose Section */}
      <section className="py-24 bg-muted/50" id="quiz-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Not sure what your product needs?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Let's find the right vitamins for your product's health.</p>
          </div>
          <InteractiveQuiz />
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStories />

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">How we turn challenges into scalable solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Our process is designed to be simple, strategic, and results-driven.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnosis & Strategy",
                description: "We analyze your product's needs, identify gaps, and create a customized roadmap."
              },
              {
                step: "2",
                title: "Treatment & Execution",
                description: "From design improvements to full-scale implementations, we put the strategy into action."
              },
              {
                step: "3",
                title: "Optimization & Growth",
                description: "We track performance, measure impact, and refine strategies for sustained success."
              }
            ].map((step, index) => (
              <div key={index} className="relative p-8 bg-background rounded-2xl border border-border hover:border-primary/20 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-4">Step {step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's build a healthier, more scalable product together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Your product deserves expert care. Let's discuss how we can help you refine, optimize, and scale for long-term success.
          </p>
          <ServiceCTAButtons />
        </div>
      </section>

      <Footer />
    </main>
  )
}