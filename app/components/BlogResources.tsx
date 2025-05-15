"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Search, ArrowRight, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

type BlogPost = {
  id: string
  title: string
  description: string
  category: string
  readTime: string
  date: string
  image: string
}

const CATEGORIES = [
  "All",
  "Product Strategy",
  "UX Design",
  "Development",
  "Growth"
]

const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "10 Key Metrics to Track Your Product's Health",
    description: "Learn which metrics matter most for measuring your digital product's performance and user satisfaction.",
    category: "Product Strategy",
    readTime: "8 min read",
    date: "Mar 15, 2024",
    image: "/blog/metrics.jpg"
  },
  {
    id: "2",
    title: "The Psychology Behind Great UX Design",
    description: "Explore how understanding user psychology can lead to more intuitive and engaging digital experiences.",
    category: "UX Design",
    readTime: "6 min read",
    date: "Mar 12, 2024",
    image: "/blog/ux-psychology.jpg"
  },
  {
    id: "3",
    title: "Scaling Your Tech Stack: A Complete Guide",
    description: "Everything you need to know about scaling your technology infrastructure as your product grows.",
    category: "Development",
    readTime: "12 min read",
    date: "Mar 10, 2024",
    image: "/blog/scaling.jpg"
  },
  {
    id: "4",
    title: "Growth Hacking Techniques That Actually Work",
    description: "Proven strategies to accelerate your product's growth without compromising user experience.",
    category: "Growth",
    readTime: "10 min read",
    date: "Mar 8, 2024",
    image: "/blog/growth.jpg"
  }
]

export function BlogResources() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleSearch = (query: string) => {
    setIsLoading(true)
    setSearchQuery(query)
    setTimeout(() => setIsLoading(false), 500)
  }

  const handleCategoryChange = (category: string) => {
    setIsLoading(true)
    setSelectedCategory(category)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-8 lg:mb-12 px-4 py-2 text-base bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
          >
            Resources
          </Badge>
          <h2 className="text-[42px] sm:text-[56px] lg:text-[84px] leading-[0.95] tracking-tight font-bold mb-6">
            Digital Health <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-[520px] mx-auto mb-8 lg:mb-12 leading-relaxed">
            Stay updated with the latest trends, strategies, and best practices in digital product development.
          </p>
        </div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative max-w-md mx-auto">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </div>
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10 h-12 bg-card/50 dark:bg-card/40 border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {CATEGORIES.map((category) => (
              <motion.div
                key={category}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
              >
                <Button
                  variant={selectedCategory === category ? "default" : "secondary"}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full px-4 transition-all duration-200 ${
                    selectedCategory === category 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow'
                      : 'bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm'
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="relative min-h-[400px]">
          {isLoading && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card/50 dark:bg-card/40 hover:bg-card/80 rounded-2xl overflow-hidden border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5"
                >
                  <div className="aspect-[16/9] bg-primary/[0.03] dark:bg-primary/[0.02] group-hover:bg-primary/[0.05] dark:group-hover:bg-primary/[0.03] transition-colors duration-200">
                    <div className="w-full h-full flex items-center justify-center p-8">
                      {post.category === 'Analytics' && (
                        <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M8 16V8M12 16V4M16 16v-4" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {post.category === 'Development' && (
                        <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {post.category === 'Design' && (
                        <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2 2l7.586 7.586" strokeLinecap="round" strokeLinejoin="round"/>
                          <circle cx="11" cy="11" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {post.category === 'Security' && (
                        <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 2L2 7v6c0 5.523 4.477 10 10 10s10-4.477 10-10V7L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 22c-2.667-2-4-4.667-4-8 0-3.333 1.333-6 4-8 2.667 2 4 4.667 4 8 0 3.333-1.333 6-4 8z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {post.category === 'All' && (
                        <svg className="w-full h-full text-primary/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors duration-200">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground transition-colors duration-200">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant="secondary"
                        className="bg-primary/[0.03] dark:bg-primary/[0.02] text-primary border-primary/20 backdrop-blur-sm"
                      >
                        {post.category}
                      </Badge>
                      <Button 
                        variant="link" 
                        size="sm" 
                        className="group/btn text-primary p-0 hover:no-underline"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && !isLoading && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                No articles found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                }}
                className="bg-card/50 dark:bg-card/40 hover:bg-card/80 text-foreground border border-border hover:border-primary/20 backdrop-blur-sm transition-all duration-200 rounded-full px-6"
              >
                Clear filters
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
