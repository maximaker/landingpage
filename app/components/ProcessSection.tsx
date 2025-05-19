"use client"

const steps = [
  {
    number: 1,
    title: "Define the problem",
    desc: "Why people don't shop in IKEA's online store?",
  },
  {
    number: 2,
    title: "Brainstorm",
    desc: "What can we do to change this?",
  },
  {
    number: 3,
    title: "Interviews",
    desc: "Interview IKEA's employees",
  },
  {
    number: 4,
    title: "Solution",
    desc: "Find a solution: Assist-Bot concept",
  },
  {
    number: 5,
    title: "Scenario",
    desc: "Run and evaluate a test scenario of buying a sofa",
  },
  {
    number: 6,
    title: "Visual Design",
    desc: "Design & visualise the Assist-Bot experience",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8">
          {/* Left column */}
          <div className="flex flex-col gap-24">
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <span className="absolute left-0 top-0 text-xs text-muted-foreground tracking-widest rotate-[-90deg] origin-left md:origin-top-left md:top-1/2 md:-translate-y-1/2 md:left-[-60px]">PROCESS</span>
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>1</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">1</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Define the problem</div>
                  <div className="text-muted-foreground text-base">Why people don't shop in IKEA's online store?</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>4</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">4</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Solution</div>
                  <div className="text-muted-foreground text-base">Find a solution: Assist-Bot concept</div>
                </div>
              </div>
            </div>
          </div>
          {/* Center column */}
          <div className="flex flex-col items-center justify-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 md:mt-0 text-foreground">
              <span className="block w-8 h-1 bg-primary mx-auto mb-4"></span>
              Process
            </h2>
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>2</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">2</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Brainstorm</div>
                  <div className="text-muted-foreground text-base">What can we do to change this?</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>5</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">5</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Scenario</div>
                  <div className="text-muted-foreground text-base">Run and evaluate a test scenario of buying a sofa</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-24">
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>3</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">3</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Interviews</div>
                  <div className="text-muted-foreground text-base">Interview IKEA's employees</div>
                </div>
              </div>
            </div>
            <div className="relative min-h-[180px] flex flex-col justify-center">
              <div className="relative flex items-center gap-6">
                <span className="absolute left-0 -top-10 text-[96px] font-bold text-muted-foreground/10 select-none z-0 pointer-events-none" style={{lineHeight: 1}}>6</span>
                <span className="relative z-10 flex items-center justify-center w-12 h-12 aspect-square rounded-full bg-primary text-primary-foreground font-bold text-lg border-4 border-primary/20 shadow-md">6</span>
                <div className="ml-16 relative z-10">
                  <div className="font-bold uppercase text-sm mb-1 text-foreground">Visual Design</div>
                  <div className="text-muted-foreground text-base">Design & visualise the Assist-Bot experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 