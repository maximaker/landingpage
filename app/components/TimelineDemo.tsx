import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Zap, Code, LineChart } from "lucide-react";

export function TimelineDemo() {
  const data = [
    {
      title: "Diagnosis",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-purple-500 bg-primary/5">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Diagnosis & Strategy</h3>
          </div>
          <p className="text-muted-foreground text-base mb-6">
            We assess your product's health, identify gaps, and create a customized strategy for success.
          </p>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h4 className="font-semibold text-lg mb-4">Key Activities</h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-70" />
                Product health audit
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-70" />
                User experience analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 opacity-70" />
                Strategic roadmap
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Treatment",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-blue-500 bg-primary/5">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Treatment & Execution</h3>
          </div>
          <p className="text-muted-foreground text-base mb-6">
            From design systems to full-feature rollouts, we build high-quality, scalable solutions.
          </p>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h4 className="font-semibold text-lg mb-4">Implementation Steps</h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70" />
                Design system development
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70" />
                Feature implementation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-70" />
                Performance optimization
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Optimization",
      content: (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-green-500 bg-primary/5">
              <LineChart className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Optimization & Growth</h3>
          </div>
          <p className="text-muted-foreground text-base mb-6">
            We monitor performance, track results, and refine your product for continuous success.
          </p>
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h4 className="font-semibold text-lg mb-4">Continuous Improvement</h4>
            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-70" />
                Performance monitoring
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-70" />
                User feedback analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-70" />
                Continuous improvement
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section>
      <Timeline data={data} />
    </section>
  );
} 