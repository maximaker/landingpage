"use client"

import { FileText, UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactNextStepsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row gap-12">
        {/* Left column */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What will be next step?</h2>
          <p className="mb-8 text-muted-foreground text-lg">You are one step closer to build your perfect product</p>
          <ol className="relative border-l-2 border-border pl-6 space-y-8">
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold">1</span>
              <div>
                <div className="font-semibold text-foreground mb-1">We'll prepare a proposal</div>
                <div className="text-muted-foreground text-sm">Required scope, timeline and apr. price will be included if you provide us with detail information about a project.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold">2</span>
              <div>
                <div className="font-semibold text-foreground mb-1">Together we discuss it</div>
                <div className="text-muted-foreground text-sm">Let's get acquainted and discuss all the possible variants and options. Google Hangouts or Skype usually works great.</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-primary text-primary font-bold">3</span>
              <div>
                <div className="font-semibold text-foreground mb-1">Let's start building</div>
                <div className="text-muted-foreground text-sm">When the contract is signed, and all goals are set we can start the first sprint.</div>
              </div>
            </li>
          </ol>
        </div>

        {/* Right column - Contact form */}
        <div className="md:w-1/2 bg-card rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-border">
          {/* Info box */}
          <div className="flex items-center gap-4 bg-muted rounded-lg p-4 mb-2">
            <FileText className="w-8 h-8 text-primary" />
            <span className="text-foreground text-lg">Write us a few words about your project and we'll prepare a proposal for you within <span className="font-bold">24 hours</span>.</span>
          </div>
          {/* Form fields */}
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
              <input type="email" placeholder="Your e-mail" className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
              <input type="text" placeholder="Company" className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
              <input type="text" placeholder="Apr. budget" className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition" />
            </div>
            <label className="text-foreground mt-2">Optional</label>
            <textarea placeholder="Project details" className="w-full rounded-lg border border-border bg-muted px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition min-h-[100px]" />
            {/* File upload dropzone */}
            <div className="flex items-center gap-4 border-2 border-dashed border-border rounded-lg p-4 bg-muted cursor-pointer">
              <UploadCloud className="w-8 h-8 text-primary" />
              <span className="text-muted-foreground">DROP IT LIKE IT'S HOT</span>
            </div>
            <Button type="submit" className="mt-2 font-semibold py-3 rounded-lg shadow-md">Send</Button>
          </form>
          <div className="text-center text-muted-foreground text-sm mt-2">
            If you need to have a DNA first, just contact us at <a href="mailto:contact@materio.co" className="font-semibold text-foreground underline">contact@materio.co</a>
          </div>
        </div>
      </div>
    </section>
  );
} 