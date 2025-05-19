import * as Accordion from '@radix-ui/react-accordion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    question: "How long does a UX audit take?",
    answer: "A typical UX audit takes 2-3 weeks, depending on the complexity of your product. This includes research, analysis, and preparation of deliverables."
  },
  {
    question: "What do I need to provide?",
    answer: "Access to your product, analytics data if available, and any existing user research. We'll also need brief sessions with key stakeholders."
  },
  {
    question: "Is this different from user testing?",
    answer: "Yes. While user testing observes actual users, a UX audit is an expert evaluation based on established principles and best practices. Both are valuable and complementary."
  },
  {
    question: "What happens after the audit?",
    answer: "You'll receive a detailed report with actionable recommendations. We can then discuss implementation support or hand over to your team."
  }
];

export function FAQSection() {
  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold mb-4">Have more questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Feel free to reach out to us directly.
          </p>
          <Button 
            variant="outline"
            className="rounded-full"
            asChild
          >
            <Link href="/contact">
              Contact us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        <div className="bg-muted/50 rounded-2xl p-8 border border-border">
          <h3 className="text-xl font-semibold mb-4">Ready to get started?</h3>
          <p className="text-muted-foreground mb-6">
            Book a free consultation to discuss your product's needs.
          </p>
          <Button 
            className="rounded-full"
            asChild
          >
            <Link href="/contact">
              Schedule consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <Accordion.Root type="single" collapsible className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`item-${index}`}
            className="bg-card rounded-lg border border-border overflow-hidden group"
          >
            <Accordion.Trigger className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none">
              <span className="font-medium group-hover:text-primary transition-colors">{item.question}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90" />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-4">
              <p className="text-muted-foreground">{item.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
} 