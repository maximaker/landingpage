import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function TrustPhilosophySection() {
  return (
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
  );
} 