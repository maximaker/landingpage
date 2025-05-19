import { TeamSection } from '@/components/TeamSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function TeamBlockSection() {
  return (
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
  );
} 