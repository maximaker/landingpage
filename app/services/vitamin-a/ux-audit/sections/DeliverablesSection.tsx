import { motion } from 'framer-motion';
import { FileSearch, Search, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DELIVERABLES = [
  {
    title: "Screen by screen analysis",
    description: "Detailed review of every key screen and user flow in your product",
    icon: <FileSearch className="w-6 h-6" />
  },
  {
    title: "Identify crucial UX flaws",
    description: "Comprehensive list of usability issues and their impact on users",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Quick win UX changes",
    description: "Immediate improvements that can be implemented quickly",
    icon: <Lightbulb className="w-6 h-6" />
  }
];

export function DeliverablesSection() {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        {DELIVERABLES.map((deliverable, index) => (
          <motion.div
            key={deliverable.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                {deliverable.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {deliverable.title}
            </h3>
            <p className="text-muted-foreground">
              {deliverable.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold mb-6">What's included in the report?</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Executive Summary</h4>
                <p className="text-sm text-muted-foreground">Key findings and recommendations at a glance</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Detailed Analysis</h4>
                <p className="text-sm text-muted-foreground">In-depth review of each issue found</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Visual Examples</h4>
                <p className="text-sm text-muted-foreground">Screenshots and annotations of issues</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Action Plan</h4>
                <p className="text-sm text-muted-foreground">Prioritized list of improvements</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-muted/50 rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold mb-6">Download a sample report</h3>
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            <Button className="w-full">Download Sample</Button>
          </form>
        </div>
      </div>
    </div>
  );
} 