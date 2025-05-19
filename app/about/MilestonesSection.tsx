import { motion } from 'framer-motion';
import { MILESTONES } from './data';

export function MilestonesSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2018, we set out with a clear mission: to help businesses transform their digital products into powerful tools for growth. We believe that every digital product has the potential to make a significant impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journey has been driven by a passion for innovation and a commitment to excellence. We've grown from a small team of dedicated experts to a diverse group of specialists, each bringing unique perspectives and skills to our mission.
            </p>
          </div>
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-12">
                {MILESTONES.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary transform -translate-x-1/2" />
                    <div className="text-sm text-primary font-medium mb-1">
                      {milestone.year}
                    </div>
                    <div className="font-medium mb-1">
                      {milestone.title}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {milestone.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 