import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => (
  <section className="py-24 bg-muted/50 relative">
    <div className="max-w-5xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <p className="text-lg text-muted-foreground">
          Hear what our clients have to say about their experience and results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-card/50 rounded-2xl border border-border p-8 hover:border-primary/20 transition-colors group"
          >
            <div className="relative z-10 text-lg italic text-muted-foreground mb-6 group-hover:text-foreground transition-colors">
              "{testimonial.quote}"
            </div>
            <footer className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                {testimonial.image && (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </div>
  </section>
)

export default TestimonialsSection 