"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
// If you have Heading/Body components, import them:
// import { Heading, Body } from "@/components/ui/typography";

const cards = [
  {
    key: 0,
    icon: <ArrowRight className="w-12 h-12 mx-auto mb-6 text-primary" />,
    title: (
      <>
        Professional Growth<br />Partner Guidance
      </>
    ),
    desc: "Upgrade your startup with Veza Digital's experts for growth. Feel the difference and experience the support on your path to success.",
    button: true,
  },
  {
    key: 1,
    icon: <ArrowRight className="w-12 h-12 mx-auto mb-6 text-primary" />,
    title: (
      <>
        End-to-end<br />Webflow<br />Services
      </>
    ),
    button: false,
  },
  {
    key: 2,
    icon: <ArrowRight className="w-12 h-12 mx-auto mb-6 text-primary" />,
    title: (
      <>
        Growth<br />Marketing<br />Solutions
      </>
    ),
    button: false,
  },
];

export function HowWeDoItSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background font-sans">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 font-display tracking-tight">How We Do It</h2>
        <div className="flex flex-col md:flex-row gap-8 group">
          {cards.map((card, idx) => {
            const grow =
              hovered === null
                ? idx === 0
                  ? "md:basis-1/2 md:grow md:shrink"
                  : "md:basis-1/4 md:grow md:shrink"
                : hovered === idx
                ? "md:basis-1/2 md:grow md:shrink"
                : "md:basis-1/4 md:grow md:shrink";
            return (
              <Card
                key={card.key}
                className={
                  `transition-all duration-700 ease-[cubic-bezier(.4,0,.2,1)] rounded-2xl p-8 md:p-10 flex flex-col min-h-[100px] aspect-[3/4] border border-border shadow-lg bg-card text-card-foreground justify-between cursor-pointer focus-within:z-20 hover:z-20 relative ${grow}` +
                  (hovered === idx ? " ring-2 ring-primary/40" : "")
                }
                tabIndex={0}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(idx)}
                onBlur={() => setHovered(null)}
                aria-label={typeof card.title === "string" ? card.title : undefined}
              >
                <div>
                  {card.icon}
                  <div className="text-xl md:text-2xl font-bold leading-tight mb-6 text-foreground font-display tracking-tight">
                    {card.title}
                  </div>
                  {card.desc && (
                    <div className="text-base text-muted-foreground mb-10 font-normal font-sans">
                      {card.desc}
                    </div>
                  )}
                </div>
                {card.button && (
                  <Button className="rounded-full px-8 py-4 text-base font-semibold w-fit mt-auto flex items-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
} 