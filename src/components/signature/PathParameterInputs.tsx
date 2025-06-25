import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ApiEndpoint, PathParams } from "../../types/api"

interface PathParameterInputsProps {
  selectedEndpoint: ApiEndpoint
  pathParams: PathParams
  onPathParamChange: (param: string, value: string) => void
  errors?: Record<string, string>
}

const getRandomColor = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#6A0572', '#AB83A1']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default function PathParameterInputs({ 
  selectedEndpoint, 
  pathParams, 
  onPathParamChange,
  errors = {}
}: PathParameterInputsProps) {
  if (selectedEndpoint.pathParams.length === 0) {
    return null
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4 bg-[#FF5E5B] px-2 border-2 border-black inline-block">
        Path Parameters
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {selectedEndpoint.pathParams.map((param) => (
          <div key={param} className="space-y-2">
            <Label 
              htmlFor={param} 
              className="text-lg font-bold px-2 border-2 border-black inline-block"
              style={{ backgroundColor: getRandomColor() }}
            >
              {param}
            </Label>
            <Input
              id={param}
              type="text"
              value={pathParams[param] || ""}
              onChange={(e) => onPathParamChange(param, e.target.value)}
              placeholder={`Enter ${param}`}
              className={`border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg p-4 font-mono ${
                errors[param] ? 'border-red-500' : 'border-black'
              }`}
            />
            {errors[param] && (
              <p className="text-red-600 text-sm font-bold bg-red-100 px-2 py-1 border-2 border-red-500">
                {errors[param]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}