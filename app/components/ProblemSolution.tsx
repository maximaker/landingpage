"use client"

import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Subheading } from "./ui/typography"
import React from 'react'

const PAIN_POINTS = [
  {
    title: 'Slow Development Cycles',
    description: 'Traditional development processes are causing delays and missed opportunities',
    solution: 'Accelerated Development',
    solutionDesc: 'Our methodology reduces development time by 60% while maintaining quality',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    title: 'Poor User Engagement',
    description: 'Users are not interacting with your product as much as they could be',
    solution: 'Enhanced User Experience',
    solutionDesc: 'Implement proven UX patterns that increase engagement by 150%',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Technical Debt',
    description: 'Legacy code and outdated architecture are holding you back',
    solution: 'Modern Architecture',
    solutionDesc: 'Implement scalable, maintainable solutions that grow with your business',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 20h20"/>
        <path d="M5 20v-4a7 7 0 0 1 14 0v4"/>
        <circle cx="12" cy="6" r="3"/>
      </svg>
    )
  },
  {
    title: 'Security Vulnerabilities',
    description: 'Outdated security practices putting your data and users at risk',
    solution: 'Enterprise-Grade Security',
    solutionDesc: 'Implement robust security measures that protect your assets and build trust',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  }
]

const BENEFITS = [
  {
    title: 'Faster Time to Market',
    description: 'Launch features and updates in record time without compromising quality',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    )
  },
  {
    title: 'Increased ROI',
    description: 'Generate more value from your digital investments with optimized solutions',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    )
  },
  {
    title: 'Better User Experience',
    description: 'Delight your users with intuitive interfaces and smooth interactions',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Scalable Architecture',
    description: 'Build on a foundation that grows with your business needs',
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

type ROIInputs = {
  monthlyUsers: number
  averageRevenue: number
  developmentTime: number
}

export const ProblemSolution = React.memo(function ProblemSolution() {
  const [roiInputs, setRoiInputs] = useState<ROIInputs>({
    monthlyUsers: 10000,
    averageRevenue: 50,
    developmentTime: 6
  })

  const calculateROI = () => {
    const currentRevenue = roiInputs.monthlyUsers * roiInputs.averageRevenue * roiInputs.developmentTime
    const projectedRevenue = currentRevenue * 1.45 // 45% average increase
    const investment = 50000 // Example fixed investment
    return {
      increase: projectedRevenue - currentRevenue,
      roi: ((projectedRevenue - currentRevenue - investment) / investment * 100).toFixed(1)
    }
  }

  const roiResults = calculateROI()

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
            Transform Your Digital Product
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            From Challenges to Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We identify and solve your product's pain points with proven methodologies and innovative solutions
          </p>
        </div>

        {/* Pain Points and Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {PAIN_POINTS.map((point, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5"
            >
              <div className="flex flex-col h-full">
                {/* Problem Section */}
                <div className="mb-8">
                  <div className="text-2xl text-primary mb-4">
                    {point.icon}
                  </div>
                  <Subheading className="mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                    {point.title}
                  </Subheading>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                    {point.description}
                  </p>
                </div>

                {/* Divider with Arrow */}
                <div className="relative py-6">
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-border group-hover:bg-primary/20 transition-colors duration-200" />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </div>
                </div>

                {/* Solution Section */}
                <div>
                  <Subheading className="mb-3 text-primary">
                    {point.solution}
                  </Subheading>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-200">
                    {point.solutionDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <Subheading as="h3" className="text-lg mb-2 text-foreground">
                {benefit.title}
              </Subheading>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-card/50 dark:bg-card/40 border border-border backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">Calculate Your ROI</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Monthly Active Users
                </label>
                <input
                  type="number"
                  value={roiInputs.monthlyUsers}
                  onChange={(e) => setRoiInputs({...roiInputs, monthlyUsers: Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Avg. Revenue per User ($)
                </label>
                <input
                  type="number"
                  value={roiInputs.averageRevenue}
                  onChange={(e) => setRoiInputs({...roiInputs, averageRevenue: Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Development Time (months)
                </label>
                <input
                  type="number"
                  value={roiInputs.developmentTime}
                  onChange={(e) => setRoiInputs({...roiInputs, developmentTime: Number(e.target.value)})}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-primary/20 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-xl bg-primary/5">
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Projected Revenue Increase
                </div>
                <div className="text-2xl font-bold text-primary">
                  ${roiResults.increase.toLocaleString()}
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-1">
                  Return on Investment
                </div>
                <div className="text-2xl font-bold text-primary">
                  {roiResults.roi}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})