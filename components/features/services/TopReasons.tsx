import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading, Subheading, Body } from "../../../app/components/ui/typography";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

const ExpertCareIllustration: React.FC = () => (
  <svg className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" className="fill-background"/>
    <circle cx="200" cy="150" r="80" className="fill-primary/10"/>
    <path d="M160 150C160 127.909 177.909 110 200 110C222.091 110 240 127.909 240 150C240 172.091 222.091 190 200 190" 
      className="stroke-primary" strokeWidth="4" strokeLinecap="round"/>
    <path d="M200 190C177.909 190 160 172.091 160 150" 
      className="stroke-primary" strokeWidth="4" strokeLinecap="round" strokeDasharray="4 4"/>
    <circle cx="200" cy="150" r="20" className="fill-primary"/>
    <path d="M190 150L197 157L210 144" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <g>
      <circle cx="140" cy="100" r="8" className="fill-primary/20"/>
      <circle cx="260" cy="200" r="12" className="fill-primary/20"/>
      <circle cx="280" cy="120" r="10" className="fill-primary/20"/>
    </g>
  </svg>
);

const TrackRecordIllustration: React.FC = () => (
  <svg className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" className="fill-background"/>
    <path d="M100 250L180 180L240 220L300 100" className="stroke-primary" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="180" cy="180" r="8" className="fill-primary"/>
    <circle cx="240" cy="220" r="8" className="fill-primary"/>
    <circle cx="300" cy="100" r="8" className="fill-primary"/>
    <path d="M90 100L90 250L340 250" stroke="currentColor" strokeWidth="2"/>
    <g>
      <rect x="140" y="180" width="30" height="60" className="fill-primary/20"/>
      <rect x="180" y="160" width="30" height="80" className="fill-primary/20"/>
      <rect x="220" y="140" width="30" height="100" className="fill-primary/20"/>
    </g>
  </svg>
);

const LongTermSupportIllustration: React.FC = () => (
  <svg className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" className="fill-background"/>
    <circle cx="200" cy="150" r="80" className="fill-primary/10"/>
    <path d="M200 90V150L240 190" className="stroke-primary" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="200" cy="150" r="70" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
    <g transform="translate(160,110)">
      <circle cx="40" cy="40" r="30" fill="none" className="stroke-primary" strokeWidth="4"/>
      <path d="M25 40L35 50L55 30" className="stroke-primary" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <g>
      <circle cx="140" cy="100" r="8" className="fill-primary/20"/>
      <circle cx="260" cy="200" r="12" className="fill-primary/20"/>
      <circle cx="280" cy="120" r="10" className="fill-primary/20"/>
    </g>
  </svg>
);

const tabs: Tab[] = [
  {
    value: "expert-care",
    label: "Expert Care",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7h-9M20 11h-9M20 15h-9M3 7h2M3 11h2M3 15h2"/>
      </svg>
    ),
    content: {
      badge: "Proven Expertise",
      title: "Expert care for your digital product",
      description: "Our team of seasoned professionals brings years of experience in product development, design, and optimization to ensure your success.",
      buttonText: "Meet our experts"
    }
  },
  {
    value: "track-record",
    label: "Track Record",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20v-6M6 20V10M18 20V4"/>
      </svg>
    ),
    content: {
      badge: "Success Stories",
      title: "Proven track record of success",
      description: "With over 100+ successful projects and a 95% client satisfaction rate, we have the experience to take your product to the next level.",
      buttonText: "View case studies"
    }
  },
  {
    value: "long-term",
    label: "Long-term Support",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="m9 12 2 2 4-4"/>
      </svg>
    ),
    content: {
      badge: "Continuous Support",
      title: "Long-term partnership focused",
      description: "We're committed to your long-term success with ongoing support, maintenance, and strategic guidance to help your product evolve.",
      buttonText: "Learn about support"
    }
  }
];

export function TopReasons() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          className="flex flex-col items-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Why Choose Us
          </Badge>
          <Heading size="4xl" className="sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight mb-6">
            Why leading ventures trust <span className="text-primary">Digital Vitamins</span>
          </Heading>
          <Body size="lg" className="text-muted-foreground max-w-[520px] mb-8 lg:mb-12 leading-relaxed">
            Discover how our expertise, track record, and commitment to long-term success make us the perfect partner for your digital journey.
          </Body>
        </motion.div>

        <div>
          <Tabs defaultValue={tabs[0].value} className="mt-12">
            <TabsList className="flex flex-row justify-center gap-2 w-full mb-8 bg-transparent p-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                    text-sm sm:text-base font-medium
                    text-muted-foreground
                    hover:text-foreground
                    data-[state=active]:text-primary data-[state=active]:bg-white dark:data-[state=active]:bg-white/90
                    rounded-lg
                    transition-all duration-200"
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">
                    {tab.value === 'expert-care' ? 'Care' : tab.value === 'track-record' ? 'Trust' : 'Support'}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="relative rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 p-8 lg:p-16 shadow-sm hover:shadow-lg dark:hover:shadow-primary/5 backdrop-blur-sm transition-all duration-500 group/card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              {tabs.map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16 group relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex flex-col gap-6 transform transition-transform duration-500 group-hover:translate-x-2">
                      <Badge 
                        variant="secondary" 
                        className="w-fit px-4 py-2 bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm transform transition-transform duration-300 hover:scale-105"
                      >
                        {tab.content.badge}
                      </Badge>
                      <Subheading className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                        {tab.content.title}
                      </Subheading>
                      <Body size="lg" className="text-muted-foreground leading-relaxed">
                        {tab.content.description}
                      </Body>
                      <Button 
                        className="mt-4 w-full sm:w-auto px-6 py-3
                          bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {tab.content.buttonText}
                      </Button>
                    </div>
                  </motion.div>
                  <div className="relative w-full max-w-lg mx-auto transform transition-transform duration-500 group-hover:translate-x-2">
                    {tab.value === 'expert-care' && <ExpertCareIllustration />}
                    {tab.value === 'track-record' && <TrackRecordIllustration />}
                    {tab.value === 'long-term' && <LongTermSupportIllustration />}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
