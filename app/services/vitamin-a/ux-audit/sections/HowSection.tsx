import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Understand the ecosystem",
    description: "Deep dive into your product, business goals, and user needs",
    items: [
      "Stakeholder interviews",
      "Business goals analysis",
      "User research review",
      "Analytics data analysis",
      "Competitive analysis"
    ]
  },
  {
    number: "2",
    title: "Developing findings into theories",
    description: "Analyze patterns and identify opportunities for improvement",
    items: [
      "Usability evaluation",
      "Information architecture review",
      "User flow analysis",
      "Content assessment",
      "Technical limitations review"
    ]
  },
  {
    number: "3",
    title: "Creating a design roadmap",
    description: "Prioritized recommendations and actionable next steps",
    items: [
      "Prioritized recommendations",
      "Quick wins identification",
      "Long-term improvements",
      "Implementation roadmap",
      "Resource requirements"
    ]
  }
];

export function HowSection() {
  return (
    <div className="space-y-12">            
      <div className="space-y-8">
        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all"
          >
            <div className="grid md:grid-cols-[auto,1fr] gap-8 items-start">
              <div className="text-center md:text-left">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto md:mx-0">
                  <span className="text-3xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="grid gap-4">
                {step.items.map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 