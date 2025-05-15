import { useState, useRef } from 'react';
import Image from 'next/image';

export default function BeforeAfterSlider({ before, after, caption }: { before: string; after: string; caption: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseLeave = () => setIsDragging(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-ew-resize"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={before}
            alt="Before"
            fill
            className="object-cover"
          />
        </div>

        {/* After Image */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={after}
            alt="After"
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-primary cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L4 12L8 16M16 8L20 12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/50 text-white text-sm rounded-md backdrop-blur-sm">
            Before
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/50 text-white text-sm rounded-md backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center mt-4">{caption}</p>
    </div>
  )
} 