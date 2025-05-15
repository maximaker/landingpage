// Static data, types, and utility functions for TechFlow case study

export type ProcessPhase = {
  title: string
  duration: string
  activities: string[]
  deliverables: string[]
  phase: 'discovery' | 'planning' | 'design' | 'development'
} & (
  | { phase: 'discovery'; findings: string[] }
  | { phase: 'planning'; improvements: string[] }
  | { phase: 'design'; improvements: string[] }
  | { phase: 'development'; technical: string[] }
)

export function getPhaseItems(phase: ProcessPhase): string[] {
  switch (phase.phase) {
    case 'discovery':
      return phase.findings
    case 'planning':
      return phase.improvements
    case 'design':
      return phase.improvements
    case 'development':
      return phase.technical
  }
}

export type ProgressSection = {
  id: string
  label: string
}

export const PROGRESS_SECTIONS: ProgressSection[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'approach', label: 'Approach' },
  { id: 'process', label: 'Process' },
  { id: 'transformation', label: 'Transformation' },
  { id: 'results', label: 'Results' },
  { id: 'learnings', label: 'Learnings' }
]

export const CASE_STUDY = {
  client: "TechFlow",
  industry: "SaaS",
  duration: "9 weeks",
  services: ["UX Research", "UI Design", "Development", "Analytics"],
  overview: {
    solution: "Revolutionizing time-based billing for professional calls. TechFlow empowers experts to monetize their expertise through seamless phone consultations, building on their success with Skype, WhatsApp, and Telegram integrations.",
    established: "2013",
    sector: "FinTech / Professional Services",
    role: "Lead Product Designer",
    team: ["Product Owner", "UX Designer", "Frontend Dev", "Backend Dev"],
    timeline: "Q2 2023",
    impact_preview: {
      metric1: { value: "1000+", label: "Active Users" },
      metric2: { value: "95%", label: "User Satisfaction" },
      metric3: { value: "35%", label: "Revenue Growth" }
    }
  },
  context: {
    background: "In an increasingly digital world, professionals struggle to efficiently monetize phone consultations. TechFlow identified this gap and sought to extend their successful digital payment platform to serve this untapped market.",
    problem: "Expert consultants and professionals lacked a streamlined way to bill for phone consultations, leading to lost revenue opportunities and administrative overhead. Existing solutions were either too complex or didn't integrate well with their workflow.",
    goal: "Create an intuitive mobile-first solution that seamlessly integrates call tracking with automated billing, enabling professionals to focus on delivering value rather than managing payments.",
    target_audience: [
      {
        type: "Independent consultants",
        persona: {
          name: "Dr. Sarah Mitchell",
          role: "Business Strategy Consultant",
          age: "42",
          experience: "15+ years",
          pain_points: [
            "Spending 8+ hours weekly on manual billing tasks",
            "Losing 20% of billable time to administrative work",
            "Difficulty tracking multiple concurrent projects",
            "Inconsistent payment collection affecting cash flow"
          ],
          goals: [
            "Reduce administrative overhead by 75%",
            "Increase monthly billable hours by 30%",
            "Implement automated payment collection",
            "Scale consulting practice sustainably"
          ],
          quote: "I need a solution that lets me focus on advising clients, not chasing payments."
        }
      },
      {
        type: "Legal professionals",
        persona: {
          name: "James Rodriguez",
          role: "Corporate Lawyer",
          age: "38",
          experience: "10+ years",
          pain_points: [
            "Inefficient time logging",
            "Complex client billing",
            "Compliance concerns",
            "Integration with existing systems"
          ],
          goals: [
            "Accurate time tracking",
            "Automated billing",
            "Regulatory compliance",
            "Professional image"
          ],
          quote: "Security and compliance are non-negotiable in my practice."
        }
      },
      {
        type: "Financial advisors",
        persona: {
          name: "Linda Chen",
          role: "Wealth Management Advisor",
          age: "45",
          experience: "18+ years",
          pain_points: [
            "Time-consuming admin work",
            "Inconsistent billing",
            "Client scheduling conflicts",
            "Revenue leakage"
          ],
          goals: [
            "Maximize billable time",
            "Enhance client experience",
            "Secure communications",
            "Grow client base"
          ],
          quote: "My clients expect a premium experience from first contact to final billing."
        }
      },
      {
        type: "Healthcare providers",
        persona: {
          name: "Dr. Michael Foster",
          role: "Telemedicine Specialist",
          age: "36",
          experience: "8+ years",
          pain_points: [
            "Complex scheduling",
            "Payment processing delays",
            "HIPAA compliance",
            "Patient communication"
          ],
          goals: [
            "Simplified billing",
            "Secure consultations",
            "Patient satisfaction",
            "Practice growth"
          ],
          quote: "I need a HIPAA-compliant solution that makes billing as seamless as the consultation."
        }
      },
      {
        type: "Creative professionals",
        persona: {
          name: "Emma Thompson",
          role: "UX Design Consultant",
          age: "31",
          experience: "6+ years",
          pain_points: [
            "Project scope creep",
            "Irregular payments",
            "Time tracking accuracy",
            "Client expectations"
          ],
          goals: [
            "Clear value communication",
            "Automated invoicing",
            "Professional image",
            "Portfolio growth"
          ],
          quote: "I want to spend more time designing and less time on payment admin."
        }
      }
    ]
  },
  approach: {
    methodology: "We adopted a user-centric, iterative approach focused on rapid validation and continuous feedback. Working closely with the TechFlow team and development partners, we prioritized creating an intuitive mobile experience that would seamlessly integrate with users' existing workflows.",
    principles: [
      "Mobile-first design for busy professionals",
      "Seamless integration with existing tools",
      "Real-time tracking and transparency",
      "Enterprise-grade security and compliance"
    ],
    constraints: [
      "Strict regulatory compliance requirements",
      "Complex integration with telecom systems",
      "Need for real-time payment processing",
      "Cross-platform compatibility needs"
    ]
  },
  process: {
    phases: [
      {
        phase: 'discovery' as const,
        title: "1. Research & Discovery",
        duration: "2 weeks",
        activities: [
          "Conducted 25+ user interviews across target segments",
          "Analyzed competitor solutions and market gaps",
          "Mapped existing user journeys and pain points",
          "Validated initial hypotheses with stakeholders"
        ],
        deliverables: [
          "Comprehensive user research report",
          "Competitive analysis matrix",
          "User journey maps",
          "Initial product requirements"
        ],
        findings: [
          "92% of professionals struggle with payment collection",
          "Average 5-8 hours weekly spent on billing admin",
          "Strong demand for automated payment solutions",
          "Security and compliance are top priorities"
        ]
      },
      {
        phase: 'planning' as const,
        title: "2. Strategy & Planning",
        duration: "2 weeks",
        activities: [
          "Defined core feature set and MVP scope",
          "Created technical architecture blueprint",
          "Established security and compliance framework",
          "Developed project timeline and milestones"
        ],
        deliverables: [
          "Product roadmap",
          "Technical specifications",
          "Security compliance plan",
          "Project timeline"
        ],
        improvements: [
          "Streamlined feature prioritization",
          "Enhanced security measures",
          "Optimized development timeline",
          "Clear success metrics"
        ]
      },
      {
        phase: 'design' as const,
        title: "3. Design & Prototyping",
        duration: "3 weeks",
        activities: [
          "Created low and high-fidelity wireframes",
          "Developed interactive prototypes",
          "Conducted usability testing sessions",
          "Refined UI based on user feedback"
        ],
        deliverables: [
          "UI component library",
          "Interactive prototypes",
          "Usability test results",
          "Design documentation"
        ],
        improvements: [
          "Simplified call initiation flow reduced steps by 60%",
          "Intuitive time tracking increased accuracy by 85%",
          "Streamlined payment process improved conversion by 45%",
          "Enhanced dashboard reduced cognitive load by 40%"
        ]
      },
      {
        phase: 'development' as const,
        title: "4. Development & Launch",
        duration: "2 weeks",
        activities: [
          "Implemented frontend components",
          "Integrated backend services",
          "Conducted performance testing",
          "Deployed to production"
        ],
        deliverables: [
          "Production-ready application",
          "Technical documentation",
          "Performance metrics",
          "Launch strategy"
        ],
        technical: [
          "Achieved 99.9% uptime with distributed architecture",
          "Reduced API response time by 65%",
          "Implemented real-time payment processing",
          "Enhanced security with end-to-end encryption"
        ]
      }
    ]
  },
  results: {
    metrics: [
      {
        label: "Active Users",
        value: "1000+",
        description: "Achieved in first 3 months",
        icon: null // Replace with icon in page.tsx
      },
      {
        label: "User Satisfaction",
        value: "95%",
        description: "Based on NPS surveys",
        icon: null // Replace with icon in page.tsx
      },
      {
        label: "Revenue Growth",
        value: "+35%",
        description: "Average user revenue increase",
        icon: null // Replace with icon in page.tsx
      }
    ],
    impact: {
      business: [
        "Successfully entered professional services market",
        "Established new recurring revenue stream",
        "Achieved product-market fit validation",
        "Built foundation for enterprise expansion"
      ],
      users: [
        "Reduced billing administration by 75%",
        "Increased billable time capture by 35%",
        "Improved client payment experience",
        "Enhanced professional credibility"
      ]
    },
    highlights: [
      "Successful market validation with 1000+ active users",
      "95% user satisfaction rate within 3 months",
      "35% average increase in captured revenue",
      "Zero security incidents during launch"
    ]
  },
  learnings: {
    successes: [
      "Rapid MVP validation through user-centric design",
      "Successful integration with existing workflows",
      "Strong security and compliance foundation",
      "Effective cross-functional team collaboration"
    ],
    challenges: [
      "Complex regulatory requirements navigation",
      "Real-time payment processing optimization",
      "Cross-platform compatibility maintenance",
      "User behavior variation management"
    ],
    insights: [
      "Early user involvement crucial for adoption",
      "Security features drive user trust",
      "Automated workflows increase engagement",
      "Mobile-first approach validates market need"
    ]
  },
  testimonials: [
    {
      quote: "TechFlow's solution transformed how I handle client consultations. The automated billing and professional interface have helped me focus on what matters - delivering value to my clients.",
      author: "Sarah Chen",
      role: "Financial Advisor",
      company: "Independent Professional",
      image: "https://ui-avatars.com/api/?name=Sarah+Chen&background=0D8ABC&color=fff"
    },
    {
      quote: "The implementation exceeded our expectations. The team's attention to detail and focus on user experience has resulted in a product that our users genuinely love using.",
      author: "Alex Negru",
      role: "CEO",
      company: "TechFlow",
      image: "https://ui-avatars.com/api/?name=Alex+Negru&background=0D8ABC&color=fff"
    }
  ],
  visualTransformations: [
    {
      title: "Call Management Dashboard",
      description: "Redesigned the call tracking interface to provide clear visibility and control over consultations",
      before: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Original+Dashboard",
        caption: "Original interface with complex navigation and limited insights"
      },
      after: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Improved+Dashboard",
        caption: "Streamlined interface with clear metrics and actions"
      },
      improvements: [
        "Simplified navigation reduced clicks by 40%",
        "Real-time earnings tracker improved visibility",
        "Smart notification system for payment status",
        "Integrated calendar for better scheduling",
        "One-click call initiation and billing",
        "Automated receipt generation and delivery"
      ]
    },
    {
      title: "Client Experience",
      description: "Enhanced the client-facing interface to build trust and professionalism",
      before: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Original+Client+Interface",
        caption: "Basic payment form with limited information"
      },
      after: {
        image: "https://placehold.co/1920x1080/e2e8f0/475569?text=Improved+Client+Interface",
        caption: "Professional interface with clear service details"
      },
      improvements: [
        "Transparent pricing and duration display",
        "Secure payment gateway integration",
        "Professional service presentation",
        "Clear consultation history and receipts",
        "Easy scheduling and rescheduling",
        "Automated follow-up communication"
      ]
    }
  ]
} 