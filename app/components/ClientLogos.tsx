import { motion } from "framer-motion"

const CLIENTS = [
  {
    name: "TechFlow",
    logo: (
      <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8h88M20 16h88M20 24h88" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "InnovateLab",
    logo: (
      <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" className="stroke-muted-foreground/40" strokeWidth="2"/>
        <path d="M40 8L56 24M56 8L40 24" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
        <path d="M72 8v16M64 16h16" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "BuildBetter",
    logo: (
      <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="16" height="16" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 16L48 8l8 8-8 8z" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="80" cy="16" r="8" className="stroke-muted-foreground/40" strokeWidth="2"/>
      </svg>
    )
  },
  {
    name: "FutureScale",
    logo: (
      <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 24L32 8M48 24L32 8M32 8v16" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
        <path d="M64 8v16l16-16v16" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "GrowthLabs",
    logo: (
      <svg className="w-32 h-8" viewBox="0 0 128 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24l16-16l16 8l16-16" className="stroke-muted-foreground/40" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="8" r="4" className="stroke-muted-foreground/40" strokeWidth="2"/>
        <circle cx="40" cy="16" r="4" className="stroke-muted-foreground/40" strokeWidth="2"/>
        <circle cx="56" cy="0" r="4" className="stroke-muted-foreground/40" strokeWidth="2"/>
      </svg>
    )
  }
]

export function ClientLogos() {
  return (
    <div className="w-full overflow-hidden">
      <motion.div 
        className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {CLIENTS.map((client, index) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1
            }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.2)"
            }}
            className="group relative"
          >
            <div className="absolute -inset-4 rounded-lg bg-primary/[0.03] dark:bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-sm" />
            <div className="relative">
              {client.logo}
              <span className="sr-only">{client.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gradient overlays for infinite scroll effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
} 