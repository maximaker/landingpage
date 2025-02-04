export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-ping rounded-full bg-primary opacity-75 h-16 w-16"></div>
        <div className="relative rounded-full bg-primary h-8 w-8"></div>
      </div>
    </div>
  )
}