import { FileSearch, ListChecks, CheckCircle2 } from 'lucide-react';

const WHAT_DIFFERENT = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />,
    title: 'Data-Driven Insights',
    desc: 'Backed by analytics and user behavior patterns',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />,
    title: 'Expert Analysis',
    desc: 'Years of UX expertise across industries',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />,
    title: 'Actionable Steps',
    desc: 'Clear, prioritized recommendations',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />,
    title: 'Quick Implementation',
    desc: 'Focus on high-impact, achievable changes',
  },
];

export function WhatSection() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileSearch className="w-5 h-5 text-primary" />
            </div>
            Expert Evaluation
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            A user experience audit is an expert evaluation of how your potential clients interact with your website or application.
          </p>
        </div>
        <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <ListChecks className="w-5 h-5 text-primary" />
            </div>
            Actionable Results
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We identify interface flaws and UX logic issues, then develop a plan with clear recommendations on how to solve them.
          </p>
        </div>
      </div>
      <div className="bg-muted/50 rounded-2xl p-8 border border-border">
        <h3 className="text-xl font-semibold mb-6">What makes our audit different?</h3>
        <div className="grid sm:grid-cols-2 gap-6">
          {WHAT_DIFFERENT.map((item, i) => (
            <div className="flex gap-3" key={i}>
              {item.icon}
              <div>
                <h4 className="font-medium mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 