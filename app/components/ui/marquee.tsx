import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: number
}

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 40,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden",
        className
      )} 
      {...props}
    >
      <div 
        className="inline-flex flex-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: pauseOnHover ? "paused" : "running",
          direction: direction === "right" ? "rtl" : "ltr"
        }}
      >
        <div className="flex items-center justify-around min-w-full gap-16">
          {children}
        </div>
        <div className="flex items-center justify-around min-w-full gap-16">
          {children}
        </div>
      </div>
    </div>
  )
} 