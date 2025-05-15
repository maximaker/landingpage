import * as React from "react";
import { cn } from "@/lib/utils";

// Heading: for h1, h2, h3, etc.
export function Heading({
  as: Comp = "h2",
  className = "",
  size = "2xl",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: any; size?: "xl" | "2xl" | "3xl" | "4xl" | "5xl" }) {
  const sizeMap = {
    xl: "text-xl font-bold tracking-tight",
    "2xl": "text-2xl font-bold tracking-tight",
    "3xl": "text-3xl font-bold tracking-tight",
    "4xl": "text-4xl font-bold tracking-tight",
    "5xl": "text-5xl font-bold tracking-tight",
  };
  return (
    <Comp className={cn(sizeMap[size], className)} {...props} />
  );
}

// Subheading: for section titles
export function Subheading({
  as: Comp = "h3",
  className = "",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & { as?: any }) {
  return (
    <Comp className={cn("text-xl font-semibold mb-2 text-foreground tracking-tight", className)} {...props} />
  );
}

// Body: for main text
export function Body({
  as: Comp = "p",
  className = "",
  size = "base",
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & { as?: any; size?: "sm" | "base" | "lg" }) {
  const sizeMap = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
  };
  return (
    <Comp className={cn(sizeMap[size], "text-foreground", className)} {...props} />
  );
}

// Label: for form labels, badges, etc.
export function Label({
  as: Comp = "span",
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { as?: any }) {
  return (
    <Comp className={cn("text-sm font-medium text-muted-foreground", className)} {...props} />
  );
} 