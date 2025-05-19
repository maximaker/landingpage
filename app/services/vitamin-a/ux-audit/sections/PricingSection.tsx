import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const PRICING_OPTIONS = [
  {
    title: "Just",
    price: "$2,499",
    description: "Perfect for startups and small businesses",
    timeline: "2 weeks",
    timelineWeeks: 2,
    features: [
      "Core user flows analysis",
      "Basic usability review",
      "Key recommendations",
      "Executive summary",
      "Implementation roadmap",
      "1 stakeholder interview",
      "Basic analytics review"
    ]
  },
  {
    title: "Enjoy",
    price: "$4,999",
    description: "Ideal for growing companies",
    timeline: "3 weeks",
    timelineWeeks: 3,
    features: [
      "Comprehensive UX analysis",
      "Detailed recommendations",
      "Implementation roadmap",
      "Executive summary",
      "Competitive analysis",
      "3 stakeholder interviews",
      "Full analytics deep-dive",
      "User flow optimization",
      "Content strategy review"
    ],
    isPopular: true
  },
  {
    title: "The Ride",
    price: "Custom",
    description: "For enterprise and complex products",
    timeline: "4+ weeks",
    timelineWeeks: 4,
    features: [
      "Full product ecosystem analysis",
      "Competitive benchmarking",
      "Detailed action plan",
      "Executive summary",
      "Unlimited stakeholder interviews",
      "Advanced analytics review",
      "User research synthesis",
      "Conversion optimization",
      "Content & IA deep-dive",
      "Custom requirements"
    ]
  }
];

export function PricingSection() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <p className="text-lg text-muted-foreground">
          Flexible engagement options to match your product's needs and timeline.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {PRICING_OPTIONS.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 ${
              option.isPopular 
                ? 'border-primary shadow-lg scale-[1.02]' 
                : 'border-border hover:border-primary/20'
            }`}
          >
            {option.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Most Popular
                </Badge>
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{option.title}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold">{option.price}</span>
                {option.price !== "Custom" && <span className="text-muted-foreground">/audit</span>}
              </div>
              <p className="text-muted-foreground text-sm">{option.description}</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>Timeline: {option.timeline}</span>
                </div>
                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: option.timelineWeeks }).map((_, i) => (
                    <div 
                      key={i}
                      className="h-1 rounded-full bg-primary/20"
                    />
                  ))}
                  {option.timeline.includes('+') && (
                    <div className="h-1 rounded-full bg-primary/20 animate-pulse" />
                  )}
                </div>
              </div>
              <div className="space-y-3">
                {option.features.map((feature, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className={`w-full rounded-full ${option.isPopular ? '' : 'variant-outline'}`}
                asChild
              >
                <Link href="/contact">
                  Get started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="bg-muted/50 rounded-2xl p-8 border border-border">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Need a custom solution?</h3>
            <p className="text-muted-foreground mb-6">
              Have specific requirements or a larger project? Let's create a tailored plan that perfectly fits your needs.
            </p>
            <Button 
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="/contact">
                Contact us for custom pricing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Money back guarantee</h3>
            <p className="text-muted-foreground">
              Not satisfied with our audit? Get a full refund within 30 days if you're not completely happy with our recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 