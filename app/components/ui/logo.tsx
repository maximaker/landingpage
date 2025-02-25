interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <>
      <style jsx global>{`
        @keyframes dotPulse {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.9; }
        }
      `}</style>
      <div className={`inline-flex items-center ${className}`}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            display: 'inline-block',
            verticalAlign: 'middle',
            position: 'relative'
          }}
        >
          {/* Group for pill to maintain centering */}
          <g transform="rotate(35, 18, 18)">
            {/* Empty top half with orange border - more rounded */}
            <path
              d="M14 16C14 12.5 15.8 9.5 18 9.5C20.2 9.5 22 12.5 22 16V18H14V16Z"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              fill="transparent"
            />
            
            {/* Filled bottom half (orange) - more rounded */}
            <path
              d="M14 18H22V20C22 23.5 20.2 26.5 18 26.5C15.8 26.5 14 23.5 14 20V18Z"
              fill="hsl(var(--primary))"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          
          {/* Dots around the capsule with smooth sequential fading */}
          <circle cx="18" cy="4" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '0s' }} />
          <circle cx="25" cy="6" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '0.5s' }} />
          <circle cx="30" cy="12" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '1s' }} />
          <circle cx="32" cy="18" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '1.5s' }} />
          <circle cx="30" cy="24" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '2s' }} />
          <circle cx="25" cy="30" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '2.5s' }} />
          <circle cx="18" cy="32" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '3s' }} />
          <circle cx="11" cy="30" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '3.5s' }} />
          <circle cx="6" cy="24" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '4s' }} />
          <circle cx="4" cy="18" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '4.5s' }} />
          <circle cx="6" cy="12" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '5s' }} />
          <circle cx="11" cy="6" r="1.5" fill="hsl(var(--primary))" style={{ animation: 'dotPulse 6s ease-in-out infinite', animationDelay: '5.5s' }} />
        </svg>
      </div>
    </>
  )
}