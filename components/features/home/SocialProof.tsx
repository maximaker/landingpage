import { Badge } from '@/components/ui/badge'
import { Marquee } from '@/components/ui/marquee'
import { CompanyLogos, AwardLogos, PressLogos, PartnerLogos } from '@/components/assets/svgs'

const COMPANY_LOGOS = [
  { name: 'TechCorp', Logo: CompanyLogos.TechCorp },
  { name: 'InnovateLabs', Logo: CompanyLogos.InnovateLabs },
  { name: 'CloudPeak', Logo: CompanyLogos.CloudPeak },
  { name: 'FutureScale', Logo: CompanyLogos.FutureScale },
  { name: 'DataDynamics', Logo: CompanyLogos.DataDynamics },
  { name: 'SmartSolutions', Logo: CompanyLogos.SmartSolutions }
]

const KEY_STATS = [
  { value: '98%', label: 'Client Satisfaction', context: 'Based on post-project surveys' },
  { value: '45%', label: 'Average ROI Increase', context: 'Within first 6 months' },
  { value: '2.5x', label: 'User Engagement Growth', context: 'Across all metrics' },
  { value: '60%', label: 'Development Time Saved', context: 'Using our methodology' },
]

const AWARDS = [
  { name: 'Tech Innovation Awards', Logo: AwardLogos.TechAwards },
  { name: 'Digital Summit Excellence', Logo: AwardLogos.DigitalSummit },
  { name: 'Design Week Recognition', Logo: AwardLogos.DesignWeek }
]

const PRESS_MENTIONS = [
  { name: 'TechCrunch', Logo: PressLogos.TechCrunch },
  { name: 'Wired', Logo: PressLogos.Wired },
  { name: 'Forbes', Logo: PressLogos.Forbes }
]

const INTEGRATION_PARTNERS = [
  { name: 'AWS', Logo: PartnerLogos.AWS },
  { name: 'HubSpot', Logo: PartnerLogos.HubSpot },
  { name: 'Stripe', Logo: PartnerLogos.Stripe },
  { name: 'Salesforce', Logo: PartnerLogos.Salesforce }
]

export function SocialProof() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-24">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Trusted By Industry Leaders
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Empowering Digital Excellence
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the ranks of innovative companies transforming their digital presence
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {COMPANY_LOGOS.map(({ name, Logo }) => (
              <div 
                key={name}
                className="flex items-center justify-center group"
              >
                <div className="relative text-muted-foreground/50 hover:text-primary transition-colors">
                  <Logo />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {KEY_STATS.map((stat, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card/50 dark:bg-card/40 border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.context}
              </div>
            </div>
          ))}
        </div>

        {/* Awards */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Industry Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {AWARDS.map(({ name, Logo }) => (
              <div 
                key={name}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 text-muted-foreground/50 group-hover:text-primary transition-colors">
                  <Logo />
                </div>
                <div className="font-medium">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Mentions */}
        <div className="mb-24">
          <h3 className="text-2xl font-semibold text-center mb-12">
            Featured In
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRESS_MENTIONS.map(({ name, Logo }) => (
              <div 
                key={name}
                className="flex items-center justify-center group"
              >
                <div className="text-muted-foreground/50 group-hover:text-primary transition-colors">
                  <Logo />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-12">
            Integration Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {INTEGRATION_PARTNERS.map(({ name, Logo }) => (
              <div 
                key={name}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 text-muted-foreground/50 group-hover:text-primary transition-colors">
                  <Logo />
                </div>
                <div className="font-medium">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}