import { memo } from "react"

interface FlowConnectorProps {
  isActive?: boolean
  direction?: "down" | "right"
  animated?: boolean
}

function FlowConnector({ 
  isActive = false, 
  direction = "down",
  animated = false 
}: FlowConnectorProps) {
  const baseClasses = "transition-all duration-500"
  const activeClasses = isActive ? "stroke-blue-500" : "stroke-gray-400"
  const animationClasses = animated ? "animate-pulse" : ""

  if (direction === "down") {
    return (
      <div className="flex justify-center my-4">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          className={`${baseClasses} ${animationClasses}`}
        >
          {/* Vertical Line */}
          <line 
            x1="20" 
            y1="0" 
            x2="20" 
            y2="25" 
            strokeWidth="4" 
            className={activeClasses}
          />
          {/* Arrow Head */}
          <polygon 
            points="20,35 15,25 25,25" 
            className={`fill-current ${isActive ? 'text-blue-500' : 'text-gray-400'} ${baseClasses}`}
          />
          {/* Arrow border */}
          <polygon 
            points="20,35 15,25 25,25" 
            fill="none"
            strokeWidth="2" 
            className={activeClasses}
          />
        </svg>
      </div>
    )
  }

  // Right direction
  return (
    <div className="flex items-center mx-4">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        className={`${baseClasses} ${animationClasses}`}
      >
        {/* Horizontal Line */}
        <line 
          x1="0" 
          y1="20" 
          x2="25" 
          y2="20" 
          strokeWidth="4" 
          className={activeClasses}
        />
        {/* Arrow Head */}
        <polygon 
          points="35,20 25,15 25,25" 
          className={`fill-current ${isActive ? 'text-blue-500' : 'text-gray-400'} ${baseClasses}`}
        />
        {/* Arrow border */}
        <polygon 
          points="35,20 25,15 25,25" 
          fill="none"
          strokeWidth="2" 
          className={activeClasses}
        />
      </svg>
    </div>
  )
}

export default memo(FlowConnector)