import { memo } from "react"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ApiEndpoint } from "../../types/api"

interface EndpointSelectorProps {
  filteredEndpoints: ApiEndpoint[]
  onEndpointChange: (value: string) => void
}

function EndpointSelector({ filteredEndpoints, onEndpointChange }: EndpointSelectorProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="endpoint" className="text-xl font-bold">API Endpoint</Label>
      <Select onValueChange={onEndpointChange}>
        <SelectTrigger className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-lg h-14">
          <SelectValue placeholder="Select endpoint" />
        </SelectTrigger>
        <SelectContent className="border-4 border-black max-h-80">
          {filteredEndpoints.map((endpoint) => (
            <SelectItem 
              key={endpoint.name} 
              value={endpoint.name}
              className="text-lg cursor-pointer hover:bg-[#FFED66]"
            >
              {endpoint.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default memo(EndpointSelector)