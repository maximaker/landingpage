import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
          <div className="font-semibold text-foreground">{company.name}</div>
          <div className="text-sm text-muted-foreground">{company.type}</div>
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Challenge</h4>
        <p className="text-foreground">{challenge}</p>
      </div>

      {/* Prescription */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-muted-foreground mb-2">Prescription</h4>
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
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Outcome</h4>
          <div className="space-y-4">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-foreground">{outcome.label}</span>
                <span className="text-primary font-semibold">{outcome.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hover indicator */}
        <div className="flex items-center justify-center mt-2 text-muted-foreground text-sm">
          <span className="group-hover:hidden">Hover to see outcomes →</span>
          <span className="hidden group-hover:block">↑ View less</span>
        </div>
      </div>

      <Button variant="link" className="text-primary hover:text-primary/90 p-0 transition-colors duration-200">
        Read case study →
      </Button>
    </div>
  )
}