import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CallToActionSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's discuss how we can help transform your digital product.
        </p>
        <div className="inline-flex flex-col items-center">
          <Button 
            size="lg" 
            className="rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
            asChild
          >
            <Link href="/contact">
              Schedule a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No commitment required. Let's explore the possibilities together.
          </p>
        </div>
      </div>
    </section>
  );
} 