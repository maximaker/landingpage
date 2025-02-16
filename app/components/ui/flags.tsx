export const Flags = {
  GB: () => (
    <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      {/* Background */}
      <rect width="24" height="18" fill="#012169"/>
      {/* White diagonal crosses */}
      <path d="M0 0l24 18M24 0l-24 18" stroke="#FFFFFF" strokeWidth="2"/>
      {/* Red diagonal crosses */}
      <path d="M0 0l24 18M24 0l-24 18" stroke="#C8102E" strokeWidth="1.2"/>
      {/* White cross */}
      <path d="M12 0v18M0 9h24" stroke="#FFFFFF" strokeWidth="4"/>
      {/* Red cross */}
      <path d="M12 0v18M0 9h24" stroke="#C8102E" strokeWidth="2"/>
    </svg>
  ),
  FR: () => (
    <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <rect width="8" height="18" fill="#002395"/>
      <rect x="8" width="8" height="18" fill="#FFFFFF"/>
      <rect x="16" width="8" height="18" fill="#ED2939"/>
    </svg>
  ),
  RO: () => (
    <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <rect width="8" height="18" fill="#002B7F"/>
      <rect x="8" width="8" height="18" fill="#FCD116"/>
      <rect x="16" width="8" height="18" fill="#CE1126"/>
    </svg>
  )
} 