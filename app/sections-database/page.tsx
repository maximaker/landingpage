'use client'

import { Navigation as Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/about/HeroSection';
import { CoreValuesSection } from '@/about/CoreValuesSection';
import { MilestonesSection } from '@/about/MilestonesSection';
import { CallToActionSection } from '@/about/CallToActionSection';
import { MissionVisionValuesSection } from '@/about/MissionVisionValuesSection';
import { ExpertiseSection } from '@/about/ExpertiseSection';
import { OurJourneySection } from '@/about/OurJourneySection';
import { TeamBlockSection } from '@/about/TeamBlockSection';
import { TrustPhilosophySection } from '@/about/TrustPhilosophySection';
import { ContactNextStepsSection } from '../components/ContactNextStepsSection';
import { ProcessSection } from '../components/ProcessSection';
import { FeaturedServicesSection } from '../components/FeaturedServicesSection';
import { SimplicitySection } from '../components/SimplicitySection';
import { AdvertisingMarketingSection } from '../components/AdvertisingMarketingSection';
import { HowWeDoItSection } from '../components/HowWeDoItSection';

const SECTIONS = [
  { id: 'SECTION-HEADER-01', label: 'Header', component: <Header /> },
  { id: 'SECTION-HERO-01', label: 'Hero', component: <HeroSection /> },
  { id: 'SECTION-FOOTER-01', label: 'Footer', component: <Footer /> },
  { id: 'SECTION-CORE-VALUES-01', label: 'Core Values', component: <CoreValuesSection /> },
  { id: 'SECTION-MILESTONES-01', label: 'Milestones', component: <MilestonesSection /> },
  { id: 'SECTION-CTA-01', label: 'Call To Action', component: <CallToActionSection /> },
  { id: 'SECTION-MISSION-VISION-01', label: 'Mission & Vision', component: <MissionVisionValuesSection /> },
  { id: 'SECTION-EXPERTISE-01', label: 'Expertise', component: <ExpertiseSection /> },
  { id: 'SECTION-JOURNEY-01', label: 'Our Journey', component: <OurJourneySection /> },
  { id: 'SECTION-TEAM-01', label: 'Team', component: <TeamBlockSection /> },
  { id: 'SECTION-TRUST-01', label: 'Trust/Philosophy', component: <TrustPhilosophySection /> },
  { id: 'SECTION-CONTACT-01', label: 'Contact Next Steps', component: <ContactNextStepsSection /> },
  { id: 'SECTION-PROCESS-01', label: 'Process', component: <ProcessSection /> },
  { id: 'SECTION-FEATURED-SERVICES-01', label: 'Featured Services', component: <FeaturedServicesSection /> },
  { id: 'SECTION-SIMPLICITY-01', label: 'Simplicity', component: <SimplicitySection /> },
  { id: 'SECTION-ADVERTISING-01', label: 'Advertising & Marketing', component: <AdvertisingMarketingSection /> },
  { id: 'SECTION-HOW-WE-DO-IT-01', label: 'How We Do It', component: <HowWeDoItSection /> },
];

export default function SectionsDatabasePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-12">
          {/* TOC Sidebar */}
          <nav className="md:w-64 flex-shrink-0 mb-8 md:mb-0 sticky top-24 self-start hidden md:block">
            <div className="bg-card/70 rounded-xl border border-border p-4">
              <h2 className="text-lg font-semibold mb-4">On this page</h2>
              <ul className="space-y-2">
                {SECTIONS.map(item => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* Main Content */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-8">Sections Database</h1>
            <p className="mb-8 text-muted-foreground max-w-2xl">Each section below is a single instance of a reusable website section. Use the designation (ID) to refer to a section when building or requesting new pages.</p>
            <div className="space-y-16">
              {SECTIONS.map(({ id, label, component }) => (
                <section key={id} id={id} className="border rounded-xl p-6 bg-card/50">
                  <div className="mb-4 flex items-center gap-4">
                    <span className="text-xs font-mono bg-muted px-2 py-1 rounded text-muted-foreground">{id}</span>
                    <span className="text-lg font-semibold">{label}</span>
                  </div>
                  <div className="overflow-x-auto">
                    {component}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 