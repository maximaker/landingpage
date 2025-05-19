import { Badge } from '@/components/ui/badge';

export function HeroSection() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative">
        <Badge 
          variant="secondary" 
          className="mb-8 px-4 py-2 text-base bg-muted text-foreground border-border backdrop-blur-sm"
        >
          About Us
        </Badge>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          {/* You can add dynamic or static heading text here */}
          Our Story & Values
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {/* Add a short intro or mission statement here if needed */}
          We are passionate about building digital products that make a difference.
        </p>
      </div>
    </section>
  );
} 