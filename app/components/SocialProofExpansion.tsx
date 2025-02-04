import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { CompanyLogos, AwardLogos, PressLogos, PartnerLogos, IntegrationLogos } from './assets/svgs'

const CASE_STUDIES = [
  {
    title: 'E-commerce Platform Transformation',
    company: 'FashionRetail Inc.',
    industry: 'Retail',
    challenge: 'Legacy platform with poor performance and low conversion rates',
    solution: 'Complete platform modernization with focus on mobile experience',
    results: [
      { metric: 'Conversion Rate', before: '1.8%', after: '4.2%' },
      { metric: 'Page Load Time', before: '5.2s', after: '1.4s' },
      { metric: 'Mobile Revenue', before: '$2M/month', after: '$5.8M/month' },
    ],
    testimonial: {
      quote: 'The transformation exceeded our expectations. Our mobile revenue tripled within months.',
      author: 'Sarah Chen',
      role: 'CTO',
      image: '/testimonials/sarah-chen.jpg'
    }
  },
  {
    title: 'Healthcare App Optimization',
    company: 'MediCare Plus',
    industry: 'Healthcare',
    challenge: 'Complex user interface leading to poor adoption rates',
    solution: 'UX redesign and performance optimization',
    results: [
      { metric: 'User Adoption', before: '23%', after: '78%' },
      { metric: 'Support Tickets', before: '850/week', after: '210/week' },
      { metric: 'Patient Satisfaction', before: '72%', after: '94%' },
    ],
    testimonial: {
      quote: 'The simplified interface has transformed how our staff and patients interact with the platform.',
      author: 'Dr. James Wilson',
      role: 'Medical Director',
      image: '/testimonials/james-wilson.jpg'
    }
  },
  {
    title: 'SaaS Platform Scaling',
    company: 'CloudFlow Systems',
    industry: 'Technology',
    challenge: 'Architecture limitations preventing global expansion',
    solution: 'Microservices architecture with enhanced scalability',
    results: [
      { metric: 'System Uptime', before: '98.5%', after: '99.99%' },
      { metric: 'Response Time', before: '850ms', after: '120ms' },
      { metric: 'Active Users', before: '50k', after: '500k' },
    ],
    testimonial: {
      quote: 'We can now confidently scale our platform globally without performance concerns.',
      author: 'Michael Torres',
      role: 'VP Engineering',
      image: '/testimonials/michael-torres.jpg'
    }
  }
]

const VIDEO_TESTIMONIALS = [
  {
    title: 'From Startup to Scale-up',
    company: 'TechStart Solutions',
    thumbnail: '/videos/techstart-thumb.jpg',
    duration: '3:45',
    speaker: {
      name: 'Alex Rivera',
      role: 'Founder & CEO',
      image: '/testimonials/alex-rivera.jpg'
    },
    metrics: [
      { label: 'Growth Rate', value: '300%' },
      { label: 'Time to Market', value: '-60%' },
      { label: 'Development Cost', value: '-45%' }
    ]
  },
  {
    title: 'Enterprise Transformation',
    company: 'Global Finance Corp',
    thumbnail: '/videos/gfc-thumb.jpg',
    duration: '4:20',
    speaker: {
      name: 'Emma Thompson',
      role: 'Digital Director',
      image: '/testimonials/emma-thompson.jpg'
    },
    metrics: [
      { label: 'Processing Speed', value: '+400%' },
      { label: 'Error Rate', value: '-85%' },
      { label: 'Cost Savings', value: '$2.5M' }
    ]
  },
  {
    title: 'Digital-First Success',
    company: 'RetailNext',
    thumbnail: '/videos/retailnext-thumb.jpg',
    duration: '3:15',
    speaker: {
      name: 'David Kim',
      role: 'Head of Digital',
      image: '/testimonials/david-kim.jpg'
    },
    metrics: [
      { label: 'Online Sales', value: '+250%' },
      { label: 'Customer Satisfaction', value: '95%' },
      { label: 'Market Share', value: '+15%' }
    ]
  }
]

