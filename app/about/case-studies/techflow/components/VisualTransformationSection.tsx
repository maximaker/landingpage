import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { AnimatePresence, motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

interface VisualTransformation {
  title: string;
  description: string;
  before: { image: string; caption: string };
  after: { image: string; caption: string };
  improvements: string[];
}

export default function VisualTransformationSection({ visualTransformations }: { visualTransformations: VisualTransformation[] }) {
  const [currentVisual, setCurrentVisual] = useState(0);

  return (
    <section id="transformation" className="py-32 bg-muted/50 relative scroll-mt-36">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Visual Transformation</h2>
          <p className="text-lg text-muted-foreground">
            See how we transformed the user experience through thoughtful design and attention to detail.
          </p>
        </div>

        <Tabs.Root value={String(currentVisual)} onValueChange={(value) => setCurrentVisual(Number(value))}>
          <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
            {visualTransformations.map((transform, index) => (
              <Tabs.Trigger
                key={index}
                value={String(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  currentVisual === index
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {transform.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <div className="relative">
            <AnimatePresence mode="wait">
              {visualTransformations.map((transform, index) => (
                currentVisual === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-16"
                  >
                    <div className="max-w-3xl mx-auto text-center">
                      <h3 className="text-2xl font-semibold mb-4">{transform.title}</h3>
                      <p className="text-muted-foreground">{transform.description}</p>
                    </div>
                    <div className="max-w-5xl mx-auto">
                      <BeforeAfterSlider
                        before={transform.before.image}
                        after={transform.after.image}
                        caption={`${transform.before.caption} → ${transform.after.caption}`}
                      />
                    </div>
                    <div className="max-w-3xl mx-auto">
                      <h4 className="text-sm font-medium text-primary mb-6 text-center">KEY IMPROVEMENTS</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {transform.improvements.map((improvement, i) => (
                          <div 
                            key={i} 
                            className="p-4 rounded-xl bg-muted border border-border text-foreground hover:bg-card hover:border-primary/20 transition-all"
                          >
                            {improvement}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
} 