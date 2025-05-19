import { motion } from 'framer-motion';
import { EXPERTISE } from './data';
import { Code, Zap, Heart, Shield } from 'lucide-react';

const ICONS = {
  Code: <Code className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
};

export function ExpertiseSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive capabilities that drive digital transformation
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {EXPERTISE.map((area, index) => (
            <motion.div
              key={area.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card/50 rounded-2xl border border-border hover:border-primary/20 p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary transition-colors duration-200 group-hover:bg-primary/20">
                  {ICONS[area.icon as keyof typeof ICONS]}
                </div>
                <h3 className="text-xl font-semibold">{area.area}</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {area.description}
              </p>
              <ul className="space-y-3">
                {area.capabilities.map((capability, i) => (
                  <li 
                    key={i}
                    className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 