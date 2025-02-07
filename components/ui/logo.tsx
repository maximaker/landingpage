export function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <svg
        className="w-8 h-8 text-primary"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 8v16M8 16h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span 
        className="text-2xl font-normal tracking-[0.3em] uppercase" 
        style={{ fontFamily: '"Anurati Regular", system-ui, sans-serif' }}
      >
        Digital Vitamins
      </span>
    </div>
  )
}