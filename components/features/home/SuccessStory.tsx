import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Subheading, Body } from "@/components/ui/typography"

interface SuccessStoryProps {
  company: {
    name: string
    type: string
    icon: React.ReactNode
  }
  challenge: string
  vitamins: Array<{
    name: string
    link: string
  }>
  outcomes: Array<{
    label: string
    value: string
  }>
}

export function SuccessStory({ company, challenge, vitamins, outcomes }: SuccessStoryProps) {
  return (
    <div className="bg-card p-8 rounded-xl border border-border transition-colors duration-200 scroll-animation scroll-delay-1">
      {/* Company Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center transition-colors duration-200">
          <div className="w-6 h-6 text-primary">{company.icon}</div>
        </div>
        <div>
          <Body className="font-semibold text-foreground">{company.name}</Body>
          <Body as="div" size="sm" className="text-sm text-muted-foreground">{company.type}</Body>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <Subheading as="h4" className="text-sm font-medium text-muted-foreground mb-2">Challenge</Subheading>
        <Body className="text-foreground">{challenge}</Body>
      </div>

      {/* Prescription */}
      <div className="mb-6">
        <Subheading as="h4" className="text-sm font-medium text-muted-foreground mb-2">Prescription</Subheading>
        <div className="flex flex-wrap gap-2">
          {vitamins.map((vitamin, index) => (
            <Link
              key={index}
              href={vitamin.link}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 dark:bg-primary/20 hover:bg-primary/10 dark:hover:bg-primary/30 text-primary rounded-full text-sm font-medium transition-colors duration-200"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              {vitamin.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Outcome */}
      <div className="group">
        <div className="h-[52px] overflow-hidden transition-all duration-300 group-hover:h-auto">
          <Subheading as="h4" className="text-sm font-medium text-muted-foreground mb-2">Outcome</Subheading>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center justify-between">
                <Body as="span" className="text-foreground">{outcome.label}</Body>
                <Body as="span" className="text-primary font-semibold">{outcome.value}</Body>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hover indicator */}
        <div className="flex items-center justify-center mt-2 text-muted-foreground text-sm">
          <Body as="span" size="sm" className="group-hover:hidden text-muted-foreground text-sm">Hover to see outcomes →</Body>
          <Body as="span" size="sm" className="hidden group-hover:block text-muted-foreground text-sm">↑ View less</Body>
        </div>
      </div>

      <Button variant="link" className="text-primary hover:text-primary/90 p-0 transition-colors duration-200">
        Read case study →
      </Button>
    </div>
  )
}