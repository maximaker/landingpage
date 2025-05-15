import React from 'react'

interface Learnings {
  successes: string[]
  challenges: string[]
  insights: string[]
}

interface LearningsSectionProps {
  learnings: Learnings
}

const LearningsSection: React.FC<LearningsSectionProps> = ({ learnings }) => (
  <section id="learnings" className="py-32 relative scroll-mt-36">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-16 text-center">Key Learnings</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">What Worked Well</h3>
          <div className="space-y-4">
            {learnings.successes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Challenges Faced</h3>
          <div className="space-y-4">
            {learnings.challenges.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h3 className="text-xl font-semibold">Key Insights</h3>
          <div className="space-y-4">
            {learnings.insights.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-muted-foreground group hover:text-foreground transition-colors">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/20 mt-2 group-hover:bg-foreground/40 transition-colors" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default LearningsSection 