import { Heading, Subheading, Body } from "@/components/ui/typography";

const EXPERTISE_ITEMS = [
  {
    title: "Figma Design",
    description: "We create stunning designs for your website and mobile applications using Figma.",
    stats: [
      { value: "150+", label: "Projects" },
      { value: "10k+", label: "Downloads" }
    ],
    icon: (
      <svg className="w-32 h-32 text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="20" y="20" width="60" height="60" rx="8"/>
        <circle cx="35" cy="35" r="5"/>
        <circle cx="65" cy="35" r="5"/>
        <circle cx="35" cy="65" r="5"/>
        <circle cx="65" cy="65" r="5"/>
        <path d="M50 20v60" strokeDasharray="4 4"/>
        <path d="M20 50h60" strokeDasharray="4 4"/>
      </svg>
    ),
    tools: ["Figma", "Design Systems", "Prototyping"]
  },
  {
    title: "Illustration",
    description: "We create stunning illustrations for your website and mobile applications.",
    stats: [
      { value: "50+", label: "Illustrations" },
      { value: "100%", label: "Custom Work" }
    ],
    icon: (
      <svg className="w-32 h-32 text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M30 70c0-20 20-40 40-40" strokeLinecap="round"/>
        <path d="M70 70c0-20-20-40-40-40" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="10"/>
        <path d="M20 80l60-60" strokeLinecap="round"/>
        <path d="M20 20l60 60" strokeLinecap="round"/>
      </svg>
    ),
    tools: ["Vector Art", "3D Design", "Animation"]
  },
  {
    title: "Inspiration",
    description: "We provide inspiration for your website and mobile applications.",
    stats: [
      { value: "24/7", label: "Support" },
      { value: "∞", label: "Ideas" }
    ],
    icon: (
      <svg className="w-32 h-32 text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M50 20v60" strokeLinecap="round"/>
        <path d="M20 50h60" strokeLinecap="round"/>
        <circle cx="50" cy="50" r="30" strokeDasharray="4 4"/>
        <circle cx="50" cy="50" r="15"/>
        <path d="M35 35l30 30M35 65l30-30" strokeLinecap="round"/>
      </svg>
    ),
    tools: ["Moodboards", "Research", "Trends"]
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile solutions that deliver exceptional user experiences.",
    stats: [
      { value: "100+", label: "Apps" },
      { value: "4.8", label: "Avg Rating" }
    ],
    icon: (
      <svg className="w-32 h-32 text-primary/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="20" y="20" width="25" height="45" rx="4"/>
        <rect x="55" y="35" width="25" height="45" rx="4"/>
        <path d="M32.5 75l17.5 5 17.5-5" strokeLinecap="round"/>
        <circle cx="32.5" cy="30" r="2"/>
        <circle cx="67.5" cy="45" r="2"/>
      </svg>
    ),
    tools: ["React Native", "Flutter", "Native Apps"]
  }
]

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function OurExpertise() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16 lg:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Our Expertise
          </Badge>
          <Heading as="h2" size="4xl" className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
            Mastering Digital <span className="text-primary">Craft</span>
          </Heading>
          <Body size="lg" className="lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
            We combine strategic thinking with cutting-edge technology to deliver solutions that set you apart from the competition.
          </Body>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
          {EXPERTISE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-card/50 dark:bg-card/40 backdrop-blur-sm p-8 rounded-3xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-200"
            >
              {/* Content wrapper */}
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <Subheading as="h3" className="text-2xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </Subheading>
                    <Body className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {item.description}
                    </Body>
                  </div>
                  <div className="relative flex-shrink-0 ml-6">
                    <div className="absolute inset-0 bg-primary/[0.03] dark:bg-primary/[0.02] rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors duration-200" />
                    {item.icon}
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {item.stats.map((stat, statIndex) => (
                    <div 
                      key={statIndex}
                      className="bg-card/50 dark:bg-card/40 backdrop-blur-sm group-hover:bg-primary/[0.03] dark:group-hover:bg-primary/[0.02] rounded-2xl p-4 transition-colors duration-200"
                    >
                      <Heading as="div" size="2xl" className="text-2xl font-bold text-primary">{stat.value}</Heading>
                      <Body as="div" size="sm" className="text-sm text-muted-foreground">{stat.label}</Body>
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="mt-auto">
                  <div className="text-sm font-medium text-muted-foreground mb-3">Tools & Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/[0.03] dark:bg-primary/[0.02] text-primary group-hover:bg-primary/10 backdrop-blur-sm transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Contact Us Card */}
          <div className="md:col-span-2">
            <div className="bg-card/50 dark:bg-card/40 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-200 group">
              <div className="max-w-2xl mx-auto text-center">
                <Subheading as="h3" className="text-2xl sm:text-3xl font-semibold mb-4">Ready to elevate your digital presence?</Subheading>
                <Body size="lg" className="text-lg text-muted-foreground mb-8">Let's discuss how our expertise can help your product thrive in today's competitive landscape.</Body>
                <Button 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow transition-all duration-200 rounded-full px-6"
                >
                  <span>Schedule a consultation</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
