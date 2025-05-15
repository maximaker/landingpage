import { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import { AnimatePresence, motion } from 'framer-motion';
import { Users, ChevronRight } from 'lucide-react';

interface Persona {
  name: string;
  role: string;
  age: string;
  experience: string;
  pain_points: string[];
  goals: string[];
  quote: string;
}

interface Audience {
  type: string;
  persona: Persona;
}

export default function TargetAudienceSection({ targetAudience }: { targetAudience: Audience[] }) {
  const [activePersona, setActivePersona] = useState(0);

  return (
    <section className="py-24 bg-muted/50 relative">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Target Audience</h2>
          <p className="text-lg text-muted-foreground">
            Understanding the diverse needs of our professional users.
          </p>
        </div>

        <div className="mb-12">
          <Tabs.Root value={String(activePersona)} onValueChange={(value) => setActivePersona(Number(value))}>
            <Tabs.List className="flex flex-wrap justify-center gap-4 mb-12">
              {targetAudience.map((audience, index) => (
                <Tabs.Trigger
                  key={index}
                  value={String(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activePersona === index
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {audience.type}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="relative">
              <AnimatePresence mode="wait">
                {targetAudience.map((audience, index) => (
                  activePersona === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-[1fr,1.5fr] gap-12 items-start"
                    >
                      {/* Persona Card */}
                      <div className="bg-card rounded-2xl border border-border p-8">
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-10 h-10 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold mb-2">{audience.persona.name}</h3>
                            <p className="text-muted-foreground text-lg">{audience.persona.role}</p>
                          </div>
                        </div>
                        {/* Professional Details */}
                        <div className="space-y-8">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <div className="text-sm text-muted-foreground">Age</div>
                              <div className="text-lg font-medium">{audience.persona.age}</div>
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm text-muted-foreground">Experience</div>
                              <div className="text-lg font-medium">{audience.persona.experience}</div>
                            </div>
                          </div>
                          <div className="h-px bg-border" />
                          <div className="relative">
                            <div className="absolute -top-3 -left-1 text-4xl text-primary/20">"</div>
                            <blockquote className="text-lg italic text-muted-foreground pl-6 relative">
                              {audience.persona.quote}
                              <div className="absolute -bottom-3 -right-1 text-4xl text-primary/20">"</div>
                            </blockquote>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                            <h4 className="text-sm font-medium text-primary mb-4">Personality Profile</h4>
                            <div className="space-y-6">
                              {audience.type === "Independent consultants" && (
                                <>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>INTROVERT</span>
                                      <span>EXTROVERT</span>
                                    </div>
                                    <div className="h-[2px] bg-border/50 rounded-full relative">
                                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '65%' }} />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>INTUITION</span>
                                      <span>SENSING</span>
                                    </div>
                                    <div className="h-[2px] bg-border/50 rounded-full relative">
                                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '40%' }} />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>FEELING</span>
                                      <span>THINKING</span>
                                    </div>
                                    <div className="h-[2px] bg-border/50 rounded-full relative">
                                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '80%' }} />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                      <span>PERCEIVING</span>
                                      <span>JUDGING</span>
                                    </div>
                                    <div className="h-[2px] bg-border/50 rounded-full relative">
                                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-sm transition-all" style={{ left: '70%' }} />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Tabs Section (Accordion) */}
                      <div className="bg-card rounded-2xl border border-border p-8">
                        <Accordion.Root
                          type="single"
                          collapsible
                          className="space-y-4 divide-y divide-border"
                          defaultValue="motivations-goals"
                        >
                          <Accordion.Item value="motivations-goals" className="pt-4">
                            <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                              Motivations & Goals
                              <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pt-4 px-2">
                              <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-medium mb-2">Motivations</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Desire to deliver high-quality solutions",
                                      "Need for efficient project management",
                                      "Interest in staying competitive",
                                      "Drive for professional growth",
                                      "Commitment to client satisfaction"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Goals</h4>
                                  <div className="space-y-2">
                                    {audience.persona.goals.map((goal, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {goal}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                          <Accordion.Item value="pain-points-frustrations" className="pt-4">
                            <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                              Pain Points & Frustrations
                              <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pt-4 px-2">
                              <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-medium mb-2">Key Pain Points</h4>
                                  <div className="space-y-2">
                                    {audience.persona.pain_points.map((point, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {point}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Frustrations</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Complex, hard-to-use tools",
                                      "Time wasted on administrative tasks",
                                      "Difficulty tracking project progress",
                                      "Lack of integrated solutions",
                                      "Communication barriers with clients"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                          <Accordion.Item value="behaviors" className="pt-4">
                            <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                              Behaviors
                              <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pt-4 px-2">
                              <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-medium mb-2">Daily Behaviors</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Project planning and execution",
                                      "Client communication and reporting",
                                      "Resource allocation and tracking",
                                      "Performance monitoring",
                                      "Documentation and knowledge sharing"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Work Habits</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Regular client meetings",
                                      "Time tracking and billing",
                                      "Project status updates",
                                      "Professional development",
                                      "Network building"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                          <Accordion.Item value="scenarios-ideal" className="pt-4">
                            <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                              Usage & Ideal Experience
                              <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pt-4 px-2">
                              <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-medium mb-2">Usage Scenarios</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Project planning and execution",
                                      "Client communication and reporting",
                                      "Resource allocation and tracking",
                                      "Performance monitoring",
                                      "Documentation and knowledge sharing"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Ideal Experience</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Seamless workflow integration",
                                      "Intuitive user interface",
                                      "Real-time collaboration features",
                                      "Automated routine tasks",
                                      "Comprehensive analytics"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                          <Accordion.Item value="beliefs-expectations" className="pt-4">
                            <Accordion.Trigger className="flex justify-between w-full px-6 py-4 text-sm font-medium transition-all hover:text-foreground data-[state=open]:text-foreground">
                              Beliefs & Expectations
                              <ChevronRight className="w-4 h-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                            </Accordion.Trigger>
                            <Accordion.Content className="pt-4 px-2">
                              <div className="grid grid-cols-2 gap-8">
                                <div>
                                  <h4 className="font-medium mb-2">Beliefs</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Quality work leads to long-term success",
                                      "Continuous learning is essential",
                                      "Client relationships are paramount",
                                      "Technology should enhance, not complicate",
                                      "Efficiency drives profitability"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <h4 className="font-medium mb-2">Expectations</h4>
                                  <div className="space-y-2">
                                    {audience.type === "Independent consultants" && [
                                      "Clear and timely communication",
                                      "Reliable and intuitive tools",
                                      "Visible return on investment",
                                      "Professional growth opportunities",
                                      "Streamlined workflow solutions"
                                    ].map((item, i) => (
                                      <div key={i} className="text-muted-foreground hover:text-foreground transition-colors">
                                        • {item}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </Accordion.Content>
                          </Accordion.Item>
                        </Accordion.Root>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
} 