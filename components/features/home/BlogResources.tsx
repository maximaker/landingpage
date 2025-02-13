'use client'

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function BlogResources() {
  const resources = [
    {
      title: "Building Scalable Digital Products",
      description: "Learn the key principles of creating products that can grow with your business.",
      category: "Product Strategy",
      readTime: "5 min read"
    },
    {
      title: "UX Design Best Practices",
      description: "Discover how to create intuitive and engaging user experiences.",
      category: "Design",
      readTime: "8 min read"
    },
    {
      title: "Product Health Checklist",
      description: "Essential metrics and checkpoints for assessing your product's performance.",
      category: "Product Health",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Latest Resources
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Stay informed with our latest insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles, guides, and resources to help you build better digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link href="#" key={index}>
              <Card className="group h-full bg-card/30 dark:bg-card/20 backdrop-blur-sm p-8 rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <Badge className="mb-4 bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20">
                  {resource.category}
                </Badge>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors mb-6">
                  {resource.description}
                </p>
                <div className="text-sm text-muted-foreground">{resource.readTime}</div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}