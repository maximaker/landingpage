import { cn } from "@/lib/utils"

interface ContentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
  variant?: "default" | "interactive"
}

export function ContentCard({
  className,
  children,
  variant = "default",
  ...props
}: ContentCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        "p-6 md:p-8",
        variant === "interactive" && "transition-all duration-200 hover:shadow-md hover:scale-[1.02]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}