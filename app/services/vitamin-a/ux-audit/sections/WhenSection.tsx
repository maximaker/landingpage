import { Search } from 'lucide-react';

const WHEN_QUESTIONS = [
  "Why aren't people signing up for our product?",
  "What's stopping free accounts from converting to paid customers?",
  "Why aren't they completing key user-flows?"
];

export function WhenSection() {
  return (
    <div className="space-y-12">
      <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
        <h3 className="text-xl font-semibold">Common Signs You Need a UX Audit</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {WHEN_QUESTIONS.map((question, i) => (
            <div 
              key={i}
              className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 group hover:bg-muted transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                {i + 1}
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {question}
              </p>
            </div>
          ))}
        </div>
        <div className="pt-6 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">
            These are symptoms of larger issues. It's actually good that they got on your radar. 
            It means you are aware that there's a problem that needs your attention. Before it becomes a business risk.
          </p>
        </div>
      </div>
      <div className="bg-muted/50 rounded-2xl p-8 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Search className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Should you handle the audit internally?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              It would definitely be cheaper, if you already have an expert or a dedicated design team. 
              They are already familiar with your product and the role it plays in your business. 
              They know who to ask for details if necessary, the tasks would be piped right into Jira.
            </p>
            <p className="text-lg text-primary font-medium">But is that enough?</p>
          </div>
        </div>
      </div>
    </div>
  );
} 