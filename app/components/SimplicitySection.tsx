"use client"

import { Phone, Ruler, PenTool, Box } from "lucide-react";

export function SimplicitySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-foreground">
              Simplicity Is The<br />Ultimate Sophistication
            </h2>
            <p className="text-xl mb-6 text-muted-foreground">
              We know that good design mean that<br />good business.
            </p>
            <p className="mb-8 text-muted-foreground max-w-lg">
              We help our client succeed by creating identities, digital experiences, and printmaterials that communicate clearly, achieve marketing goals & look fantastic. Lorem uispum dolor sit amert tunoer poea opefse ceefo goipully.
            </p>
            <div className="mb-2 text-muted-foreground">If you're hurry, quick call for us.</div>
            <div className="flex items-center gap-4 mt-2">
              <div className="bg-primary rounded-full p-3 flex items-center justify-center">
                <Phone className="text-primary-foreground w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Hotline 24/7</div>
                <div className="text-lg font-semibold text-foreground">+65 - 3002 56 56 376</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="grid gap-6">
            <div className="border border-border rounded-xl p-6 flex items-center justify-between bg-card">
              <div>
                <div className="text-2xl font-semibold mb-1 text-foreground">Arch & interior</div>
                <div className="text-muted-foreground mb-3">We bring the magic in to Building & Interior</div>
                <div className="font-bold text-xs tracking-wider text-primary">250 PROJECTS</div>
              </div>
              <Ruler className="w-10 h-10 text-primary" />
            </div>
            <div className="border border-border rounded-xl p-6 flex items-center justify-between bg-card">
              <div>
                <div className="text-2xl font-semibold mb-1 text-foreground">Design</div>
                <div className="text-muted-foreground mb-3">Creative design with digital products</div>
                <div className="font-bold text-xs tracking-wider text-primary">80 PROJECTS</div>
              </div>
              <PenTool className="w-10 h-10 text-primary" />
            </div>
            <div className="border border-border rounded-xl p-6 flex items-center justify-between bg-card">
              <div>
                <div className="text-2xl font-semibold mb-1 text-foreground">Products</div>
                <div className="text-muted-foreground mb-3">We create special products and selling it</div>
                <div className="font-bold text-xs tracking-wider text-primary">350 PRODUCTS</div>
              </div>
              <Box className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 