import { memo } from "react"

interface FlowStepProps {
  title: string
  content: string
  isActive?: boolean
  isComplete?: boolean
  stepNumber: number
  bgColor?: string
}

function FlowStep({ 
  title, 
  content, 
  isActive = false, 
  isComplete = false, 
  stepNumber,
  bgColor = "#FFED66"
}: FlowStepProps) {
  const getStepBorderColor = () => {
    if (isComplete) return "border-green-500"
    if (isActive) return "border-blue-500"
    return "border-black"
  }

  const getStepBgColor = () => {
    if (isComplete) return "bg-green-100"
    if (isActive) return "bg-blue-100"
    return "bg-gray-50"
  }

  return (
    <div className="relative">
      {/* Step Number Badge */}
      <div 
        className="absolute -top-3 -left-3 w-8 h-8 rounded-full border-4 border-black font-black text-sm flex items-center justify-center z-10"
        style={{ backgroundColor: bgColor }}
      >
        {stepNumber}
      </div>
      
      {/* Main Step Box */}
      <div 
        className={`p-4 border-4 ${getStepBorderColor()} ${getStepBgColor()} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 transform ${
          isActive ? 'scale-105 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : ''
        } ${isComplete ? 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : ''}`}
      >
        <h3 className="font-black text-lg mb-2 border-b-2 border-black pb-1">
          {title}
        </h3>
        <div className={`font-mono text-sm break-all transition-all duration-300 ${
          isActive ? 'text-blue-800' : ''
        }`}>
          {content || (
            <span className="text-gray-400 italic">Waiting for input...</span>
          )}
        </div>
        
        {/* Status Indicator */}
        {isComplete && (
          <div className="mt-2 text-green-600 font-bold text-xs">✓ COMPLETE</div>
        )}
        {isActive && !isComplete && (
          <div className="mt-2 text-blue-600 font-bold text-xs animate-pulse">⚡ PROCESSING</div>
        )}
      </div>
    </div>
  )
}

export default memo(FlowStep)