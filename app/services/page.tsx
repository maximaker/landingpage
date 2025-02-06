import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { InteractiveQuiz } from "@/components/InteractiveQuiz"
import { ProblemSolution } from "@/components/ProblemSolution"
import { SuccessStories } from "@/components/SuccessStories"
import { Button } from "@/components/ui/button"

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Transform Your Digital <span className="text-primary">Presence</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Elevate your product's performance with our comprehensive suite of digital solutions tailored to your unique needs.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explore Our Services
          </Button>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Choose the perfect solution for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Strategy",
                description: "Strategic planning and roadmap development for your digital transformation journey",
                icon: "🎯"
              },
              {
                title: "UX/UI Design",
                description: "User-centered design solutions that create engaging and intuitive experiences",
                icon: "🎨"
              },
              {
                title: "Development",
                description: "Full-stack development services using cutting-edge technologies",
                icon: "💻"
              },
              {
                title: "Digital Marketing",
                description: "Data-driven marketing strategies to grow your digital presence",
                icon: "📈"
              },
              {
                title: "Content Creation",
                description: "Compelling content that tells your story and engages your audience",
                icon: "✍️"
              },
              {
                title: "Analytics & Insights",
                description: "Deep insights and analytics to measure and optimize performance",
                icon: "📊"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-background hover:bg-muted p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="absolute bottom-8 left-8 right-8 h-1 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <ProblemSolution />

      {/* Interactive Quiz Section */}
      <InteractiveQuiz />

      {/* Success Stories Section */}
      <SuccessStories />

      <Footer />
    </main>
  )
}