const INDUSTRY_RESULTS = [
  {
    industry: 'E-commerce & Retail',
    metrics: [
      { label: 'Average Conversion Increase', value: '120%' },
      { label: 'Mobile Revenue Growth', value: '185%' },
      { label: 'Customer Retention', value: '+45%' }
    ],
    clients: ['FashionRetail', 'HomeGoods', 'SportsDirect'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
      </svg>
    )
  },
  {
    industry: 'Healthcare & Medical',
    metrics: [
      { label: 'Patient Engagement', value: '+160%' },
      { label: 'Operational Efficiency', value: '+75%' },
      { label: 'Compliance Rate', value: '99.9%' }
    ],
    clients: ['MediCare Plus', 'HealthFirst', 'CareCloud'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    industry: 'Financial Services',
    metrics: [
      { label: 'Transaction Speed', value: '+300%' },
      { label: 'Security Incidents', value: '-95%' },
      { label: 'Cost Reduction', value: '40%' }
    ],
    clients: ['Global Finance', 'SecureBank', 'FinTech Pro'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    industry: 'Technology & SaaS',
    metrics: [
      { label: 'Scalability', value: '+500%' },
      { label: 'Time to Market', value: '-65%' },
      { label: 'User Growth', value: '10x' }
    ],
    clients: ['CloudFlow', 'TechStart', 'DataPro'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    )
  }
]

const ROI_STATISTICS = [
  {
    category: 'Development Efficiency',
    metrics: [
      { label: 'Time to Market', value: '-60%', description: 'Faster development cycles' },
      { label: 'Code Quality', value: '+85%', description: 'Fewer bugs and issues' },
      { label: 'Team Productivity', value: '+120%', description: 'More features delivered' }
    ]
  },
  {
    category: 'Business Impact',
    metrics: [
      { label: 'Revenue Growth', value: '+145%', description: 'Average increase' },
      { label: 'Cost Savings', value: '40%', description: 'Reduced operational costs' },
      { label: 'Customer Growth', value: '3x', description: 'User base expansion' }
    ]
  },
  {
    category: 'User Experience',
    metrics: [
      { label: 'User Satisfaction', value: '95%', description: 'Customer happiness' },
      { label: 'User Retention', value: '+75%', description: 'Improved loyalty' },
      { label: 'Support Tickets', value: '-70%', description: 'Reduced issues' }
    ]
  }
]

export function SocialProofExpansion() {
  const [activeTab, setActiveTab] = useState<'case-studies' | 'testimonials' | 'results'>('case-studies')

  // Create placeholder avatar SVG component
  const Avatar = ({ className = "w-12 h-12" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="24" cy="18" r="8"/>
      <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16"/>
    </svg>
  )

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
            Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Real Results, Real Impact
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital products and achieve remarkable results
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-border p-1">
            <button
              onClick={() => setActiveTab('case-studies')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'case-studies'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'testimonials'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
            >
              Video Testimonials
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'results'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10'
              }`}
            >
              Industry Results
            </button>
          </div>
        </div>

        {/* Case Studies */}
        {activeTab === 'case-studies' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {CASE_STUDIES.map((study, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="text-sm text-primary font-medium mb-2">{study.industry}</div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <div className="text-muted-foreground">{study.company}</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-medium mb-1">Challenge:</div>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Solution:</div>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{result.metric}</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-red-500">{result.before}</span>
                        <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                        <span className="text-sm text-green-500">{result.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-primary/5">
                  <div className="text-muted-foreground/50">
                    <Avatar />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground italic mb-2">"{study.testimonial.quote}"</p>
                    <div className="text-sm font-medium">{study.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{study.testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Video Testimonials */}
        {activeTab === 'testimonials' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {VIDEO_TESTIMONIALS.map((video, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
              >
                <div className="relative mb-6">
                  <div className="w-full h-48 bg-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-primary/50">
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="32" cy="32" r="30"/>
                        <path d="M26 20l20 12-20 12V20z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <div className="text-muted-foreground">{video.company}</div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-muted-foreground/50">
                    <Avatar />
                  </div>
                  <div>
                    <div className="font-medium">{video.speaker.name}</div>
                    <div className="text-sm text-muted-foreground">{video.speaker.role}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {video.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-lg font-bold text-primary">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Industry Results */}
        {activeTab === 'results' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-24">
              {INDUSTRY_RESULTS.map((industry, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="text-primary mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-4">{industry.industry}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {industry.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex}>
                        <div className="text-2xl font-bold text-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-2">Featured Clients:</div>
                    <div className="text-sm text-muted-foreground">
                      {industry.clients.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-12">ROI Statistics</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {ROI_STATISTICS.map((category, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm"
                  >
                    <h4 className="text-lg font-semibold mb-6">{category.category}</h4>
                    <div className="space-y-6">
                      {category.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex}>
                          <div className="text-2xl font-bold text-primary mb-1">
                            {metric.value}
                          </div>
                          <div className="font-medium mb-1">{metric.label}</div>
                          <div className="text-sm text-muted-foreground">
                            {metric.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
} 