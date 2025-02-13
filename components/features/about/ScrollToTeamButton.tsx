"use client"

import { Button } from "@/components/ui/button"

export function ScrollToTeamButton() {
  return (
    <Button 
      size="lg"
      className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
      onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}
    >
      Meet the team
      <svg 
        className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </Button>
  )
}