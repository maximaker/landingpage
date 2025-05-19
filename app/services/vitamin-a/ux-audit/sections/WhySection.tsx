import { Target, Lightbulb } from 'lucide-react';

export function WhySection() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">
          Delightful user experiences create valuable brands
        </h2>
        <p className="text-lg text-muted-foreground">
          But how do you provide these experiences for all of the users you serve? By designing just for them.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            The Challenge
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            You're too close to the product to spot the issues. You keep guessing what's wrong, but can't pinpoint the exact problems.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            The Solution
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A fresh set of eyes to surface UX flaws with your usability, information architecture, visual design, messaging and content.
          </p>
        </div>
      </div>
    </div>
  );
} 