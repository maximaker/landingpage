"use client"

import { ArrowRight, ArrowLeft, Layers, Square, Box, Triangle } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: <Layers className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />,
    title: "Digital Product",
    desc: "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
  },
  {
    icon: <Square className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />,
    title: "Web Developments",
    desc: "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
  },
  {
    icon: <Box className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />,
    title: "Branding Design",
    desc: "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
  },
  {
    icon: <Triangle className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />,
    title: "UI-UX Design",
    desc: "Live workshop where we define the main problems and challenges before building a strategic plan moving forward.",
  },
];

export function FeaturedServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 320 + 32; // w-80 (320px) + gap-8 (32px)
    container.scrollBy({
      left: dir === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <div className="text-sm tracking-widest text-primary font-semibold mb-2">OUR SPECIALIZE</div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">FEATURED</span> SERVICES.
            </h2>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0">
            <button
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:bg-muted transition"
              onClick={() => scrollBy('left')}
              aria-label="Scroll left"
              type="button"
            >
              <ArrowLeft className="w-6 h-6 text-muted-foreground" />
            </button>
            <button
              className="w-12 h-12 rounded-full bg-card flex items-center justify-center border border-border hover:bg-muted transition"
              onClick={() => scrollBy('right')}
              aria-label="Scroll right"
              type="button"
            >
              <ArrowRight className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div
            ref={scrollRef}
            className="flex gap-8 min-w-[900px] overflow-x-auto no-scrollbar"
            tabIndex={0}
            role="region"
            aria-label="Featured services cards"
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-card rounded-2xl border border-border p-8 flex flex-col justify-between hover:border-primary transition"
              >
                {service.icon}
                <div className="font-bold text-lg mb-2 text-foreground">{service.title}</div>
                <div className="text-muted-foreground mb-8 text-sm">{service.desc}</div>
                <a href="#" className="flex items-center gap-2 text-foreground font-semibold text-sm hover:text-primary transition">
                  READ MORE <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
  );
} 