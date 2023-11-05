
export const CircleFilled = ({ className }: {className?: string}) => {
  return (
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className={`text-pink-500 ${className}`} height="12" width="12" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8"></circle>
    </svg>
  )
}
