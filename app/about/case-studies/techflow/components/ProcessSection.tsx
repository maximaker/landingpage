import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Phase {
  phase: string;
  title: string;
  duration: string;
  activities: string[];
  deliverables: string[];
}

export default function ProcessSection({ phases, getPhaseItems }: { phases: Phase[]; getPhaseItems: (phase: any) => string[] }) {
  const [activeTab, setActiveTab] = useState(phases[0].phase);

  return (
    <section id="process" className="py-24 bg-muted/50 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-base text-muted-foreground">
            A systematic approach to transforming professional phone consultations through user-centric design and agile development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Navigation */}
          <div className="flex flex-col items-center mb-12">
            {/* Progress Bar */}
            <div className="w-full max-w-3xl mx-auto relative">
              {/* Background Track */}
              <div className="h-1 bg-border/30 rounded-full">
                {/* Progress Fill */}
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ 
                    width: `${(phases.findIndex(p => p.phase === activeTab) / (phases.length - 1)) * 100}%` 
                  }}
                />
              </div>

              {/* Phase Markers */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(phase.phase)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    style={{ left: `${(index / (phases.length - 1)) * 100}%` }}
                    aria-label={`View ${phase.title}`}
                    aria-current={activeTab === phase.phase ? 'step' : undefined}
                  >
                    {/* Marker Dot */}
                    <div 
                      className={
                        `w-6 h-6 rounded-full border-4 transition-all duration-300 ` +
                        (activeTab === phase.phase 
                          ? 'bg-primary border-primary scale-100' 
                          : 'bg-background border-border hover:border-primary/50 scale-75 hover:scale-90')
                      }
                    />
                    {/* Phase Label */}
                    <div className={
                      `absolute top-8 left-1/2 -translate-x-1/2 w-32 text-center transition-all duration-300 ` +
                      (activeTab === phase.phase 
                        ? 'text-primary font-medium translate-y-0 opacity-100' 
                        : 'text-muted-foreground translate-y-1 opacity-70 group-hover:opacity-100')
                    }>
                      <div className="text-sm font-medium mb-1 whitespace-nowrap">
                        {phase.title.split('. ')[1]}
                      </div>
                      <div className="text-xs opacity-70">
                        {phase.duration}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-20">
              <button
                onClick={() => {
                  const currentIndex = phases.findIndex(p => p.phase === activeTab)
                  if (currentIndex > 0) {
                    setActiveTab(phases[currentIndex - 1].phase)
                  }
                }}
                disabled={activeTab === phases[0].phase}
                className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous phase"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const currentIndex = phases.findIndex(p => p.phase === activeTab)
                  if (currentIndex < phases.length - 1) {
                    setActiveTab(phases[currentIndex + 1].phase)
                  }
                }}
                disabled={activeTab === phases[phases.length - 1].phase}
                className="p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next phase"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Phase Content */}
          <div className="relative mt-8">
            <AnimatePresence mode="wait">
              {phases.map((phase) => (
                activeTab === phase.phase && (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-card rounded-xl border border-border shadow-lg"
                  >
                    <div className="p-8">
                      <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                          <div>
                            <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">Activities</h4>
                            <div className="space-y-4">
                              {phase.activities.map((activity, i) => (
                                <div 
                                  key={i} 
                                  className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                                >
                                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary/40 group-hover:text-primary transition-colors" />
                                  <span>{activity}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">Deliverables</h4>
                            <div className="space-y-4">
                              {phase.deliverables.map((deliverable, i) => (
                                <div 
                                  key={i} 
                                  className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors"
                                >
                                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary/40 group-hover:text-primary transition-colors" />
                                  <span>{deliverable}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium uppercase tracking-wider text-primary mb-6">
                            {phase.phase === 'discovery' ? 'Key Findings' : 
                             phase.phase === 'planning' ? 'Improvements' :
                             phase.phase === 'design' ? 'Improvements' : 
                             'Technical Details'}
                          </h4>
                          <div className="grid gap-4">
                            {getPhaseItems(phase).map((item, i) => (
                              <div 
                                key={i} 
                                className="p-4 rounded-lg bg-muted/50 border border-border text-muted-foreground hover:text-foreground hover:border-border transition-colors"
                              >
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
} 