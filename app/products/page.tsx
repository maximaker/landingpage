import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Features } from "@/components/Features"
import { FeaturesBreakdown } from "@/components/FeaturesBreakdown"

export default function ProductsPage() {
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
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our suite of digital solutions designed to enhance your product's performance and user experience.
          </p>
        </div>
      </section>

      {/* Features Overview */}
      <Features />

      {/* Detailed Features */}
      <FeaturesBreakdown />

      <Footer />
    </main>
  )
}