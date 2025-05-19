"use client"

import { Navigation } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Timeline } from "@/components/ui/timeline"
import { OurExpertise } from "@/components/OurExpertise"
import { TeamSection } from "@/components/TeamSection"
import { TrustElements } from "@/components/TrustElements"
import { Button } from "@/components/ui/button"
import { ScrollToTeamButton } from "@/components/ScrollToTeamButton"
import Link from "next/link"
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Lightbulb, Users, Target, Zap, Shield, LineChart, Code } from 'lucide-react'
import { HeroSection } from './HeroSection'
import { CoreValuesSection } from './CoreValuesSection'
import { ExpertiseSection } from './ExpertiseSection'
import { MilestonesSection } from './MilestonesSection'
import { CallToActionSection } from './CallToActionSection'
import { MissionVisionValuesSection } from './MissionVisionValuesSection'
import { OurJourneySection } from './OurJourneySection'
import { TeamBlockSection } from './TeamBlockSection'
import { TrustPhilosophySection } from './TrustPhilosophySection'

const CORE_VALUES = [
  {
    title: "Innovation",
    description: "We push boundaries and embrace new technologies to solve complex challenges.",
    principles: [
      "Continuous learning and growth",
      "Embracing emerging technologies",
      "Creative problem-solving",
      "Forward-thinking solutions"
    ],
    icon: <Lightbulb className="w-6 h-6" />
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards in everything we do, from code to communication.",
    principles: [
      "Attention to detail",
      "Best practices adherence",
      "Quality-driven development",
      "Continuous improvement"
    ],
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Collaboration",
    description: "We believe in the power of partnership and working together towards shared goals.",
    principles: [
      "Open communication",
      "Knowledge sharing",
      "Team synergy",
      "Client partnership"
    ],
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Impact",
    description: "We measure our success by the tangible value we create for our clients.",
    principles: [
      "Results-driven approach",
      "Measurable outcomes",
      "Sustainable growth",
      "Long-term value"
    ],
    icon: <LineChart className="w-6 h-6" />
  }
]

const EXPERTISE = [
  {
    area: "Digital Product Development",
    description: "Building innovative solutions that solve real problems and deliver value.",
    capabilities: [
      "Full-stack development",
      "Mobile applications",
      "Web platforms",
      "API integration"
    ],
    icon: <Code className="w-6 h-6" />
  },
  {
    area: "Performance Optimization",
    description: "Enhancing speed, scalability, and efficiency of digital products.",
    capabilities: [
      "Load time optimization",
      "Infrastructure scaling",
      "Code optimization",
      "Performance monitoring"
    ],
    icon: <Zap className="w-6 h-6" />
  },
  {
    area: "User Experience Design",
    description: "Creating intuitive, engaging, and user-centered digital experiences.",
    capabilities: [
      "UX research",
      "Interface design",
      "Usability testing",
      "Design systems"
    ],
    icon: <Heart className="w-6 h-6" />
  },
  {
    area: "Security & Reliability",
    description: "Ensuring robust, secure, and dependable digital solutions.",
    capabilities: [
      "Security best practices",
      "Performance monitoring",
      "Disaster recovery",
      "Compliance standards"
    ],
    icon: <Shield className="w-6 h-6" />
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CoreValuesSection />
      <MilestonesSection />
      <CallToActionSection />
      <MissionVisionValuesSection />
      <ExpertiseSection />
      <OurJourneySection />
      <TeamBlockSection />
      <TrustPhilosophySection />
      
      {/* Core Values */}
      <section className="py-24 bg-muted/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CORE_VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  {value.description}
                </p>

                <ul className="space-y-3">
                  {value.principles.map((principle, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive capabilities that drive digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EXPERTISE.map((area, index) => (
              <motion.div
                key={area.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card/50 rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{area.area}</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  {area.description}
                </p>

                <ul className="space-y-3">
                  {area.capabilities.map((capability, i) => (
                    <li 
                      key={i}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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