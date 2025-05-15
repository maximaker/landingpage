import { Badge } from '@/components/ui/badge'
import { Heading, Subheading } from "./ui/typography"

const SECURITY_CERTS = [
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
        <path d="M12 22V12"/>
        <path d="M12 12L3 7"/>
        <path d="M12 12l9-5"/>
      </svg>
    )
  },
  {
    name: 'SOC 2 Type II',
    description: 'Security & Privacy Controls',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
    )
  },
  {
    name: 'GDPR Compliant',
    description: 'EU Data Protection',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
  {
    name: 'HIPAA Ready',
    description: 'Healthcare Data Security',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  }
]

const PRIVACY_COMMITMENTS = [
  {
    title: 'Data Encryption',
    description: 'All data is encrypted at rest and in transit using industry-standard protocols',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    )
  },
  {
    title: 'Data Ownership',
    description: 'You retain full ownership and control of your data at all times',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    )
  },
  {
    title: 'Regular Audits',
    description: 'Independent security audits conducted quarterly',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/>
        <path d="M12 22V12"/>
        <path d="M12 12L3 7"/>
        <path d="M12 12l9-5"/>
      </svg>
    )
  }
]

const GUARANTEES = [
  {
    title: '30-Day Money Back',
    description: 'Not satisfied? Get a full refund within 30 days, no questions asked',
    terms: [
      'Valid for all subscription plans',
      'Covers unused portion of service',
      'Processed within 5 business days'
    ]
  },
  {
    title: '4-Hour Response Time',
    description: 'Get expert support when you need it, guaranteed response within 4 hours',
    terms: [
      'Available 24/7/365',
      'Priority support queue',
      'Multiple communication channels'
    ]
  }
]

const COMPLIANCE_BADGES = [
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    level: 'Level 1 Service Provider'
  },
  {
    name: 'CCPA',
    description: 'California Consumer Privacy Act',
    level: 'Fully Compliant'
  },
  {
    name: 'NIST',
    description: 'National Institute of Standards and Technology',
    level: 'Framework Aligned'
  }
]

export function TrustElements() {
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
            Enterprise-Grade Security
          </Badge>
          <Heading size="3xl" className="sm:text-4xl lg:text-5xl mb-6">
            Your Trust is Our Priority
          </Heading>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading security measures and compliance standards to keep your data safe
          </p>
        </div>

        {/* Security Certifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {SECURITY_CERTS.map((cert, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 text-center"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Privacy Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {PRIVACY_COMMITMENTS.map((commitment, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-primary mb-4">
                {commitment.icon}
              </div>
              <Subheading className="mb-2">
                {commitment.title}
              </Subheading>
              <p className="text-muted-foreground">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {GUARANTEES.map((guarantee, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-primary">
                {guarantee.title}
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                {guarantee.description}
              </p>
              <div className="space-y-3">
                {guarantee.terms.map((term, termIndex) => (
                  <div key={termIndex} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-sm text-muted-foreground">
                      {term}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COMPLIANCE_BADGES.map((badge, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 text-center"
            >
              <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                {badge.name}
              </div>
              <p className="text-muted-foreground mb-4">
                {badge.description}
              </p>
              <div className="text-sm font-medium text-primary">
                {badge.level}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 