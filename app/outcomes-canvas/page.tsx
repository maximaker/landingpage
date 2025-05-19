"use client"

import { Navigation } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function OutcomesCanvasPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-8">Outcomes-Focused Website Strategy Canvas</h1>

          {/* 1. Strategic Positioning Shift */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Strategic Positioning Shift</h2>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">1.1 From Deliverables to Outcomes</h3>
              <p className="text-muted-foreground">Current Approach: Focus on design deliverables and methodology<br/>New Approach: Lead with measurable business outcomes and user behavior changes<br/>Core Shift: Position yourself as driving engagement metrics, not creating design artifacts</p>
              <h3 className="text-xl font-bold">1.2 Outcomes-Centered Value Proposition</h3>
              <blockquote className="border-l-4 pl-4 italic">"I help wellness technology products achieve the metrics that matter: 30%+ higher retention rates, 2x increase in daily active usage, and sustainable habit formation that drives subscription renewals."</blockquote>
              <h3 className="text-xl font-bold">1.3 Target Client Concerns</h3>
              <ul className="list-disc ml-6 text-muted-foreground">
                <li>Acquisition Cost vs. Lifetime Value</li>
                <li>Initial Downloads vs. Sustained Usage</li>
                <li>Feature Adoption vs. Habit Formation</li>
                <li>Subscription Renewal Rates</li>
                <li>Data-Driven Roadmap Uncertainty</li>
              </ul>
            </div>
          </section>

          {/* 2. Website Architecture Based on Client Goals */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Website Architecture Based on Client Goals</h2>
            <p className="text-muted-foreground mb-2">Sections for homepage, about, method, services, case studies, resources, contact, etc. Each focused on outcomes and metrics.</p>
            {/* ...subsections as placeholders... */}
          </section>

          {/* 3. Visual System for Outcomes Communication */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Visual System for Outcomes Communication</h2>
            <p className="text-muted-foreground">Consistent style for showing before/after results, dashboard aesthetics, color-coding for metrics, and outcome-supporting photography.</p>
          </section>

          {/* 4. Content Strategy: Proving Outcome Expertise */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Content Strategy: Proving Outcome Expertise</h2>
            <p className="text-muted-foreground">Metric-specific content series, benchmark reports, outcome calculation tools.</p>
          </section>

          {/* 5. Implementation Plan for Outcomes-Focused Website */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Implementation Plan for Outcomes-Focused Website</h2>
            <p className="text-muted-foreground">Phased plan for building, proof, and results demonstration.</p>
          </section>

          {/* 6. Page-by-Page Outcome Focus */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Page-by-Page Outcome Focus</h2>
            <p className="text-muted-foreground">How each page (homepage, about, services, case studies, resources, contact) is structured around outcomes and metrics.</p>
          </section>

          {/* 7. Outcomes-Focused Visual Branding */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Outcomes-Focused Visual Branding</h2>
            <p className="text-muted-foreground">Data visualization, results-oriented photography, outcome-supporting color system.</p>
          </section>

          {/* 8. Key Messaging Shifts */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Key Messaging Shifts</h2>
            <p className="text-muted-foreground">From process to results, deliverables to value, features to outcomes, expertise to impact.</p>
          </section>

          {/* 9. Conversion Strategy */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Conversion Strategy</h2>
            <p className="text-muted-foreground">Primary conversion path, lead generation tools, call-to-action hierarchy.</p>
          </section>

          {/* 10. Client Communication Templates */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">10. Client Communication Templates</h2>
            <p className="text-muted-foreground">Discovery call structure, proposal framework, results reporting.</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
} 