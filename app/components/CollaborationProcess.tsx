import { motion } from "framer-motion"
import { Zap, Code, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const PROCESS_STEPS = [
  {
    id: 1,
    title: "Diagnosis & Strategy",
    description: "We assess your product's health, identify gaps, and create a customized strategy for success.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-purple-500",
    items: [
      "Product health audit",
      "User experience analysis",
      "Strategic roadmap",
    ]
  },
  {
    id: 2,
    title: "Treatment & Execution",
    description: "From design systems to full-feature rollouts, we build high-quality, scalable solutions.",
    icon: <Code className="w-6 h-6" />,
    color: "text-blue-500",
    items: [
      "Design system development",
      "Feature implementation",
      "Performance optimization",
    ]
  },
  {
    id: 3,
    title: "Optimization & Growth",
    description: "We monitor performance, track results, and refine your product for continuous success.",
    icon: <LineChart className="w-6 h-6" />,
    color: "text-green-500",
    items: [
      "Performance monitoring",
      "User feedback analysis",
      "Continuous improvement",
    ]
  }
]

export function CollaborationProcess() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-20">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Our Process
          </Badge>
          <motion.h2 
            className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Collaboration <span className="text-primary">Process</span>
          </motion.h2>
          <motion.p 
            className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A systematic approach to transform your digital product from concept to reality.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-card/50 dark:bg-card/40 backdrop-blur-sm border border-border flex items-center justify-center text-sm font-medium text-primary">
                  {step.id}
                </div>

                <div className="h-full bg-card/50 dark:bg-card/40 hover:bg-card/80 p-8 rounded-2xl border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 ${step.color} bg-primary/[0.03] dark:bg-primary/[0.02] group-hover:scale-110 transition-transform duration-200`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold tracking-tight mb-4 text-foreground group-hover:text-primary transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground transition-colors duration-200">
                    {step.description}
                  </p>

                  {/* Items */}
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (itemIndex * 0.1) }}
                        className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors duration-200"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${step.color} opacity-70`} />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
          >
            <span>Start Your Journey</span>
            <svg 
              className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
