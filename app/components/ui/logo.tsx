interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-spin-slow"
        />
        <path
          d="M16 8v16M8 16h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="opacity-70"
        />
        <circle
          cx="16"
          cy="16"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          className="animate-pulse"
        />
      </svg>
      <span className="text-lg font-bold text-foreground tracking-tight hover:text-primary transition-colors duration-200">Digital Vitamins</span>
    </div>
  )
}