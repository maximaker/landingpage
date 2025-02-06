import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/Footer"
import { Timeline } from "@/components/ui/timeline"
import { OurExpertise } from "@/components/OurExpertise"
import { TeamSection } from "@/components/TeamSection"
import { TrustElements } from "@/components/TrustElements"

export default function AboutPage() {
  const timelineData = [
    {
      title: "2020",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Foundation</h3>
          <p className="text-muted-foreground">Digital Vitamins was founded with a vision to revolutionize digital product development.</p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Growth & Innovation</h3>
          <p className="text-muted-foreground">Expanded our services and built a strong team of digital experts.</p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
          <p className="text-muted-foreground">Started serving clients worldwide and launched innovative digital solutions.</p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="bg-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-2">Industry Leadership</h3>
          <p className="text-muted-foreground">Became a leading force in digital transformation and product development.</p>
        </div>
      ),
    },
  ];

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

      {/* Our Story Section with Timeline */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From our humble beginnings to industry leadership, every step has been driven by our passion for digital excellence.
            </p>
          </div>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Values and Trust Elements */}
      <TrustElements />

      {/* Our Expertise */}
      <OurExpertise />

      <Footer />
    </main>
  )
}