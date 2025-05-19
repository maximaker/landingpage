"use client"

import { ChevronDown, ArrowRight, Plus } from "lucide-react";

const items = [
  { title: "UX Audits" },
  { title: "Design Thinking" },
  { title: "Wireframing" },
  { title: "Aesthetics" },
  { title: "Methodologies" },
];

export function AdvertisingMarketingSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <nav className="text-xs text-muted-foreground mb-8 flex items-center gap-2">
          <span>HOME</span>
          <span className="mx-1">/</span>
          <span>SERVICES</span>
          <span className="mx-1">/</span>
          <span className="text-muted-foreground">ADVERTISING AND MARKETING CAMPAIGNS</span>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <h1 className="text-4xl md:text-5xl font-light mb-10 leading-tight text-foreground">
              Advertising <span className="font-bold">and</span><br />Marketing <span className="font-bold">Campaigns</span>
            </h1>
            <div className="mb-8">
              <button className="flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                ABOUT SERVICE <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </button>
              <div className="mb-6">
                <div className="text-lg font-bold mb-1 text-foreground">Your <span className="font-bold">Approach</span><br />and <span className="font-normal">Work Specifics</span></div>
                <div className="text-muted-foreground text-sm max-w-md">
                  At our agency, we have a unique approach to web design and development. We believe in creating websites that not only look great but also perform well in terms of user experience, functionality, and search engine optimization.
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-semibold text-foreground border-b border-border pb-1 hover:text-primary transition">
                VIEW WORKS <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
          {/* Right column */}
          <div className="flex flex-col gap-2 w-full max-w-lg ml-auto">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border py-6 group cursor-pointer hover:bg-muted transition">
                <span className="text-base font-medium text-foreground">{item.title}</span>
                <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition" />
              </div>
            ))}
          </div>
        </div>
        {/* Decorative geometric shape */}
        <div className="hidden md:block absolute top-0 right-0 mt-8 mr-8 opacity-10 pointer-events-none select-none">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-border">
            <polygon points="100,10 190,60 160,190 40,190 10,60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <polyline points="100,10 100,190" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <polyline points="10,60 190,60" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
} 