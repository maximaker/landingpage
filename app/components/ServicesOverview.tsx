const SERVICES = [
  {
    name: 'Vitamin A: Awareness',
    description: 'Diagnose usability issues, uncover opportunities, and set a baseline for growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    stats: { value: '45%', label: 'Avg. Improvement' }
  },
  {
    name: 'Vitamin C: Clarity',
    description: 'Refine priorities, map user journeys, and align your vision with reality.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    ),
    stats: { value: '85%', label: 'Client Satisfaction' }
  },
  {
    name: 'Vitamin D: Direction',
    description: 'Build scalable roadmaps, create design systems, and structure your product for success.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
    stats: { value: '3x', label: 'Faster Development' }
  },
  {
    name: 'Vitamin E: Execution',
    description: 'Deliver high-quality designs, prototypes, and handoffs that bring your ideas to life.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    stats: { value: '60%', label: 'Time Saved' }
  },
  {
    name: 'Vitamin K: Continuity',
    description: 'Maintain stability with ongoing support, bug fixes, and performance tracking.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    stats: { value: '99.9%', label: 'Uptime' }
  },
  {
    name: 'Vitamin P: Progress',
    description: 'Optimize features, test solutions, and implement engagement strategies for sustained growth.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    stats: { value: '2.5x', label: 'Growth Rate' }
  },
  {
    name: 'Vitamin I: Innovation',
    description: 'Explore bold ideas, integrate emerging tech, and future-proof your product with cutting-edge solutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
      </svg>
    ),
    stats: { value: '90%', label: 'Success Rate' }
  }
]

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ServicesOverview() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
        <div className="hero-glow absolute -inset-[10px] opacity-50 bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:from-transparent dark:via-primary/10 dark:to-transparent blur-3xl transition-opacity duration-300" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm hover:bg-primary/[0.05] dark:hover:bg-primary/[0.03] transition-all duration-300"
          >
            Our Digital Vitamins
          </Badge>
          <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
            Boost your product's <span className="text-primary">health</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
            Each vitamin is carefully formulated to address specific aspects of your product's growth and sustainability.
          </p>
        </motion.div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-card/50 dark:bg-card/40 p-8 pb-20 rounded-2xl border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5"
            >
              {/* Service icon with animated background */}
              <div className="relative mb-6">
                <motion.div 
                  className="absolute -inset-2 bg-primary/[0.03] dark:bg-primary/[0.02] rounded-full blur-lg group-hover:bg-primary/[0.05] dark:group-hover:bg-primary/[0.03] transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div 
                  className="relative text-2xl text-primary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Service content */}
              <div className="flex flex-col">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                    {service.description}
                  </p>
                </div>

                {/* Stats display */}
                <motion.div 
                  className="pt-4 mt-4 border-t border-border"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">{service.stats.label}</span>
                    <motion.span 
                      className="font-medium text-primary"
                      whileHover={{ scale: 1.1 }}
                    >
                      {service.stats.value}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Hover action - positioned absolutely */}
                <motion.div 
                  className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  initial={{ y: 10 }}
                  whileHover={{ y: 0 }}
                >
                  <Button 
                    variant="link" 
                    className="group/btn text-primary p-0 hover:no-underline"
                  >
                    <span>Learn more</span>
                    <motion.svg 
                      className="w-4 h-4 ml-2" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </motion.svg>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-lg transition-all duration-200 rounded-full px-8 py-6 text-lg"
          >
            <span>Explore all vitamins</span>
            <motion.svg 
              className="w-5 h-5 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </motion.svg>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
