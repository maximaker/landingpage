import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            About <span className="text-primary">Digital Vitamins</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We're on a mission to revolutionize digital product development through innovative solutions and expert guidance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h2>Our Story</h2>
            <p>
              Digital Vitamins was founded with a simple yet powerful vision: to help digital products reach their full potential. 
              We believe that every product, like every person, needs the right nutrients to grow and thrive.
            </p>
            
            <h2>Our Approach</h2>
            <p>
              We take a holistic approach to digital product development, considering all aspects of your product's health - 
              from user experience and performance to scalability and security.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>Innovation in Everything</li>
              <li>Customer Success First</li>
              <li>Continuous Improvement</li>
              <li>Transparency and Trust</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}