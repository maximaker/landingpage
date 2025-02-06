import {
  ActivityIcon,
  EyeIcon,
  BrainCircuitIcon,
  RocketIcon,
  SparklesIcon,
  HeartPulseIcon,
  LineChartIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
  {
    Icon: EyeIcon,
    name: "Vitamin A: Awareness",
    description: "Diagnose usability issues, uncover opportunities, and set a baseline for growth.",
    href: "/products",
    cta: "45% Avg. Improvement",
    background: <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BrainCircuitIcon,
    name: "Vitamin C: Clarity",
    description: "Refine priorities, map user journeys, and align your vision with reality.",
    href: "/products",
    cta: "85% Client Satisfaction",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: RocketIcon,
    name: "Vitamin D: Direction",
    description: "Build scalable roadmaps, create design systems, and structure your product for success.",
    href: "/products",
    cta: "3x Faster Development",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: ActivityIcon,
    name: "Vitamin E: Execution",
    description: "Deliver high-quality designs, prototypes, and handoffs that bring your ideas to life.",
    href: "/products",
    cta: "60% Time Saved",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LineChartIcon,
    name: "Vitamin K: Continuity",
    description: "Maintain stability with ongoing support, bug fixes, and performance tracking.",
    href: "/products",
    cta: "99.9% Uptime",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
  {
    Icon: SparklesIcon,
    name: "Vitamin I: Innovation",
    description: "Explore bold ideas, integrate emerging tech, and future-proof your product with cutting-edge solutions.",
    href: "/products",
    cta: "90% Success Rate",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-4 lg:row-end-5",
  },
  {
    Icon: HeartPulseIcon,
    name: "Vitamin P: Progress",
    description: "Optimize features, test solutions, and implement engagement strategies for sustained growth.",
    href: "/products",
    cta: "2.5x Growth Rate",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent" />,
    className: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
  },
];

export function BentoDemo() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Digital <span className="text-primary">Vitamins</span>
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-lg">
            Each vitamin is carefully formulated to address specific aspects of your product's growth and sustainability.
          </p>
        </div>
        <BentoGrid className="lg:grid-rows-4">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}