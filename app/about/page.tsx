import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Timeline } from "@/components/ui/timeline"
import { OurExpertise } from "@/components/OurExpertise"
import { TeamSection } from "@/components/TeamSection"
import { TrustElements } from "@/components/TrustElements"
import { Button } from "@/components/ui/button"
import { ScrollToTeamButton } from "@/components/ScrollToTeamButton"
import Link from "next/link"

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
            Your digital wellness team, <span className="text-primary">here to make your product thrive</span>
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            At Digital Vitamins, we don't just fix products—we optimize, scale, and future-proof them. Think of us as your product's wellness team, ensuring it stays strong, adaptable, and built for long-term success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollToTeamButton />
            <Button 
              size="lg"
              variant="secondary"
              className="group bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="/services">
                Explore the vitamins
                <svg 
                  className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M15 10l5 5-5 5"/>
                  <path d="M4 4v7a4 4 0 0 0 4 4h12"/>
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Sections */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Vision Section - Full-width with diagonal background */}
          <div className="relative mb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent transform -skew-y-6" />
            <div className="relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-12 sm:p-16 rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <div className="absolute -top-4 left-8 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-primary font-medium">Our Vision</span>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 text-left">
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground leading-tight">
                    Empowering Digital <span className="text-primary">Excellence</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We envision a digital landscape where every product reaches its full potential, 
                    creating meaningful experiences that drive innovation and success. Our goal is to 
                    be the catalyst that transforms good products into extraordinary digital solutions.
                  </p>
                </div>
                <div className="flex-1 relative aspect-square w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full animate-pulse opacity-60" />
                  <div className="absolute inset-4 bg-gradient-to-tl from-primary/20 to-transparent rounded-full animate-pulse delay-150 opacity-40" />
                  <div className="absolute inset-8 bg-gradient-to-tr from-primary/10 to-transparent rounded-full animate-pulse delay-300 opacity-30" />
                </div>
              </div>
            </div>
          </div>

          {/* Mission Section - Split layout with geometric patterns */}
          <div className="relative mb-24">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-12 rounded-3xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl order-2 lg:order-1">
                <div className="absolute -top-4 right-8 px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-primary font-medium">Our Mission</span>
                </div>
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
                    Nurturing Digital <span className="text-primary">Growth</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're committed to providing tailored digital solutions that enhance product health 
                    and drive sustainable growth. Through our innovative "vitamin" approach, we diagnose, 
                    treat, and optimize digital products to ensure they thrive in today's competitive landscape.
                  </p>
                </div>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-12 left-12 w-24 h-24 border-2 border-primary rounded-xl transform rotate-45" />
                  <div className="absolute bottom-12 right-12 w-32 h-32 border-2 border-primary rounded-full" />
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-4 h-full">
                  <div className="bg-primary/5 rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                  <div className="bg-primary/10 rounded-3xl transform hover:scale-105 transition-transform duration-300 translate-y-8" />
                  <div className="bg-primary/15 rounded-3xl transform hover:scale-105 transition-transform duration-300 -translate-y-8" />
                  <div className="bg-primary/5 rounded-3xl transform hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Values Section - Modern grid with hover effects */}
          <div className="relative">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
                <span className="text-primary font-medium">Our Values</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-foreground leading-tight">
                Principles that Drive <span className="text-primary">Us</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Innovation First",
                  description: "Constantly pushing boundaries and exploring new solutions to stay ahead of digital trends.",
                  gradient: "from-blue-500/10 to-transparent"
                },
                {
                  title: "Customer Success",
                  description: "Your success is our success. We're dedicated to delivering results that exceed expectations.",
                  gradient: "from-green-500/10 to-transparent"
                },
                {
                  title: "Continuous Growth",
                  description: "Embracing learning and improvement as core elements of our service delivery.",
                  gradient: "from-purple-500/10 to-transparent"
                },
                {
                  title: "Transparency",
                  description: "Building trust through open communication and honest partnerships.",
                  gradient: "from-orange-500/10 to-transparent"
                }
              ].map((value, index) => (
                <div key={index} className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-primary/90 transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Team Section */}
      <section id="team-section" className="py-16 sm:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Meet the people behind the prescriptions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Great products are built by great teams. Ours is made up of digital strategists, UX designers, and problem solvers dedicated to making your product better.
            </p>
          </div>
          <TeamSection />
          <div className="mt-12 text-center">
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="/contact">
                Let's work together!
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

      {/* Mission & Philosophy Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Why leading ventures trust Digital Vitamins</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every product is a living, evolving entity. That's why we take a holistic approach to digital product design—focusing not just on aesthetics, but on scalability, usability, and long-term success. Whether you need a quick fix or a full treatment plan, our team ensures your product stays in peak condition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Expert care</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                20+ years of experience in digital product design & strategy. We've helped build, scale, and optimize products across fintech, IoT, and health tech. Our experience means we know what works—and what doesn't.
              </p>
            </div>
            <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">Proven track record</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Trusted by startups and growth-stage ventures worldwide. Our past clients don't just work with us—they come back. We've helped businesses refine their products, increase engagement, and scale successfully.
              </p>
            </div>
            <div className="group relative bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-primary">We stick with you</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                A great strategy isn't enough—it needs proper execution and follow-through. We stay with you to ensure smooth implementation, measure results, and refine as needed.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
              asChild
            >
              <Link href="/case-studies">
                See our success stories
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
      {/* Our Expertise */}
      <OurExpertise />

      <Footer />
    </main>
  )
}