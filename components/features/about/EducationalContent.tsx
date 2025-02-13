'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const LEARNING_PATHS = [
  {
    title: 'Product Development Fundamentals',
    description: 'Master the basics of modern product development',
    duration: '4 weeks',
    modules: [
      { title: 'Understanding User-Centered Design', duration: '1 week' },
      { title: 'Agile Development Principles', duration: '1 week' },
      { title: 'Product Strategy & Roadmapping', duration: '1 week' },
      { title: 'Launch & Growth Strategies', duration: '1 week' }
    ],
    level: 'Beginner'
  },
  {
    title: 'Advanced UX Optimization',
    description: 'Deep dive into user experience enhancement',
    duration: '6 weeks',
    modules: [
      { title: 'User Research Methods', duration: '1.5 weeks' },
      { title: 'Information Architecture', duration: '1.5 weeks' },
      { title: 'Interaction Design Patterns', duration: '1.5 weeks' },
      { title: 'Usability Testing & Iteration', duration: '1.5 weeks' }
    ],
    level: 'Intermediate'
  },
  {
    title: 'Technical Architecture Mastery',
    description: 'Build scalable and maintainable systems',
    duration: '8 weeks',
    modules: [
      { title: 'System Design Principles', duration: '2 weeks' },
      { title: 'Scalability Patterns', duration: '2 weeks' },
      { title: 'Performance Optimization', duration: '2 weeks' },
      { title: 'Security Best Practices', duration: '2 weeks' }
    ],
    level: 'Advanced'
  }
]

const QUICK_GUIDES = [
  {
    title: 'Performance Optimization',
    topics: [
      'Core Web Vitals',
      'Image Optimization',
      'Code Splitting',
      'Caching Strategies'
    ],
    readingTime: '15 min',
    category: 'Technical'
  },
  {
    title: 'User Engagement',
    topics: [
      'Behavioral Analytics',
      'A/B Testing',
      'User Feedback Loops',
      'Retention Strategies'
    ],
    readingTime: '20 min',
    category: 'Product'
  },
  {
    title: 'Design Systems',
    topics: [
      'Component Libraries',
      'Style Guidelines',
      'Design Tokens',
      'Documentation'
    ],
    readingTime: '25 min',
    category: 'Design'
  },
  {
    title: 'Team Collaboration',
    topics: [
      'Agile Practices',
      'Code Review',
      'Documentation',
      'Knowledge Sharing'
    ],
    readingTime: '15 min',
    category: 'Process'
  }
]

const INDUSTRY_INSIGHTS = [
  {
    title: 'Future of Digital Products',
    highlights: [
      'AI Integration Trends',
      'No-Code Movement',
      'Web3 Applications',
      'Privacy-First Design'
    ],
    publishDate: '2 days ago',
    readTime: '10 min'
  },
  {
    title: 'DevOps Evolution 2024',
    highlights: [
      'GitOps Practices',
      'Infrastructure as Code',
      'Observability',
      'Security Automation'
    ],
    publishDate: '1 week ago',
    readTime: '12 min'
  },
  {
    title: 'UX Trends Analysis',
    highlights: [
      'Micro-interactions',
      'Voice Interfaces',
      'Accessibility',
      'Dark Patterns'
    ],
    publishDate: '2 weeks ago',
    readTime: '8 min'
  }
]

const BEST_PRACTICES = [
  {
    category: 'Development',
    practices: [
      { title: 'Code Quality', description: 'Standards and review processes' },
      { title: 'Testing Strategy', description: 'Unit, integration, and E2E testing' },
      { title: 'CI/CD Pipeline', description: 'Automated deployment workflows' },
      { title: 'Documentation', description: 'Code and API documentation' }
    ]
  },
  {
    category: 'Design',
    practices: [
      { title: 'Accessibility', description: 'WCAG compliance and inclusive design' },
      { title: 'Responsive Design', description: 'Multi-device optimization' },
      { title: 'Visual Hierarchy', description: 'Layout and typography principles' },
      { title: 'Design Systems', description: 'Component libraries and guidelines' }
    ]
  },
  {
    category: 'Product Management',
    practices: [
      { title: 'User Research', description: 'Data-driven decision making' },
      { title: 'Feature Prioritization', description: 'Impact vs effort analysis' },
      { title: 'Release Planning', description: 'Version control and changelog' },
      { title: 'Metrics Tracking', description: 'KPIs and analytics' }
    ]
  }
]

export function EducationalContent() {
  const [activeTab, setActiveTab] = useState<'paths' | 'guides' | 'insights' | 'practices'>('paths')

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent dark:from-primary/[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Knowledge Hub
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Learn & Grow With Us
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive resources to enhance your product development skills
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border p-1 bg-background/50 backdrop-blur-sm">
            <button
              onClick={() => setActiveTab('paths')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'paths'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Learning Paths
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'guides'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Quick Guides
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'insights'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Industry Insights
            </button>
            <button
              onClick={() => setActiveTab('practices')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'practices'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              Best Practices
            </button>
          </div>
        </div>

        {/* Content Sections */}
        {activeTab === 'paths' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {LEARNING_PATHS.map((path, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-card/80 dark:hover:bg-card/60"
              >
                <div className="mb-6">
                  <div className="text-sm text-primary font-medium mb-2 tracking-wide">{path.level}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground tracking-tight">{path.title}</h3>
                  <div className="text-muted-foreground mb-4 leading-relaxed">{path.description}</div>
                  <div className="text-sm text-muted-foreground/80">{path.duration}</div>
                </div>

                <div className="space-y-4 mb-6">
                  {path.modules.map((module, moduleIndex) => (
                    <div 
                      key={moduleIndex}
                      className="flex items-center justify-between text-sm group/item"
                    >
                      <span className="text-foreground group-hover/item:text-primary transition-colors duration-200">{module.title}</span>
                      <span className="text-muted-foreground">{module.duration}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20 shadow-sm hover:shadow transition-all duration-200"
                >
                  Start Learning
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Quick Guides */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {QUICK_GUIDES.map((guide, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-card/80 dark:hover:bg-card/60"
              >
                <div className="mb-6">
                  <div className="text-sm text-primary font-medium mb-2 tracking-wide">{guide.category}</div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground tracking-tight">{guide.title}</h3>
                  <div className="text-sm text-muted-foreground/80">Reading time: {guide.readingTime}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {guide.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex}
                      className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200"
                    >
                      • {topic}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20 shadow-sm hover:shadow transition-all duration-200"
                >
                  Read Guide
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Industry Insights */}
        {activeTab === 'insights' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INDUSTRY_INSIGHTS.map((insight, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-card/80 dark:hover:bg-card/60"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground tracking-tight">{insight.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground/80">
                    <span>{insight.publishDate}</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span>{insight.readTime} read</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {insight.highlights.map((highlight, highlightIndex) => (
                    <div 
                      key={highlightIndex}
                      className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200"
                    >
                      • {highlight}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-card hover:bg-primary/[0.02] text-foreground border border-border hover:border-primary/20 shadow-sm hover:shadow transition-all duration-200"
                >
                  Read Article
                </Button>
              </div>
            ))}
          </div>
        )}

        {/* Best Practices */}
        {activeTab === 'practices' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {BEST_PRACTICES.map((section, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:bg-card/80 dark:hover:bg-card/60"
              >
                <h3 className="text-xl font-semibold mb-6 text-foreground tracking-tight">{section.category}</h3>
                <div className="space-y-4">
                  {section.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="group/item">
                      <div className="font-medium mb-1 text-foreground group-hover/item:text-primary transition-colors duration-200">{practice.title}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
} 